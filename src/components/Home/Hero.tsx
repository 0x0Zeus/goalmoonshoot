const Hero = () => {
  return (
    <div className="hero-bg pb-12 sm:pb-[60px] md:pb-[90px] lg:pb-[135px] pt-20 pt-[186px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
        <h1 className="font-inter font-black text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] leading-tight sm:leading-[64px] md:leading-[90px] lg:leading-[120px] text-[#FDE047] hero-title">
          KONG Blog
        </h1>
        <h2 className="font-inter font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed sm:leading-[32px] md:leading-[48px] lg:leading-[64px] text-[#ffffff] hero-content max-w-3xl mx-auto">
          Stay updated with the latest news from the jungle
        </h2>
      </div>
    </div>
  );
};

export default Hero;
