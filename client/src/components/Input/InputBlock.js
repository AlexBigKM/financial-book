import React from 'react';
import "./InputBlock.css"

const InputBlock = ({label, value, onChange, type, autoComplete, placeholder}) => {

    return (
        <div className={"inputWrapper"}>
            <label className={"authInputLabel"}>{label}
                <input className={"authInput"} value={value} onChange={onChange} type={type} autoComplete={autoComplete} placeholder={placeholder} />
            </label>
        </div>
    );
};

export default InputBlock;