function Input({
  name,
  placeholder,
  label,
  type,
  handleChange,
  value,
  handleBlur,
  touched,
  error,
}) {
  return (
    <div>
      <div className='label'>
        <label htmlFor={name} className='label-text'>
          {label}
        </label>
        <label
          className={`label-text-alt ${touched && error ? "text-error" : ""}`}
        >
          {touched && error ? error : ""}
        </label>
      </div>
      <input
        className='input bg-white input-primary w-full'
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Input;
