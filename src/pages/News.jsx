import NewsContainer from "../components/NewsContainer";

function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <NewsContainer limit={undefined} />
    </div>
  );
}

export default Home;
