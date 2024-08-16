import React, { useState } from 'react';
function InputRange ({ className, minValue, maxValue, stepValue, ...rest }) {
  const classNameInputRange = `w-full h-1 input_range_thumb ${className}`;
  const [sliderValue, setSliderValue] = useState(0);

  const updateSliderValue = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <div className="mt-4">
        <input
          type="range"
        //   id={sliderId}
          min={minValue}
          max={maxValue}
          step={stepValue}
          className={classNameInputRange}
          onInput={updateSliderValue}
          value={sliderValue}
          {...rest}
        />
      </div>
      <div className="mt-2 text-[#A0A0A0]">
        <span>{sliderValue}</span>
      </div>
    </div>
  );
};

export default InputRange;