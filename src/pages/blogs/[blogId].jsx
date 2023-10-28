import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import recoded from "public/images/recoded3.png";

import Container from "@/components/container";
import PageCover from "@/components/PageCover";

function BlogDetails({ blogId }) {
  return (
    <>
      <PageCover
        title='The Significance of Donations in Ramadan'
        description='an overview of true union'
        imageURL='https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Container>
        <div className='flex flex-col justify-center items-center gap-8 p-20'>
          {/* <div className='bg-red-200'>
          <Image
            src={recoded}
            alt='recoded'
            height={400}
            width={400}
            className='object-cover rounded-xl'
          />
        </div> */}

          <p className='mb-6'>
            <b className='bg-primary text-gray-200'>Introduction:</b>
            <br />
            As the holy month of Ramadan graces us with its presence, Muslims
            around the world embark on a spiritual journey marked by fasting,
            prayer, and reflection.
            <br />
            <br />
            Among the many pillars of this blessed month, one that holds immense
            significance is the act of giving, especially through donations.
            This selfless act transcends mere charity; it embodies the core
            values of compassion, empathy, and community solidarity.
            <br />
            <br />
            <b className='bg-primary text-gray-200'>
              1. Fulfilling a Religious Obligation:
            </b>
            <br />
            Ramadan is a time of heightened spiritual awareness, where Muslims
            seek to strengthen their connection with Allah and cultivate a sense
            of righteousness. Donations during this month are not only
            encouraged but also considered an obligatory form of worship. It is
            a means of purifying one&apos;s wealth and drawing nearer to the
            Divine.
            <br />
            <br />
            <b className='bg-primary text-gray-200'>
              2. Empathy and Compassion:
            </b>
            <br />
            Fasting in Ramadan fosters empathy for those who are less fortunate.
            It provides a firsthand experience of hunger and thirst, instilling
            a deep sense of compassion. Donations become a way to alleviate the
            suffering of those in need, demonstrating solidarity with the global
            community and fostering a spirit of empathy that transcends borders.
            <br />
            <br />
            <b className='bg-primary text-gray-200'>3. Multiplying Rewards:</b>
            <br />
            Ramadan is believed to be a month of multiplied blessings and
            rewards. It is said that the rewards for good deeds, including
            donations, are increased manifold during this sacred time. This
            belief serves as a powerful motivator for individuals to be more
            generous and charitable, knowing that their contributions will yield
            greater spiritual benefits.
            <br />
            <br />
            <b className='bg-primary text-gray-200'>
              4. Strengthening Community Bonds:
            </b>
            <br />
            The act of giving creates a sense of unity and togetherness within
            the Muslim community. It encourages individuals to look beyond their
            own needs and extend a helping hand to those who may be struggling.
            This communal spirit strengthens the bonds of brotherhood and
            sisterhood, reinforcing the idea that we are all responsible for one
            another&apos;s well-being.
            <br />
            <br />
            <b className='bg-primary text-gray-200'>
              5. Sustaining Essential Services:
            </b>
            <br />
            Donations in Ramadan play a crucial role in sustaining vital
            services for the less privileged. From providing meals for the
            hungry to supporting educational initiatives, healthcare services,
            and humanitarian aid, these contributions have a tangible and
            positive impact on communities in need. They serve as a lifeline for
            countless individuals and families.
            <br />
            <br />
            <b className='bg-secondary'>Conclusion:</b>
            <br />
            In the spirit of Ramadan, the act of giving takes on profound
            significance. It is a manifestation of faith, empathy, and communal
            responsibility. By donating during this blessed month, individuals
            not only fulfill a religious obligation but also contribute to a
            global legacy of compassion and solidarity. Let us embrace the
            sacred act of giving and strive to make a positive difference in the
            lives of those less fortunate, embodying the true essence of
            Ramadan.
          </p>
        </div>
      </Container>
    </>
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        blogId: "1",
      },
    },
    {
      params: {
        blogId: "2",
      },
    },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
  const { blogId } = params;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blogId,
    },
  };
}
