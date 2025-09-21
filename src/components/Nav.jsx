import logo from "../assets/logo.svg";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";

const navItems = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Services", href: "#" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-[100vw] bg-[rgb(25,26,26)] text-white px-10 py-2 pt-4 shadow-md justify-center animate-caret-blink repeat-1">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <motion.img
            src={logo}
            alt="Lattix.com"
            className="h-10 mr-3"
            whileHover={{ rotateY: 360, rotateZ: 270 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <strong className="bebas-neue-regular text-3xl tracking-widest pt-2">
            LATTIX
          </strong>
        </div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-10">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-lg text-white font-serif px-4  py-2 transition-all duration-700"
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <button className="group bg-white text-black font-bold py-3 px-6 rounded-4xl flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-500">
          <span>Let's Talk</span>

          <svg
            className="w-6 h-6 text-white transition-all duration-500 group-hover:rotate-180 group-hover:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
