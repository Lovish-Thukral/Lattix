import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import monkeycall from "../assets/monkeycall.webp";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Instagram, PanelBottom, Home, User, Workflow } from "lucide-react";

const navItems = [
  { title: "Home", href: "/", icon: <Home size={24} /> },
  { title: "About", href: "/about", icon: <User size={24} /> },
  { title: "Services", href: "/services", icon: <Workflow size={24} /> },
];


export default function Nav() {
  const [showMonkey, setShowMonkey] = useState(false);
  const [mobMenu, ShowmobMenu] = useState(false)
  const timeoutRef = useRef(null);

  // Form state (so submit doesn't reload)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMonkey(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMonkey(false);
    }, 400);
  };

  const handleClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMonkey((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents reload
    // open whatsapp with prefilled message (you can change the number)
    const message = encodeURIComponent(
      `Hello! I want a consultation.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`
    );
    window.open(`https://wa.me/916239347200?text=${message}`, "_blank");
    // optional: close popup after submit
    setShowMonkey(false);
    // optionally clear form:
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[rgba(25,26,26,0.67)] text-white sm:px-10 px-2 sm:py-3 py-1"
    onClick={(e) => {
      if (!mobMenu) return
      const clickY = e.clientY;
      const threshold = window.innerHeight * 0.72; // 28vh from bottom
      if (clickY < threshold) {
        e.stopPropagation();
        ShowmobMenu(false);
      }
    }}>
      {mobMenu  && (
        <motion.div
        className="fixed bottom-0 flex w-[95%] h-22 justify-between text-white font-serif px-10 bg-[rgba(25,26,26,0.93)] mx-auto "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.href}
            className="flex text-lg text-white justify-center flex-col font-medium px-3 py-5 hover:text-gray-300 transition"
          >
            <div className="mx-auto m-1">{item.icon}</div>
            <p>{item.title}</p>
          </NavLink>
        ))}
      </motion.div>
      )}

      {/* Monkey Call Popup (responsive widths + proper top spacing) */}
      {showMonkey && (
        <motion.div
          className="bg-[rgba(44,47,47,0.95)] absolute sm:top-16 right-0 z-20 h-max w-[90vw] sm:w-[30vw] rounded-2xl p-5 shadow-lg not-sm:scale-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
            Still Confused?
          </h1>

          <img
            src={monkeycall}
            alt="A Monkey making Phone Call"
            className="sm:h-48 h-32 w-full rounded-xl mx-auto object-cover mb-4 shadow-inner"
          />

          <p className="text-xl text-white font-semibold mb-3">
            Book Your Consultation
          </p>

          {/* Form (prevent default) */}
          <form
            className="mt-4 space-y-3 px-2"
            onSubmit={handleSubmit}
            onFocus={handleMouseEnter}
          >
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              aria-label="Your name"
              className="w-full rounded-xl text-white bg-transparent px-4 py-2 focus:outline-1 focus:ring-2 focus:ring-white"
              required
              autoComplete="off"
            />
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone number"
              className="w-full rounded-xl text-white bg-transparent px-4 py-2 focus:outline-1 focus:ring-2 focus:ring-white"
              required
              autoComplete="off"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              aria-label="Email address"
              className="w-full rounded-xl text-white bg-transparent px-4 py-2 focus:outline-1 focus:ring-2 focus:ring-white"
              required
              autoComplete="off"
            />

            <button
              type="submit"
              className="w-full mt-2 bg-white text-black font-semibold py-2 rounded-xl hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </form>

          <p className="mt-6 mb-3">Contact us via:</p>
          <div className="flex gap-5 ml-3">
            <a
              href="https://www.instagram.com/lattixinnovation/"
              target="_blank"
              rel="noreferrer"
              aria-label="Lattix Instagram"
            >
              <Instagram className="text-white hover:text-gray-400 w-8 h-8" />
            </a>

            <a
              href="https://wa.me/+916239347200"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-8 w-8"
            >
              {/* Cleaned-up SVG: use className only once (React) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}

      {/* Navbar */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Use Link instead of plain <a> to avoid full page reload */}
        <Link className="flex items-center" to="/">
          <motion.img
            src={logo}
            alt="Lattix.com"
            className="sm:h-10 h-7 mr-3"
            whileTap={{ rotateY: 180 }}
            whileHover={{
              rotateY: 360,
              rotateZ: 270,
              transition: { duration: 2, ease: "easeInOut" },
            }}
          />
          <strong className="bebas-neue-regular text-3xl tracking-widest pt-2">
            LATTIX
          </strong>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-10">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-serif px-4 py-2 transition-all duration-700"
                >
                  <NavLink to={item.href}>{item.title}</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4 flex-row-reverse">
          <button className="md:hidden bg-[#22282d] text-white font-bold py-4 px-4 rounded-4xl"
          onClick={() => (ShowmobMenu(p => !p))}>
            <PanelBottom size={20} />
          </button>
          <button
            className="group bg-[#22282d] text-white font-bold sm:py-3 py-2 sm:px-6 px-3 rounded-4xl flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <span className="sm:block hidden">Let's Talk</span>

            <svg
              className="w-6 h-6 transition-all duration-500 group-hover:rotate-180 group-hover:text-black"
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
      </div>
    </header>
  );
}
