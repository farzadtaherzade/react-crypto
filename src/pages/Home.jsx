import HelperMessage from "../components/HelperMessage";
import CryptoContainer from "../components/CryptoContainer";
import NewsContainer from "../components/NewsContainer";

function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <HelperMessage />
      <CryptoContainer limit={15} />
      <NewsContainer limit={10} />
    </div>
  );
}

export default Home;
