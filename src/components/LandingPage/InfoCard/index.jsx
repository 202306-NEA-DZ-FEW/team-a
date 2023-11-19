function InfoCard({
  title,
  description,
  icon,
  className,
  textClassName,
  pClassName,
  bgImage,
}) {
  return (
    <div
      className={`${className} p-4 flex flex-col flex-1 justify-center items-center gap-4`}
      style={{ backgroundImage: bgImage }}
    >
      {icon}
      <h2 className={`${textClassName}`}>{title}</h2>

      <p className={`${pClassName}`}> {description}</p>
    </div>
  );
}

export default InfoCard;
