import { music } from "@/stack/music";
import MusicComponent from "./MusicComponent";

interface MusicTypes {
  id: number;
  title: string;
  img: string;
  artist: string;
  url: string;
} 

const Music = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-[85px] text-center">
      <div>
        <h1 className="music-title text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-tight sm:leading-[64px] text-[#FDE047]">
          KONG Music
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-relaxed sm:leading-[40px] md:leading-[48px] lg:leading-[64px] text-white mt-2 sm:mt-4">
          Listen to the King's Latest Tracks
        </p>
        <div className="mt-8 sm:mt-10 md:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {music.map((item: MusicTypes) => (
            <MusicComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
