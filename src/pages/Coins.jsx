import CryptoContainer from "../components/CryptoContainer";

function Coins() {
  return (
    <div className="flex flex-col space-y-6">
      <CryptoContainer limit={undefined} />
    </div>
  );
}

export default Coins;
