import { BlogForm } from "@/components/blog/BlogForm";

export function NewBlogPage() {
  return (
    <div className="min-h-screen bg-muted/40 flex justify-center px-6">
      <div className="w-full max-w-2xl py-10">
        {/* header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold leading-tight">Write a new article</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Write your blog here...
          </p>
        </div>

        {/* form to write */}
        <BlogForm />
      </div>
    </div>
  );
}
