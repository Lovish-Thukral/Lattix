import Nav from "./components/Nav";
import HomePage from "./Routes/HomePage";
function App() {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen bg-[rgb(30,32,36)] scrollbar-custom overflow-x-hidden bg-repeat bg-cover">
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
