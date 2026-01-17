import { Outlet } from "react-router-dom";
import { BlogList } from "../components/BlogList";

export function BlogsPage() {
  return (
    <div className="h-screen flex">
      {/* left panel */}
      <div className="w-1/3 border-r overflow-y-auto">
        <BlogList />
      </div>

      {/* right panel */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
