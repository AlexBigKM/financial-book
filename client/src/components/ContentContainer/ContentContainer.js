import React from 'react';
import classNames from "classnames";
import styles from "./ContentContainer.css";

const ContentContainer = ({containerClassName, children}) => {
    return (
        <div className={classNames(styles.container, containerClassName)}>
            {children}
        </div>
    );
};

export default ContentContainer;