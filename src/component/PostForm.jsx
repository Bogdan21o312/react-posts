import MyInput from "./UI/input/Myinput";
import MyButton from "./UI/button/MyButton";
import {React, useState} from "react";


const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Title post"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Name post"
                />
                <MyButton onClick={addNewPost}>Created post</MyButton>
            </form>
        </div>
    );

};

export default PostForm;