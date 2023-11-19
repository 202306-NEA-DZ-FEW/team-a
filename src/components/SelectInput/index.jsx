function SelectInput({
  data,
  name,
  label,
  handleChange,
  touched,
  error,
  value,
  sm,
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
      <select
        id={name}
        className={`select ${sm ? "select-sm" : ""}  ${
          touched && error ? "select-error" : "select-primary"
        } bg-base-200 w-full border-opacity-25 rounded-3xl`}
        onChange={handleChange}
        defaultValue={value}
      >
        {data.map(({ name, dataKey }, index) => (
          <option key={index} value={dataKey}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
