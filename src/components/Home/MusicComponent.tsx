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
    <div className="rounded-lg border-[3px] border-[#FDE047] bg-white">
      <img
        src={item.img}
        alt={item.title}
        className="h-auto w-full rounded-t-[5px]"
      />
      <div className="flex flex-col items-center gap-5 p-5 text-center">
        <p className="text-2xl font-bold text-black">{item.title}</p>
        <Link to={item.url}>
          <div className="rounded-full bg-gradient-to-br from-[#DB2777] to-[#9333EA] p-2 text-2xl text-white">
            <CiPlay1 />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MusicComponent;
