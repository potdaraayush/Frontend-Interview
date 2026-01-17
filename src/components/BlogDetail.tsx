import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { useDeleteBlog } from "@/hooks/useDeleteBlog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BlogDetail() {
  // blog id comes from url. useParams always returns string | undefined
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { data: blog, isLoading, error } = useBlog(id ?? "");

  const { mutate: deleteBlog, isPending } = useDeleteBlog();

  if (isLoading) return <div className="p-4">Loading blog...</div>;

  if (error) return <div className="p-4 text-red-600">Error loading blog</div>;

  if (!blog) return <div className="p-4">Blog not found</div>;

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <CardTitle className="text-2xl md:text-3xl leading-tight">
            {blog.title}
          </CardTitle>

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
        </CardHeader>

        <CardContent>
          <CardDescription className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
            {blog.content}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
