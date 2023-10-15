import { FaHandHoldingWater } from "react-icons/fa";
import { IoHelpBuoy } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function CausesSection() {
  return (
    <Container className='min-h-screen flex flex-col justify-center'>
      <h1 className='text-4xl text-center font-bold font-nunito'>Causes</h1>
      <div className='flex flex-col justify-center items-start text-center p-6 md:flex-row'>
        <InfoCard
          icon={<IoHelpBuoy className='text-6xl text-error' />}
          title='Warmth'
          description=' we believe that refugees & homeless deserve having access to clean
            warm clothes in the cold winter & comfy clothes in the summer.'
        />

        <InfoCard
          icon={<LuHeartHandshake className='text-6xl text-error' />}
          title='Comfort'
          description='we seek helping people in need to find affordable furnitures &
            appliances because everyone deserves to have a home, not just a
            house.'
        />
        <InfoCard
          icon={<FaHandHoldingWater className='text-6xl text-error' />}
          title='Health'
          description=" Let's share believes that every human being deserves a warm
            meal whenever it's difficult."
        />
      </div>
    </Container>
  );
}

export default CausesSection;
