import Image from "next/image";
import Spinner from "public/images/spinner.svg";

function Loader() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Image src={Spinner} alt='loading' height={100} width={100} priority />
    </div>
  );
}

export default Loader;
