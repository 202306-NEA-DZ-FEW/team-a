import img1 from "public/images/img1.svg";
import img2 from "public/images/img2.svg";

export default function teamMembers(t) {
  const team = [
    {
      name: t("about:sorour"),
      github: "https://github.com/rahemSorour",
      linkedin: "https://www.linkedin.com/in/sorour-rahem-93483a202/",
      imageUrl: img2,
    },
    {
      name: t("about:riadh"),
      github: "https://github.com/riadhmouamnia",
      linkedin: "https://www.linkedin.com/in/riadh-mouamnia/",
      imageUrl: img1,
    },
    {
      name: t("about:bouchra"),
      github: "https://github.com/Bushra369",
      linkedin: "https://www.linkedin.com/in/bushra-djalti-0b1b52287/",
      imageUrl: img2,
    },
    {
      name: t("about:farouk"),
      github: "https://github.com/farouk26",
      linkedin: "https://www.linkedin.com/in/faroukisme/",
      imageUrl: img1,
    },

    {
      name: t("about:hadia"),
      github: "github.com/liliumorion",
      linkedin: "https://www.linkedin.com/in/hadia-djadallah/",
      imageUrl: img2,
    },
  ];
  return team;
}
