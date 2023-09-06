import { useEffect, useState } from "react";
import { useGetNewsQuery } from "../services/newsApi";
import BlogCard from "./BlogCard";

function NewsContainer({ limit }) {
  const { data: newsData, isFetching } = useGetNewsQuery();
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData?.Data);
  }, [newsData, news]);
  if (isFetching) return "Loading...";
  console.log(news);
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold mb-6 mt-2 text-xl">Top Crypto News</h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5">
        {news?.slice(0, limit)?.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default NewsContainer;
