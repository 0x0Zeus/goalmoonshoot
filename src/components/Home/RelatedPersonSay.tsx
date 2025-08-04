type props = {
  id: number;
  author: string;
  time: string;
  articleTitle: string;
  articleSubtitle: string;
  img_url: string;
};

const RelatedPersonSay = ({
  id=1,
  time,
  articleTitle,
  articleSubtitle,
  img_url,
}: props) => {
  const handleViewDetails = () => {
    window.location.href = `/articles/:${id}`;
  };

  return (
    <div className="flex flex-col sm:flex-row w-full justify-between gap-4 font-inter text-white md:gap-6 xl:gap-16 items-center bg-[#1A7CFF]/20 border border-[#1A7CFF] rounded-2xl">
      <img
        src={img_url}
        // src="/images/1.jpg"
        className="w-full rounded-xl xl:max-w-[250px] h-auto sm:w-[40%]"
      />
      <div className="text-left space-y-3 sm:space-y-4 py-1.5 flex-1">
        <div className="flex flex-wrap items-center gap-4 sm:gap-10">
          <div className="flex h-6 items-center justify-center rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#1A7CFF00_0%,#1A7CFFFF_100%)] px-3 sm:px-4 text-xs sm:text-sm text-[#ffffff] w-fit">
            Featured
          </div>
          <span className="text-xs font-medium text-[#ffffff]">{time}</span>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white line-clamp-1">{articleTitle}</p>
        <p className="line-clamp-3 text-xs sm:text-sm text-white/80">{articleSubtitle}</p>
        <button 
          onClick={handleViewDetails} 
          className="flex items-center gap-2 cursor-pointer bg-[radial-gradient(50%_50%_at_50%_50%,#1A7CFF00_0%,#1A7CFFFF_100%)] rounded-full text-white  h-9 sm:h-10 text-base sm:text-xl hover:opacity-90 transition-opacity"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default RelatedPersonSay;
