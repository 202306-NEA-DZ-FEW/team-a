import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import styles from "./styles.module.css";

function MemberCard({ teamMembers = [] }) {
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    const imgBx = document.querySelectorAll(`.${styles.imgbx}`);

    const handleMouseOrTouch = (index) => {
      setActiveContent(index + 1);
    };

    imgBx.forEach((element, index) => {
      element.addEventListener("mouseenter", () => handleMouseOrTouch(index));
      element.addEventListener("click", () => handleMouseOrTouch(index));
      element.addEventListener("touchstart", (event) => {
        event.preventDefault();
        handleMouseOrTouch(index);
      });
    });

    return () => {
      imgBx.forEach((element, index) => {
        element.removeEventListener("mouseenter", () =>
          handleMouseOrTouch(index)
        );
        element.removeEventListener("click", () => handleMouseOrTouch(index));
        element.removeEventListener("touchstart", () =>
          handleMouseOrTouch(index)
        );
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.imgbx} ${
              index + 1 === activeContent ? styles.active : ""
            }`}
            style={{ "--i": index + 1 }}
          >
            <Image
              src={member.imageUrl}
              alt={`recoded${index + 1}`}
              className={styles.Image}
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.contentBx} ${
              index + 1 === activeContent ? styles.active : ""
            }`}
            id={`content${index + 1}`}
          >
            <div className={styles.card}>
              <div className={styles.imgBX}>
                <Image
                  src={member.imageUrl}
                  alt={`recoded${index + 1}`}
                  className={styles.Image}
                />
              </div>
              <div className={styles.textBx}>
                <h2>{member.name}</h2>
                <ul className={styles.sci}>
                  <li>
                    <Link href={member.github}>
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link href={member.linkedin}>
                      <AiFillLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberCard;
