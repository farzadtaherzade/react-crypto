function BlogCard({ imageurl, title, body }) {
  return (
    <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url(${imageurl}`,
        }}
      ></div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-1xl">
          {String(title).slice(0, 50)}
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          {String(body).slice(0, 50)}...
        </p>
        <div className="flex item-center mt-2"></div>
        <div className="flex item-center justify-between mt-3">
          <h1 className="text-gray-700 font-bold text-xl">$220</h1>
          <a className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded cursor-pointer">
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
