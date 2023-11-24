function StatisticsCard({ title, description, icon }) {
  return (
    <div className='lg:p-4 flex flex-col flex-1 items-center gap-4'>
      {icon}
      <h2 className='text-2xl md:text-3xl font-bold'>{title}</h2>
      <p className='text-md font-light'>{description}</p>
    </div>
  );
}

export default StatisticsCard;
