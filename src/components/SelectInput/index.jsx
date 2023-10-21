function SelectInput({
  data,
  name,
  label,
  handleChange,
  touched,
  error,
  value,
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
        className='select select-primary bg-white w-full'
        onChange={handleChange}
        defaultValue={value}
      >
        {data.map(({ name, stateKey }, index) => (
          <option key={index} value={stateKey}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
