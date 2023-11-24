import bouchra from "public/images/bouchra.jpg";
import farouk from "public/images/farouk.png";
import hadia from "public/images/h.jpg";
import riadh from "public/images/riadh-mouamnia.jpg";
import sorour from "public/images/sorour.jpg";

export default function teamMembers(t) {
  const team = [
    {
      name: t("about:sorour"),
      github: "https://github.com/rahemSorour",
      linkedin: "https://www.linkedin.com/in/sorour-rahem-93483a202/",
      imageUrl: sorour,
    },
    {
      name: t("about:riadh"),
      github: "https://github.com/riadhmouamnia",
      linkedin: "https://www.linkedin.com/in/riadh-mouamnia/",
      imageUrl: riadh,
    },
    {
      name: t("about:bouchra"),
      github: "https://github.com/Bushra369",
      linkedin: "https://www.linkedin.com/in/bushra-djalti-0b1b52287/",
      imageUrl: bouchra,
    },
    {
      name: t("about:farouk"),
      github: "https://github.com/farouk26",
      linkedin: "https://www.linkedin.com/in/faroukisme/",
      imageUrl: farouk,
    },

    {
      name: t("about:hadia"),
      github: "github.com/liliumorion",
      linkedin: "https://www.linkedin.com/in/hadia-djadallah/",
      imageUrl: hadia,
    },
  ];
  return team;
}
