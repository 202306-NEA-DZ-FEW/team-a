import { useTranslation } from "next-i18next";

function Checkbox({
  name,
  label,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
}) {
  const { i18n } = useTranslation();
  return (
    <div>
      <div className='flex items-center gap-2 pl-3'>
        <input
          type='checkbox'
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`checkbox ${
            touched && error ? "checkbox-error" : "checkbox-primary"
          } ${i18n?.language == "ar" ? "scale-x-[-1]" : ""}`}
        />
        <label htmlFor={name} className='label label-text'>
          {label}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
