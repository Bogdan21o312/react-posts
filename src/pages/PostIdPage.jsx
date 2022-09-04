import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../component/UI/loanging/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (

        <div className="post-open">
            <div className="post-open__container">
                <h1 className="post-open__title">You open page post = {params.id}</h1>
                {isLoading
                    ? <Loader/>
                    : <div className="post-open__sub-title">{post.id}. {post.title}</div>
                }
                <div className="post-open__comments-block block-comment">
                    <h2 className="block-comment__title">
                        Comments
                    </h2>
                    {isLoading
                        ? <Loader/>
                        : <div className="block-comment__content">
                            {comments.map(comm =>
                                <div className="block-comment__id" key={comm.id}>
                                    <h5 className="block-comment__email">{comm.email}</h5>
                                    <div className="block-comment__body">{comm.body}</div>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};
export default PostIdPage;