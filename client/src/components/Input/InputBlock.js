import React from 'react';
import styles from "./InputBlock.css"

const InputBlock = ({label, value, onChange, type, autoComplete, placeholder}) => {

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.authInputLabel}>{label}
                <input className={styles.authInput} value={value} onChange={onChange} type={type}
                       autoComplete={autoComplete} placeholder={placeholder}/>
            </label>
        </div>
    );
};

export default InputBlock;