import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import recoded from "public/images/recoded3.png";
import Container from "@/components/container";

function BlogDetails({ blogId }) {
  return (
    <Container>
      <div className='flex flex-col justify-center items-center gap-8 px-10 p-10'>
        <div className='bg-red-200'>
          <Image
            src={recoded}
            alt='recoded'
            height={400}
            width={400}
            className='object-cover rounded-xl'
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-3xl font-bold'>titel</h1>
          <p>
            There are many different types of dresses, each with its own unique
            style and design. Some dresses are long and flowing, while others
            are short and fitted. Some dresses are designed for formal
            occasions, while others are more casual and comfortable.If you are
            looking for something more casual, you might want to consider a
            shift dress. Shift dresses are simple and elegant, with a
            loose-fitting design that’s perfect for everyday wear. They come in
            a variety of colors and patterns, so you can find one that suits
            your styl There are many different types of dresses, each with its
            own unique style and design. Some dresses are long and flowing,
            while others are short and fitted. Some dresses are designed for
            formal occasions, while others are more casual and comfortable.If
            you are looking for something more casual, you might want to
            consider a shift dress. Shift dresses are simple and elegant, with a
            loose-fitting design that’s perfect for everyday wear. They come in
            a variety of colors and patterns, so you can find one that suits
            your styl There are many different types of dresses, each with its
            own unique style and design. Some dresses are long and flowing,
            while others are short and fitted. Some dresses are designed for
            formal occasions, while others are more casual and comfortable.If
            you are looking for something more casual, you might want to
            consider a shift dress. Shift dresses are simple and elegant, with a
            loose-fitting design that’s perfect for everyday wear. They come in
            a variety of colors and patterns, so you can find one that suits
            your styl
          </p>
        </div>
      </div>
    </Container>
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
