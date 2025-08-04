const Hero = () => {
  return (
    <div className="hero-bg pb-12 pt-[100px] sm:pb-[60px] md:pb-[90px] lg:pb-[135px]">
      <div className="container mx-auto mt-20 space-y-4 px-4 text-center sm:space-y-5 sm:px-6 lg:px-8">
        <h1 className="hero-title mx-auto max-w-[800px] font-inter text-3xl font-black leading-tight text-[#FFFFFF] sm:text-4xl sm:leading-[64px] md:text-[60px] md:leading-[90px] lg:text-[80px] lg:leading-[120px]">
          WELCOME TO GOAL TO THE MOON!
        </h1>
        <img src="/icons/logo.png" className="mx-auto lg:w-[250px] md:w-[150px] sm:w-[100px] w-[50px]" />
      </div>
    </div>
  );
};

export default Hero;
