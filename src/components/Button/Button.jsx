import React from "react";

function Button(props) {
    const { className, children, icon, ...rest } = props;

    // Define button and span class names
    const buttonClassName = `-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-9 lg:py-3 ${className}`;
    const spanClassName = `skew-x-12 font-sora text-base lg:text-lg font-semibold`;

    return ( 
        <button className={buttonClassName} {...rest}>
            {icon && <img src={icon} alt="" className="mr-2" />} {/* Display icon if provided */}
            <span className={spanClassName}>{children}</span>
        </button>
    );
}

export default Button;
