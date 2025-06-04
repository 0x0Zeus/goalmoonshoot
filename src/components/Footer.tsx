import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] font-spaceGrotesk text-[#FDE047] text-sm md:text-base font-bold">
      <div className="container mx-auto">
        <div className="px-4 h-20 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0">
          <span className="text-center sm:text-left">
            ©livelikekong. All rights reserved.
          </span>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="https://x.com/LiveLikeKong">
                <FaXTwitter />
              </Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer max-sm:hidden">Terms & Services</li>
            <li className="hover:text-white transition-colors cursor-pointer max-sm:hidden">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
