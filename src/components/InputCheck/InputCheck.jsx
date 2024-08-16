import React, { useState } from "react";
import imgCheck from "../../assets/images/Input/check.png";
function InputCheck(props) {
  const { label } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <input
        type="checkbox"
        id={label}
        className="peer sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={label} className="relative cursor-pointer">
        {/* <div className="w-5 h-5 border border-gray-300 bg-transparent peer-checked:bg-[url${imgCheck}]" /> */}
        <div className={`w-5 h-5 border border-gray-300 bg-transparent ${checked ? 'peer-checked' : ''}`}>
          {checked && <img src={imgCheck} alt="Checked" />}
        </div>  
      </label>
      <label htmlFor={label} className="text-[#A0A0A0]">
        {label}
      </label>
    </div>
  );
}

export default InputCheck;