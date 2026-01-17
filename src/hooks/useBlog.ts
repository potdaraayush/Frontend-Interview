//fetches single blog by id (used in BlogDetail component)
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";
import type { Blog } from "../types/blog";

export function useBlog(id: string) {
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
}