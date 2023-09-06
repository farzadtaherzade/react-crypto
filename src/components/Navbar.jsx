import { AiOutlineStar } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

function Navbar({ setIsOpen, isOpen }) {
  const sidebarHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full bg-slate-100 drop-shadow-sm py-4">
      <div className="flex justify-between items-center container mx-auto xl:max-w-screen-xl p-2 px-7">
        <div>
          <AiOutlineStar />
        </div>
        <span
          className="text-xl font-bold w-10 flex md:hidden h-10 border border-gray-200  items-center justify-center rounded-full hover:bg-slate-200 duration-200 cursor-pointer"
          onClick={sidebarHandler}
        >
          <FiMenu />
        </span>
      </div>
    </header>
  );
}

export default Navbar;
