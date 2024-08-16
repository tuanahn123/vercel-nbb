import React from "react";
function Input(props) {
    const { className,placeholder, ...rest } = props
    const inputTextClassname = `py-3.5 w-full px-9 rounded-lg border border-solid border-[#4B4885] ${className}`

    return ( 
        <input className={inputTextClassname} {...rest} style={{ backgroundColor: 'transparent' }} placeholder={placeholder} />
     );
}

export default Input;