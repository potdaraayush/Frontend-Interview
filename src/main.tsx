import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetail } from "./components/BlogDetail";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<App />} />
          {/* blogs layout */}
          <Route path="/blogs" element={<BlogsPage />}>
            {/* nested route for blog detail */}
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
