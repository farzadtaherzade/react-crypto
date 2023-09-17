import { NavLink } from "react-router-dom";

function Siderbar() {
  return (
    <div className="h-full bg-lime-800 text-white flex flex-col relative px-10">
      <div className="sticky left-0 top-0  h-screen flex flex-col">
        <h1 className="py-5 w-full text-2xl font-bold">React Crypto</h1>
        <hr className="w-full my-2 border-slate-50 border-opacity-40" />
        <div className="w-full flex-auto flex flex-col space-y-5 mt-10">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "w-full px-6 py-2.5 text-white cursor-pointer hover:text-lime-400"
                : isActive
                ? "w-full bg-slate-100 px-6 py-2.5 rounded-lg bg-opacity-30 cursor-pointer text-white"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/coins"}
            className={({ isActive, isPending }) =>
              isPending
                ? "w-full px-6 py-2.5 text-white cursor-pointer hover:text-lime-400"
                : isActive
                ? "w-full bg-slate-100 px-6 py-2.5 rounded-lg bg-opacity-30 cursor-pointer text-white"
                : ""
            }
          >
            Coins
          </NavLink>
          <NavLink
            to={"/news"}
            className={({ isActive, isPending }) =>
              isPending
                ? "w-full px-6 py-2.5 text-white cursor-pointer hover:text-lime-400"
                : isActive
                ? "w-full bg-slate-100 px-6 py-2.5 rounded-lg bg-opacity-30 cursor-pointer text-white"
                : ""
            }
          >
            News
          </NavLink>
        </div>
        {/* <span className="">das</span> */}
      </div>
    </div>
  );
}

export default Siderbar;
