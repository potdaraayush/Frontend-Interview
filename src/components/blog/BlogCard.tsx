import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Blog } from "@/types/blog";

//defines the props for BlogCard component
interface BlogCardProps {
    blog: Blog;
    onClick?: () => void;
}

export function BlogCard({ blog, onClick }: BlogCardProps) {
    return (
    <Card
      className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700">
          {blog.content.slice(0, 20)}...
        </CardDescription>
      </CardContent>
    </Card>
  );
}

