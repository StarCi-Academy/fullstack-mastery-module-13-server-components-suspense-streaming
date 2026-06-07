// EN: In Vite you wire routing YOURSELF — Vite ships no router.
// EN: All of this runs in the BROWSER after the JS bundle loads.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroUIProvider } from "./components/providers";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// EN: You manually map each path to a component.
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
]);

/**
 * App root — HeroUI shell + client-side router for the Vite SPA lesson.
 */
export default function App() {
  return (
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  );
}
