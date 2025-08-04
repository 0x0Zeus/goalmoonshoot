import { FC } from "react";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="h-20 w-full border-t border-[#1A7CFF] bg-transparent font-spaceGrotesk text-sm font-bold text-[#9E9E9E] md:text-base">
      <div className="container mx-auto  h-full">
        <div className="flex h-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0">
          <span className="text-center sm:text-left">
            ©livelikekong. All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <li className="cursor-pointer transition-colors hover:text-white">
              <Link to="https://www.youtube.com/@goal2moon">
                <FaYoutube />
              </Link>
            </li>
            <li className="cursor-pointer transition-colors hover:text-white">
              <Link to="https://x.com/@GoalToTheMoon">
                <FaXTwitter />
              </Link>
            </li>
            <li className="cursor-pointer transition-colors hover:text-white">
              <Link to="https://www.tiktok.com/@goal2moon">
                <FaTiktok />
              </Link>
            </li>
            <li className="cursor-pointer transition-colors hover:text-white max-sm:hidden">
              Terms & Services
            </li>
            <li className="cursor-pointer transition-colors hover:text-white max-sm:hidden">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
