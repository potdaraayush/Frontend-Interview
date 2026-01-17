import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import type { Blog } from "../types/blog";

export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: Omit<Blog, "id">) => createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
