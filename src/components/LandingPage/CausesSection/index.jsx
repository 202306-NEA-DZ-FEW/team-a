import { FaHandHoldingWater } from "react-icons/fa";
import { IoHelpBuoy } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";

import Container from "@/components/container";

function CausesSection() {
  return (
    <Container className='min-h-screen flex flex-col justify-center'>
      <h1 className='text-4xl text-center font-bold font-nunito'>Causes</h1>
      <div className='flex flex-col justify-center items-start text-center p-6 md:flex-row'>
        <div className='p-4 flex flex-col flex-1 items-center gap-4'>
          <IoHelpBuoy className='text-6xl text-error' />
          <h2 className='text-3xl font-bold'>Warmth</h2>
          <p>
            we believe that refugees & homeless deserve having access to clean
            warm clothes in the cold winter & comfy clothes in the summer.
          </p>
        </div>
        <div className='p-4 flex flex-col flex-1 items-center gap-4'>
          <LuHeartHandshake className='text-6xl text-error' />
          <h2 className='text-3xl font-bold'>Comfort</h2>
          <p>
            we seek helping people in need to find affordable furnitures &
            appliances because everyone deserves to have a home, not just a
            house.
          </p>
        </div>
        <div className='p-4 flex flex-col flex-1 items-center gap-4'>
          <FaHandHoldingWater className='text-6xl text-error' />
          <h2 className='text-3xl font-bold'>Health</h2>
          <p>
            Let&apos;s share believes that every human being deserves a warm
            meal whenever it&apos;s difficult.
          </p>
        </div>
      </div>

      {/* PiHandHeart  PiHandHeartFill PiHandHeartDuotone FaHandHoldingHeart */}
      {/* MdOutlineHandshake */}
    </Container>
  );
}

export default CausesSection;
