import React from "react";
import classes from './MyButton.module.scss';

const PostsButton = ({children, ...props}) => {

    return (
        <button {...props} className={classes.postsButton}>
            {children}
        </button>
    );

};

export default PostsButton;