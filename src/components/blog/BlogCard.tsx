import type { Blog } from "@/types/blog";
import { formatRelativeTime } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
  onClick?: () => void;
  isActive?: boolean;
}

export function BlogCard({ blog, onClick, isActive = false }: BlogCardProps) {
  const category = blog.category[0] || "Uncategorized";

  return (
    <div
      onClick={onClick}
      className={`
        p-4 cursor-pointer transition-colors duration-200
        border-l-4
        ${isActive ? "border-l-primary" : "border-l-transparent"}
      `}
    >
      {/* Metadata row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">
          {formatRelativeTime(blog.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold mb-2 leading-snug">
        {blog.title}
      </h3>

      {/* Description - max 2 lines */}
      <p className="text-sm text-muted-foreground line-clamp-2">
        {blog.description}
      </p>
    </div>
  );
}
