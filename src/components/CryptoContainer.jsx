import { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../services/cryptoApi";
import CryptoCard from "./CryptoCard";

function CryptoContainer({ limit }) {
  const { data: cryptoCoins, isFetching } = useGetCryptoQuery();
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setCryptos(cryptoCoins?.data.coins);
  }, [cryptoCoins, cryptos]);
  if (isFetching) return "Loading...";
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-6 mt-2 text-xl">Top Crypto</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cryptos?.slice(0, limit)?.map((item) => (
          <CryptoCard {...item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
}

export default CryptoContainer;
