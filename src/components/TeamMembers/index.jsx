import { motion } from "framer-motion";
import React from "react";

import MemberCard from "../MemberCard";

function TeamMembers({ team, t }) {
  return (
    <>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-3xl font-black text-center my-10'
      >
        {t("about:teamLabel")}
      </motion.h1>

      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex flex-wrap gap-4 items-center justify-center w-full'
      >
        {team.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            github={member.github}
            linkedin={member.linkedin}
            imageUrl={member.imageUrl}
          />
        ))}
      </motion.section>
    </>
  );
}

export default TeamMembers;
