import React from "react";

function InputTime(props) {

    const { classNameStart,classNameEnd, label, ...rest  } = props
    const inputTimeStartClassname = `py-3.5 w-50 px-5 rounded-lg border-y border-l rounded-r-none border-solid w-full border-[#4B4885] border-r border-r-2 ${classNameStart}`
    const inputTimeEndClassname = `py-3.5 w-50 px-5 rounded-lg border-y border-r rounded-l-none border-solid w-full border-[#4B4885] ${classNameEnd}`

    return ( 
        <div className=" relative">
           <label  className="text-lg px-2 absolute -top-4 left-8 bg-[#1A1672] rounded-lg w-max">
             {label}
           </label>
           <div className="flex">
            <input type="time" className={inputTimeStartClassname} style={{ backgroundColor: 'transparent' }} {...rest}/>
            <input type="time" className={inputTimeEndClassname} style={{ backgroundColor: 'transparent' }} {...rest}/>
           </div>

        </div>
    
     );
}

export default InputTime;