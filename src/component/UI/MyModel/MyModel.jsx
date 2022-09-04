import React from "react";
import cl from './MyModel.module.scss'

const MyModel = ({children, visable, setVisible}) => {

    const rootClasses = [cl.myModal]

    if (visable) {
        rootClasses.push(cl.active)
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

};

export default MyModel;