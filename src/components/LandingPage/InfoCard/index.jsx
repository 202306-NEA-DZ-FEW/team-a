function InfoCard({ title, description, icon, className }) {
  return (
    <div
      className={`${className} w-[300px] h-[300px] pt-4 px-4 flex flex-col flex-1 items-center gap-4 bg-white x`}
    >
      {icon}
      <h2 className='text-2xl md:text-3xl font-bold'>{title}</h2>
      <p className='text-md font-light'>{description}</p>
    </div>
  );
}

export default InfoCard;
