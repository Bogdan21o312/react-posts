import React from "react";
import PostItem from "./Postitem";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1>
                None posts
            </h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {posts.map((post, index) =>
                    <div
                    key={post.id}
                    timeout={500}
                    classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}></PostItem>
                    </div>
                )}
            </div>
        </div>
    );

};

export default PostList;