import { FaStar } from "react-icons/fa";
import millify from "millify";

// eslint-disable-next-line react/prop-types
function CryptoCard({ price, iconUrl, name, symbol, change }) {
  return (
    <div className="w-full px-4 py-8 bg-slate-50 shadow-md flex flex-col items-start rounded-xl space-y-2">
      <div className="w-full flex justify-between items-center">
        <img className="w-12 h-12" src={iconUrl} alt={name} />
        <FaStar size="1.4rem" />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-4 items-center">
          <span className="text-gray-400 font-normal text-xs">
            {symbol}/USDB
          </span>
          <span
            className={`text-[.7rem] text-white py-0.5 px-2 rounded-full ${
              String(change).startsWith("-") ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {change}
          </span>
        </div>
        <span className="text-gray-900 font-semibold text-lg">{price}</span>
        <span className="text-gray-600 font-medium text-md">
          {millify(price)}
        </span>
      </div>
    </div>
  );
}

export default CryptoCard;
