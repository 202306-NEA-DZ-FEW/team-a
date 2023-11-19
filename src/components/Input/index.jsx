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
  sm,
}) {
  return (
    <div>
      <div className='label ml-2'>
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
        className={`input ${sm ? "input-sm" : ""} bg-base-200 ${
          touched && error ? "input-error" : "input-primary"
        } w-full rounded-full border-opacity-25`}
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
