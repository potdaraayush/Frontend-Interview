import { Outlet } from "react-router-dom";
import { BlogList } from "../components/BlogList";

export function BlogsPage() {
  return (
    <div className="h-screen flex">
      {/* left panel */}
      <div className="w-1/3 border-r overflow-y-auto px-4 py-6">
        <BlogList />
      </div>

      {/* right panel */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <Outlet />
      </div>
    </div>
  );
}
