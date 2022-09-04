import React, {useState, useEffect, useRef} from "react";
import PostList from "../component/Postlist";
import MyButton from "../component/UI/button/MyButton";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModel from "../component/UI/MyModel/MyModel";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../component/UI/loanging/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
import {useObserved} from "../hooks/useObserved";
import MySelect from "../component/UI/select/MySelect";
import NavbarButton from "../component/UI/button/NavbarButton";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [model, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserved(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <div className="posts__container">
                <h1 className="posts__title">Page with posts</h1>
                <div className="posts__buttons">
                    <NavbarButton onClick={fetchPosts}>GET POSTS</NavbarButton>
                    <MyButton onClick={() => setModal(true)}>
                        Created Post
                    </MyButton>
                    <MyModel visable={model} setVisible={setModal}>
                        <h6 className="posts__model_title">Created posts</h6>
                        <PostForm create={createPost}></PostForm>
                    </MyModel>
                </div>
                <hr/>
                <div className="posts__filters">
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue="The number of elements on the page"
                        options={[
                            {value: 5, name: '5'},
                            {value: 10, name: '10'},
                            {value: 25, name: '25'},
                            {value: 50, name: '50'},
                            {value: -1, name: 'Show all'}
                        ]}
                    />
                    {postError &&
                        <h6>Error posts ${postError}</h6>
                    }
                </div>
                <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
                <div ref={lastElement}/>
                {isPostsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                }
                <Pagination
                    page={page}
                    changePage={changePage}
                    totalPages={totalPages}/>
            </div>
        </div>
    );
}

export default Posts;
