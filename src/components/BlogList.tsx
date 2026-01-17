import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./blog/BlogCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BlogList() {
  const { data: blogs, isLoading } = useBlogs();
  const navigate = useNavigate();

  if (isLoading) return <div className="p-4">Loading blogs...</div>;
  if (!blogs || blogs.length === 0)
    return <div className="p-4">No blogs found</div>;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-xl font-semibold">Latest Articles</h2>

        <Button
          size="sm"
          onClick={() => navigate("/blogs/new")}
        >
          Write
        </Button>
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => navigate(`/blogs/${blog.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
