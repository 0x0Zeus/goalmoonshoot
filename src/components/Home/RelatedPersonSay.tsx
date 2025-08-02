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
    <div className="flex flex-col sm:flex-row w-full justify-between gap-4 font-inter text-white md:gap-6 xl:gap-16 items-center">
      <img
        src={img_url}
        // src="/images/1.jpg"
        className="w-full rounded-xl xl:max-w-[250px] h-auto sm:w-[40%]"
      />
      <div className="text-left space-y-3 sm:space-y-4 py-1.5 flex-1">
        <div className="flex flex-wrap items-center gap-4 sm:gap-10">
          <div className="flex h-6 items-center justify-center rounded-full bg-[#C6A353] px-3 sm:px-4 text-xs sm:text-sm text-[#000000] w-fit">
            Featured
          </div>
          <span className="text-xs font-medium text-[#ffffff]/60">{time}</span>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white line-clamp-1">{articleTitle}</p>
        <p className="line-clamp-3 text-xs sm:text-sm text-white/80">{articleSubtitle}</p>
        <button 
          onClick={handleViewDetails} 
          className="flex items-center gap-2 cursor-pointer bg-transparent rounded-full text-white  h-9 sm:h-10 text-base sm:text-xl hover:opacity-90 transition-opacity"
        >
          Read More
          <FaArrowRightLong size={18} className="sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default RelatedPersonSay;
