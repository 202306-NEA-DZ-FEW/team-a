function InfoCard({ title, description, icon }) {
  return (
    <div className='p-4 flex flex-col flex-1 items-center gap-4'>
      {icon}
      <h2 className='text-3xl font-bold'>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default InfoCard;
