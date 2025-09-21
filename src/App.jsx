import { Button } from "./components/ui/button";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import bg from './assets/mainBg.png'

function App() {
  return (
    <div
      className="flex justify-center items-center flex-col w-full min-h-screen bg-[#1e2124] scrollbar-custom overflow-x-hidden bg-repeat bg-contain"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Nav />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      
      
    </div>
  );
}

export default App;
