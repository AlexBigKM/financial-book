import React from 'react';
import classNames from "classnames";
import "./ContentContainer.css";

const ContentContainer = ({containerClassName, children}) => {
    return (
        <div className={`container ${containerClassName}`}>
            {children}
        </div>
    );
};

export default ContentContainer;