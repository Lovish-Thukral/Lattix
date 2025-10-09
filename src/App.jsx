// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./Routes/HomePage";
import About from "./Routes/about";
import Services from "./Routes/ServicesPage";

// Layout that wraps pages and keeps Nav inside router context
function Layout() {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen bg-[rgb(30,32,36)] scrollbar-custom overflow-x-hidden bg-repeat bg-cover">
      <Nav />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // root layout
      children: [
        { index: true, element: <HomePage /> }, // path: "/"
        { path: "about", element: <About /> }, // path: "/about"
        { path: "services", element: <Services /> }, // path: "/services"
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
