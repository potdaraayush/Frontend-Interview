import { BlogList } from "../components/BlogList";
import { Outlet } from "react-router-dom";

export function BlogsPage() {
  return (
    <div className="h-screen flex">
      {/* Left panel: blog list */}
      <div className="w-1/3 border-r overflow-y-auto">
        <BlogList />
      </div>

      {/* Right panel: blog details via nested route */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
        {/* Optional placeholder when no blog is selected */}
        <div className="p-4 text-gray-500">
          Select a blog to view details
        </div>
      </div>
    </div>
  );
}
