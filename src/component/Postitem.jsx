import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import "../style/Pages/Posts.scss"
import PostsButton from "./UI/button/PostsButton";

const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className="post">
            <div className="post__container">
                <div className="post__content">
                    <div className="post__block-text">
                        <strong className="post__title">{props.post.id}. {props.post.title}</strong>
                        <p className="post__text">
                            {props.post.body}
                        </p>
                    </div>
                    <div className="post__buttons">
                        <div>
                            <PostsButton onClick={() => router(`/posts/${props.post.id}`)}>
                                Open
                            </PostsButton>
                            <PostsButton onClick={() => props.remove(props.post)}>
                                Delete
                            </PostsButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;