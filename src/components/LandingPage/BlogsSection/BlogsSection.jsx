import BlogCard from "@/components/BlogCard";
import Container from "@/components/container";

function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "ramadan",
      description:
        "Short description of the blog inorder to test things out better than lorem.",
      imageUrl:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2 July",
    },
    {
      id: 2,
      title: "eid",
      description:
        "Short description of the blog inorder to test things out better than lorem.",
      imageUrl:
        "https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "20 Aug",
    },
    {
      id: 3,
      title: "school",
      description:
        "Short description of the blog inorder to test things out better than lorem.",
      imageUrl:
        "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      date: "15 Sep",
    },
    {
      id: 4,
      title: "mawlid",
      description:
        "Short description of the blog inorder to test things out better than lorem.",
      imageUrl:
        "https://images.unsplash.com/photo-1477738224882-4eba549a81ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "16 Oct",
    },
  ];
  return (
    <Container className='min-h-screen flex flex-col justify-center'>
      <h1 className='text-3xl font-poppins font-bold text-center mb-8'>
        Blogs
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-8'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </Container>
  );
}

export default BlogsSection;
