const Newsletter = () => {
  return (
    <section className="backdrop-blur-sm bg-white/30 p-5 w-full rounded-lg border border-white mt-20 mb-[-170px]">
      <div className="text-center bg-white rounded-lg w-full pt-28 pb-28 border newsletter bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center">
        <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
        <p className="font-medium text-gray-500 mt-3 mb-8">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="grid grid-cols-7 gap-5 max-w-[700px] mx-auto px-2">
          <input
            className="col-span-5 border p-3 rounded-xl focus:outline-none z-10"
            type="email"
            placeholder="Enter your email"
          />
          <button className="col-span-2 bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-yellow-500 hover:to-pink-400 rounded-lg font-bold z-10">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
