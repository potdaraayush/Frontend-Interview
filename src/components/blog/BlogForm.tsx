import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateBlog } from "@/hooks/useCreateBlog";

export function BlogForm() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useCreateBlog();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutate(
      {
        title,
        content,
        category: [],
        description: content.slice(0, 120),
        date: new Date().toISOString(),
        coverImage: "",
      },
      {
        onSuccess: (createdBlog) => {
          navigate(`/blogs/${createdBlog.id}`);
        },
      }
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Write article</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-full min-h-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Start writing..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          {error && (
            <p className="text-sm text-red-600">
              Failed to create blog. Please try again.
            </p>
          )}

          <Button type="submit" variant="default" className="w-full" disabled={isPending}>
            {isPending ? "Publishing..." : "Publish"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
