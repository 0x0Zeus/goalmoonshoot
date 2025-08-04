const Brand = () => {
  return (
    <div className="container">
      <div className="relative flex items-center justify-between py-[100px] md:flex-row flex-col md:gap-0 gap-10">
        <div className="space-y-10 px-4 text-white md:-order-none order-1">
          <h3 className="text-2xl sm:text-4xl font-bold">From the Pitch to the Moon</h3>
          <p className="">
            Goal to the Moon is more than just a meme coin — it's a global
            celebration of the beautiful game. Born from the sharded passion of
            football fans across every continent, this project unites the thrill
            of scoring goals with the unstoppable energy of crypto culture.
          </p>
          <button className="box-border flex h-9 w-fit flex-row items-center justify-center rounded border border-white/20 bg-[#1A7CFF] px-4 text-white shadow-[0px_1px_2px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-[#5a9bf0]">
            Get Started
          </button>
        </div>
        <img
          src="/images/ball.png"
          className="object-contain object-right md:-my-10 -mx-5 -ml-40 lg:w-[600px] xl:w-[750px] md:w-[450px]"
        />
        <div className="absolute right-20 top-20 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,124,255,0.5)_0%,rgba(26,124,255,0)_100%)] sm:h-[600px] sm:w-[600px]"></div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-[#ffffff00] to-[#ffffff00] via-[#ffffff]">

      </div>
    </div>
  );
};

export default Brand;
