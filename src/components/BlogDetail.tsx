import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { useDeleteBlog } from "@/hooks/useDeleteBlog";
import { Button } from "@/components/ui/button";
import { formatRelativeTime } from "@/lib/utils";

export function BlogDetail() {
  // blog id comes from url. useParams always returns string | undefined
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { data: blog, isLoading, error } = useBlog(id ?? "");

  const { mutate: deleteBlog, isPending } = useDeleteBlog();

  if (isLoading) return <div className="p-4">Loading blog...</div>;

  if (error) return <div className="p-4 text-red-600">Error loading blog</div>;

  if (!blog) return <div className="p-4">Blog not found</div>;

  const category = blog.category[0] || "Uncategorized";

  return (
    <div className="max-w-2xl">
      {/* Cover image placeholder */}
      <div className="w-full bg-muted aspect-video rounded mb-8 flex items-center justify-center">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt="Cover"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <span className="text-muted-foreground">Cover Image</span>
        )}
      </div>

      {/* Delete button */}
      <div className="flex justify-end mb-6">
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive"
          disabled={isPending}
          onClick={() => {
            const confirmed = window.confirm("Delete this blog?");
            if (!confirmed) return;

            deleteBlog(blog.id, {
              // redirect to blog list after delete
              onSuccess: () => {
                navigate("/blogs");
              },
            });
          }}
        >
          Delete
        </Button>
      </div>

      {/* Blog title - main heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      {/* Metadata row - Category | Date */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
        <span>{category}</span>
        <span className="text-muted-foreground/50">|</span>
        <span>{formatRelativeTime(blog.date)}</span>
      </div>

      {/* Blog description */}
      <p className="text-base text-muted-foreground mb-8 leading-relaxed">
        {blog.description}
      </p>

      {/* Blog content */}
      <div className="text-base leading-relaxed whitespace-pre-line mb-8">
        {blog.content}
      </div>

      {/* Tags - category chips */}
      {blog.category.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {blog.category.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-xs font-medium border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
