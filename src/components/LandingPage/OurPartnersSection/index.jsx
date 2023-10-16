import Container from "@/components/container";
import Image from "next/image";
import recoded from "public/images/recoded3.png";
import mepi from "public/images/mepi1.png";
import microsoft from "public/images/microsoft4.png";
import flatironschool from "public/images/flatironschool2.png";

function OurPartnersSection() {
  return (
    <Container className='min-h-screen flex flex-col justify-center items-center gap-8  '>
      <h1 className='text-3xl font-poppins font-bold '>Our Partners </h1>
      <div className='flex justify-center items-center flex-wrap gap-6 ms:flex-col'>
        <Image
          src={recoded}
          alt='recoded'
          width={200}
          height={100}
          className=' object-cover rounded-xl '
        />
        <Image
          src={flatironschool}
          alt='flatironschool'
          width={200}
          height={100}
          className=' object-cover rounded-xl'
        />
        <Image
          src={microsoft}
          alt='microsoft'
          width={200}
          height={100}
          className=' object-cover rounded-xl'
        />
        <Image
          src={mepi}
          alt='mepi'
          width={200}
          height={100}
          className=' object-cover rounded-xl'
        />
      </div>
    </Container>
  );
}

export default OurPartnersSection;
