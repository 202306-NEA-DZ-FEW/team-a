export default function TextAreaInput({
  name,
  placeholder,
  label,
  type,
  handleChange,
  value,
  handleBlur,
  touched,
  error,
  textLength,
  maxLength,
}) {
  return (
    <div className='form-control'>
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
      <textarea
        className='textarea textarea-primary textarea-bordered h-24 w-full bg-white'
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
      />
      <div className='label'>
        <label htmlFor={name} className='label-text'></label>
        <label
          className={`label-text-alt ${
            textLength >= maxLength ? "text-error" : ""
          }`}
        >
          {textLength}/{maxLength}
        </label>
      </div>
    </div>
  );
}
