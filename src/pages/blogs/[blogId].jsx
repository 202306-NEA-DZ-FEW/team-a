function BlogDetails({ blogId }) {
  return <div>BlogDetails | {blogId}</div>;
}

export default BlogDetails;

export async function getServerSideProps(context) {
  const { blogId } = context.query;

  return {
    props: {
      blogId,
    },
  };
}
