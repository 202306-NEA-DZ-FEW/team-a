import { easeIn, motion } from "framer-motion";

function CausesCard({ title, description, icon, img }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className='flex-1 min-w-[300px] h-96 flex-grow flex justify-center intems-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/10 group rounded-3xl shadow-2xl overflow-hidden cursor-pointer'
    >
      <div
        className='relative w-full h-full bg-cover bg-no-repeat p-4 flex flex-col flex-1 justify-center items-center gap-4'
        style={{
          backgroundImage: `linear-gradient(rgba(114, 173, 132, 0.64),rgba(80, 140, 98, 1)), url(${img})`,
        }}
      >
        {icon}
        <h2 className='absolute bottom-8 left-24 origin-bottom-left -rotate-90 font-black text-white tracking-wider text-5xl'>
          {title}
        </h2>
        <p className='absolute text-xl w-full h-full bg-neutral flex justify-center items-center translate-x-72 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 text-white'>
          {" "}
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default CausesCard;
