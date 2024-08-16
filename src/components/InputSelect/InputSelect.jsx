function InputSelect(props) {
    const { className, placeholder, id, label, options = [], ...rest } = props;
    const inputSelectClassname = `py-3.5 w-full px-9 rounded-lg border border-solid border-[#4B4885] appearance-none ${className}`;
    
    return (
        <div className="relative">
            <label className="text-lg px-2 absolute -top-4 left-8 bg-[#1A1672] rounded-lg">
                {label}
            </label>
            <select className={inputSelectClassname} style={{ backgroundColor: 'transparent' }} {...rest}>
                {options.map((option, index) => (
                    <option className="bg-black" key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M7.23573 9.59428C7.63525 10.0677 8.36475 10.0677 8.76427 9.59428L14.8392 2.3949C15.3879 1.74472 14.9257 0.75 14.075 0.75H1.92503C1.0743 0.75 0.612126 1.74472 1.16076 2.3949L7.23573 9.59428Z" fill="#D9D9D9" />
                </svg>
            </div>
        </div>
    );
}
export default InputSelect
