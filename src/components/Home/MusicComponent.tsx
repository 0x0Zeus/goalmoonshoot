import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

interface MusicTypes {
  id: number;
  title: string;
  artist: string;
  source: string;
  url: string;
}

const MusicComponent = (item: MusicTypes) => {
  return (
    <div className="rounded-[16px] border-[3px] border-[#1A7CFF] bg-white flex flex-col">
      <img
        src={"/images/music.png"}
        alt={item.title}
        className="h-auto w-full rounded-t-[13px]"
      />
      <div className="flex flex-col items-center gap-5 p-5 text-center bg-[#071B39] flex-1 rounded-b-[13px]">
        <p className="text-2xl font-bold text-white">{item.title}</p>
        <Link to={item.url}>
          <div className="rounded-xl h-[76px] w-[76px] bg-[radial-gradient(50%_50%_at_50%_50%,#0077FF20_0%,#0077FF40_100%)] text-4xl text-white flex items-center justify-center">
            <CiPlay1 />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MusicComponent;
