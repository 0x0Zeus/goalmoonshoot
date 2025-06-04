import { FaArrowRightLong } from "react-icons/fa6";

type props = {
  id: number;
  author: string;
  time: string;
  articleTitle: string;
  articleSubtitle: string;
  img_url: string;
};

const RelatedPersonSay = ({
  id,
  time,
  articleTitle,
  articleSubtitle,
  img_url,
}: props) => {
  const handleViewDetails = () => {
    window.location.href = `/articles/:${id}`;
  };

  return (
    <div className="flex flex-col sm:flex-row w-full justify-between gap-4 font-inter text-black md:gap-6">
      <img
        src={img_url}
        // src="/images/sample.png"
        className="w-full sm:w-[40%] rounded-xl object-cover aspect-[4/3] sm:aspect-auto"
      />
      <div className="text-left space-y-3 sm:space-y-4 py-1.5 flex-1">
        <div className="flex flex-wrap items-center gap-4 sm:gap-10">
          <div className="flex h-6 items-center justify-center rounded-full bg-[#FDE047] px-3 sm:px-4 text-xs sm:text-sm text-[#000000] w-fit">
            Featured
          </div>
          <span className="text-xs font-medium text-[#000000]/60">{time}</span>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-black line-clamp-1">{articleTitle}</p>
        <p className="line-clamp-2 text-xs sm:text-sm text-black/80">{articleSubtitle}</p>
        <button 
          onClick={handleViewDetails} 
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-br from-[#DB2777] to-[#9333EA] rounded-full text-white px-6 sm:px-8 h-9 sm:h-10 text-sm sm:text-base hover:opacity-90 transition-opacity"
        >
          Read More
          <FaArrowRightLong size={18} className="sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default RelatedPersonSay;
