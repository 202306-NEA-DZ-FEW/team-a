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
        className={`textarea no-scrollbar ${
          touched && error ? "textarea-error" : "textarea-primary"
        }  textarea-bordered border-opacity-25 h-24 w-full bg-base-200`}
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
