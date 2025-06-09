import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

interface MusicTypes {
  id: number;
  title: string;
  img: string;
  artist: string;
  url: string;
}

const MusicComponent = (item: MusicTypes) => {
  return (
    <div className="rounded-lg border-[3px] border-[#C6A353] bg-white flex flex-col">
      <img
        src={item.img}
        alt={item.title}
        className="h-auto w-full rounded-t-[5px]"
      />
      <div className="flex flex-col items-center gap-5 p-5 text-center bg-[#0E2115] flex-1">
        <p className="text-2xl font-bold text-white">{item.title}</p>
        <Link to={item.url}>
          <div className="rounded-full bg-[#C6A353]/20 p-2 text-2xl text-white">
            <CiPlay1 />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MusicComponent;
