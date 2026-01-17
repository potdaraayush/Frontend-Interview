import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function BlogDetail() {
  // useParams always returns string | undefined
  const { id } = useParams<{ id?: string }>();

  // if id is undefined, query won't run because we have enabled: !!id
  const { data: blog, isLoading, error } = useBlog(id ?? "");

  if (isLoading) return <div className="p-4">Loading blog...</div>;
  if (error) return <div className="p-4 text-red-600">Error loading blog</div>;
  if (!blog) return <div className="p-4">Blog not found</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-700 whitespace-pre-line">
            {blog.content}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
