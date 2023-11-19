function InfoCard({ title, description, icon, className, bgImage }) {
  return (
    <div
      className={`${className} p-4 flex flex-col flex-1 justify-center items-center gap-4`}
      style={{ backgroundImage: bgImage }}
    >
      {icon}
      <h2 className='text-2xl md:text-3xl font-bold'>{title}</h2>
      <p className='text-md font-light'>{description}</p>
    </div>
  );
}

export default InfoCard;
