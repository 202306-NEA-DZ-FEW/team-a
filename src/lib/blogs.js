import { serverTimestamp } from "firebase/firestore";
export const blogs = [
  {
    id: 1,
    title: "The Spirit of Giving: Eid al-Fitr Donations",
    description:
      "Eid al-Fitr, also known as the 'Festival of Breaking the Fast,' is a significant holiday celebrated by Muslims worldwide. It marks the end of Ramadan, a month of fasting, prayer, and self-reflection. Beyond the festive feasts and joyous gatherings, Eid al-Fitr holds a deep spiritual significance, particularly when it comes to the act of giving and charity.",
    date: serverTimestamp(),
    imageUrl:
      "https://images.unsplash.com/photo-1656635098050-cd59fc6a2a52?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        id: 1,
        subTitle: "The Joy of Eid al-Fitr",
        description:
          "Eid al-Fitr is a time of celebration and gratitude, a moment for Muslims to come together with friends and family to break their fast and express their appreciation for the blessings they have received. However, it's also a time when the act of giving plays a pivotal role. Muslims are encouraged to be charitable, particularly towards those in need.",
      },
      {
        id: 2,
        subTitle: "Zakat al-Fitr: A Special Form of Charity",
        description:
          "One of the essential aspects of giving during Eid al-Fitr is the 'Zakat al-Fitr.' This is a mandatory form of charity, given by those who can afford it to help those less fortunate to enjoy the celebration. Zakat al-Fitr is typically given in the form of food, allowing the needy to join in the festivities.",
      },
      {
        id: 3,
        subTitle: "Acts of Kindness and Generosity",
        description:
          "Beyond Zakat al-Fitr, many Muslims also engage in various acts of kindness and generosity during Eid al-Fitr. They donate to charities, support local initiatives, and extend a helping hand to those facing difficulties. This charitable spirit strengthens the sense of community and solidarity among Muslims.",
      },
      {
        id: 4,
        subTitle: "The Blessings of Giving",
        description:
          "The act of giving during Eid al-Fitr isn't just about fulfilling a religious obligation; it's about embodying the core values of compassion, empathy, and community solidarity. It fosters a sense of unity, reminding us that we are all responsible for one another's well-being.",
      },
    ],
  },

  {
    id: 2,
    title: "Donations in Ramadan: A Time for Giving and Compassion",
    description:
      "Ramadan is a month of fasting, prayer, and reflection for Muslims around the world. It's also a time of heightened generosity and giving back to the community.",
    date: serverTimestamp(),
    imageUrl:
      "https://images.unsplash.com/photo-1577452159342-6b18c30fee37?auto=format&fit=crop&q=80&w=1444&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        id: 1,
        subTitle: "The Importance of Giving in Ramadan",
        description:
          "Ramadan is not only about fasting and spiritual reflection; it's also a time when Muslims are encouraged to be charitable and help those in need. Donations in this sacred month are a means of purifying one's wealth and strengthening the bonds of compassion and empathy.",
      },
      {
        id: 2,
        subTitle: "Acts of Charity and Empathy",
        description:
          "Fasting during Ramadan fosters empathy for those who are less fortunate. It provides a firsthand experience of hunger and thirst, instilling a deep sense of compassion. Donations become a way to alleviate the suffering of those in need, demonstrating solidarity with the global community.",
      },
      {
        id: 3,
        subTitle: "Multiplying Rewards Through Giving",
        description:
          "Ramadan is believed to be a month of multiplied blessings and rewards. It's a time when the rewards for good deeds, including donations, are said to be increased manifold. This belief serves as a powerful motivator for individuals to be more generous and charitable, knowing that their contributions will yield greater spiritual benefits.",
      },
      {
        id: 4,
        subTitle: "Strengthening Community Bonds",
        description:
          "Donations in Ramadan create a sense of unity and togetherness within the Muslim community. It encourages individuals to look beyond their own needs and extend a helping hand to those who may be struggling. This communal spirit strengthens the bonds of brotherhood and sisterhood.",
      },
      {
        id: 5,
        subTitle: "Sustaining Essential Services",
        description:
          "Donations in Ramadan play a crucial role in sustaining vital services for the less privileged. From providing meals for the hungry to supporting educational initiatives, healthcare services, and humanitarian aid, these contributions have a tangible and positive impact on communities in need. They serve as a lifeline for countless individuals and families.",
      },
    ],
  },
  {
    id: 3,
    title: "Donations in Gaza: Supporting Those in Need",
    description:
      "The people of Gaza have faced numerous challenges, and your support can make a significant difference in their lives. Donations to Gaza help provide essential aid, relief, and hope to those who are in need.",
    date: serverTimestamp(),
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        id: 1,
        subTitle: "The Humanitarian Crisis in Gaza",
        description:
          "Gaza has experienced ongoing challenges, including political conflict and economic hardship. The people of Gaza often face shortages of basic necessities, and donations play a vital role in addressing their immediate and long-term needs.",
      },
      {
        id: 2,
        subTitle: "Types of Donations Needed",
        description:
          "Donations to Gaza can take various forms, including financial contributions, medical supplies, food aid, and educational resources. Your support can provide relief to families, support healthcare facilities, and offer opportunities for education and empowerment.",
      },
      {
        id: 3,
        subTitle: "Acts of Solidarity and Compassion",
        description:
          "Donations to Gaza are not only about providing material assistance; they also represent acts of solidarity and compassion. Your contribution can make a significant difference in the lives of individuals and families who are striving to overcome adversity.",
      },
      {
        id: 4,
        subTitle: "Building a Better Future",
        description:
          "By offering your support and donations to Gaza, you contribute to building a better future for the people of this region. Your generosity can help create positive change, restore hope, and improve the quality of life for those in need.",
      },
    ],
  },
  {
    id: 4,
    title: "Donations in Isolated Areas: Bringing Hope to the Underserved",
    description:
      "Isolated and remote areas often face unique challenges, from limited access to essential services to economic hardships. Donations to isolated areas can make a significant difference in the lives of those who are underserved and in need of support.",
    date: serverTimestamp(),
    imageUrl:
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        id: 1,
        subTitle: "Challenges of Isolated Areas",
        description:
          "Isolated areas may lack access to healthcare, education, clean water, and economic opportunities. The people living in such areas often face difficulties in meeting their basic needs, and donations are a lifeline of support.",
      },
      {
        id: 2,
        subTitle: "Types of Donations Needed",
        description:
          "Donations to isolated areas can take various forms, including financial contributions, medical supplies, food aid, and infrastructure development. Your support can help bridge the gap and improve the quality of life for those in underserved regions.",
      },
      {
        id: 3,
        subTitle: "Acts of Compassion and Outreach",
        description:
          "Donations to isolated areas go beyond providing material assistance; they symbolize acts of compassion and outreach. Your generosity can bring hope to communities, create a sense of solidarity, and inspire positive change.",
      },
      {
        id: 4,
        subTitle: "Empowering Underserved Communities",
        description:
          "By offering your support and donations to isolated areas, you empower underserved communities to build a better future. Your contributions can help break the cycle of poverty, improve access to education and healthcare, and promote self-sufficiency.",
      },
    ],
  },
  {
    id: 5,
    title: "Donations in Eid al-Adha: The Festival of Sacrifice and Charity",
    description:
      "Eid al-Adha, also known as the 'Festival of Sacrifice,' is one of the most significant Islamic holidays celebrated by Muslims around the world. It commemorates the willingness of Prophet Ibrahim (Abraham) to sacrifice his son as an act of obedience to God. Beyond the symbolic rituals and feasting, Eid al-Adha emphasizes the values of sacrifice and charity.",
    date: serverTimestamp(),
    imageUrl:
      "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        id: 1,
        subTitle: "The Significance of Eid al-Adha",
        description:
          "Eid al-Adha is a time for reflection, devotion, and selflessness. Muslims gather to pray, share meals, and spend time with their loved ones. However, the central theme of this holiday is the act of sacrifice, which symbolizes obedience and submission to God.",
      },
      {
        id: 2,
        subTitle: " The Act of Sacrifice",
        description:
          "One of the most prominent customs during Eid al-Adha is the sacrifice of an animal like a sheep, goat, cow, or camel. This act of sacrifice is carried out to follow the example of Prophet Ibrahim and to share the meat with those in need. It's a gesture of selflessness and a reminder of the importance of giving back to the community.",
      },
      {
        id: 3,
        subTitle: "Distributing to the Needy",
        description:
          "The meat from the Qurbani is traditionally divided into three parts: one-third is given to the needy, one-third to relatives and friends, and one-third is retained for one's family. This practice ensures that those less fortunate can also partake in the celebration and enjoy a nourishing meal.",
      },
      {
        id: 4,
        subTitle: "The Spirit of Charity",
        description:
          "Eid al-Adha goes beyond just the Qurbani; it promotes the spirit of charity and generosity. Muslims are encouraged to make donations, help the less fortunate, and support various humanitarian causes. It's a time to extend a helping hand to those who are struggling and in need.",
      },
      {
        id: 5,
        subTitle: "Strengthening Community Bonds",
        description:
          "Eid al-Adha fosters a sense of community and solidarity. The act of giving and sharing during this holiday strengthens the bonds of brotherhood and sisterhood within the Muslim community. It reminds us that we are all responsible for one another's well-being, and through acts of charity, we can make a positive impact on society.",
      },
    ],
  },
];
