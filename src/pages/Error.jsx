import React from "react";
import "../style/Pages/Error.scss"

const  Error = () => {
    return (
        <div className="error__container">
            <h1 className="error__title">ERROR</h1>
            <h6 className="error__text">
                Not Found
                <br/>
                The requested URL was not found on this server.
            </h6>
        </div>
    );
};

export default Error;