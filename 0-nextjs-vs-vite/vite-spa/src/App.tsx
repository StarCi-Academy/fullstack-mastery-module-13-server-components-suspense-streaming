// EN: In Vite you wire routing YOURSELF — Vite ships no router.
// EN: All of this runs in the BROWSER after the JS bundle loads.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// EN: You manually map each path to a component.
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
]);

export default function App() {
  // EN: The whole router runs in the browser after the JS bundle loads.
  return <RouterProvider router={router} />;
}
