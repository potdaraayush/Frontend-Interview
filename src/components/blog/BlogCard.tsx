import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
  onClick?: () => void;
  isActive?: boolean;
}

export function BlogCard({ blog, onClick, isActive = false }: BlogCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`
        cursor-pointer transition-all duration-200
        hover:shadow-md
        ${isActive ? "border-l-4 border-primary" : "border-l-4 border-transparent"}
      `}
    >
      <CardHeader>
        <CardTitle className="text-base md:text-lg leading-snug">
          {blog.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-2">
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {blog.content.slice(0, 20)}...
        </CardDescription>
      </CardContent>
    </Card>
  );
}
