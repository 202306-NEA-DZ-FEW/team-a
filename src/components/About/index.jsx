function AboutPageCover({ t }) {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className='hero-overlay bg-opacity-50'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{t("about:title")}</h1>
          <p className='mb-5'>{t("about:description")} </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageCover;
