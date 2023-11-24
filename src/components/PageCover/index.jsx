function PageCover({ t, title, description, imageURL, date }) {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <div className='hero-overlay bg-opacity-50'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-lg'>
          <h1 className='mb-5 text-5xl font-bold'>{t ? t(title) : title}</h1>
          <p className='mb-5'>{t ? t(date) : date} </p>
          <p className='mb-5'>{t ? t(description) : description} </p>
        </div>
      </div>
    </div>
  );
}

export default PageCover;
