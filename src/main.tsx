import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetail } from "./components/BlogDetail";
import { NewBlogPage } from "./pages/NewBlogPage";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* app shell */}
          <Route path="/" element={<App />} />

          {/* blogs layout */}
          <Route path="/blogs" element={<BlogsPage />}>
            <Route index element={<div className="p-4 text-muted-foreground">Select a blog</div>} />
            <Route path="new" element={<NewBlogPage />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
