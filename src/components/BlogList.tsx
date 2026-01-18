import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./blog/BlogCard";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BlogList() {
  const { data: blogs, isLoading } = useBlogs();
  const navigate = useNavigate();
  const { id: activeId } = useParams<{ id?: string }>();

  if (isLoading) return <div className="p-4">Loading blogs...</div>;
  if (!blogs || blogs.length === 0)
    return <div className="p-4">No blogs found</div>;

  return (
    <div>
      {/* header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-semibold">Latest Articles</h1>

        <Button size="sm" onClick={() => navigate("/blogs/new")}>
          Write
        </Button>
      </div>

      {/* blog list */}
      <div className="flex flex-col gap-0 px-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-b border-border last:border-b-0">
            <BlogCard
              blog={blog}
              isActive={blog.id === activeId}
              onClick={() => navigate(`/blogs/${blog.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
