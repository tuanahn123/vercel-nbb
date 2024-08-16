
const InputField = ({ label, value, onChange, type = 'text', error }) => (
    <div className="mt-3">
      <label className="block text-white text-sm font-medium mb-2">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={`shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${error ? 'border-red-500' : ''}`}
        placeholder={`Nhập ${label.toLowerCase()} vào đây`}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
);
export default InputField;