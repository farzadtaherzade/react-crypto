import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Siderbar from "./components/Siderbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Coins from "./pages/Coins";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className="w-full bg-slate-200 ">
      <div className="grid grid-cols-12 md:grid-cols-10 w-full min-h-screen">
        <div className="col-span-0 max-md:hidden sm:col-span-3 lg:col-span-2 h-full">
          <Siderbar />
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 z-[100] w-80 visible md:hidden">
            <Siderbar />
          </div>
        )}
        <main className="col-span-12 md:col-span-7 lg:col-span-8 z-50">
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />

          <div className="container mx-auto xl:max-w-screen-xl py-7 px-2 sm:px-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coins" element={<Coins />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
