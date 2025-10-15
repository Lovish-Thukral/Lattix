// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from './Routes/HomePage'
import About from "./Routes/About";
import ServicesPage from "./Routes/ServicesPage"

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
        { index: true, element: <Homepage /> }, // path: "/"
        { path: "about", element: <About /> }, // path: "/about"
        { path: "services", element: <ServicesPage /> }, // path: "/services"
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
