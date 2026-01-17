import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./blog/BlogCard";
import { useNavigate } from "react-router-dom";

export function BlogList() {
  const { data: blogs, isLoading } = useBlogs();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading blogs...</div>;
  if (!blogs || blogs.length === 0) return <div>No blogs found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => navigate(`/blogs/${blog.id}`)}
        />
      ))}
    </div>
  );
}
