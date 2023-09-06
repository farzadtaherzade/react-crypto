import { LiaCoinsSolid } from "react-icons/lia";

function HelperMessage() {
  return (
    <div className="w-full bg-slate-100 rounded-md py-7 px-10 shadow-sm flex items-center justify-between flex-col md:flex-row md:space-y-0 space-y-5">
      <div className="flex flex-row space-x-5 items-center">
        <LiaCoinsSolid size={"3rem"} color="#942f" />
        <div className="flex flex-col space-y-1">
          <span className="font-bold text-lg">
            Follow your favorite cryptos
          </span>
          <span className="text-xs font-semibold">
            tap the star to add to your watchlist
          </span>
        </div>
      </div>
      <button className="px-5 py-2.5 bg-lime-300 rounded-lg hover:bg-lime-400 duration-200 hover:text-black text-lime-900">
        Vew The Marlet
      </button>
    </div>
  );
}

export default HelperMessage;
