import Image from "next/image";
import Spinner from "public/images/spinner.svg";

function ImageSpinner({ classes }) {
  return (
    <div className={classes}>
      <Image
        className='opacity-60 w-1/2 h-1/2 object-contain'
        src={Spinner}
        alt='loading'
        height={32}
        width={32}
        priority
      />
    </div>
  );
}

export default ImageSpinner;
