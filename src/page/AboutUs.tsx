import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 font-inter text-white sm:px-6 md:px-8 ">
        <div className="mx-auto max-w-[850px] space-y-4 pb-4 pt-[100px] sm:space-y-5 sm:pb-6 sm:pt-[120px] md:pb-20 md:pt-[150px]">
          <p className="text-base sm:text-lg md:text-lg">
            From the Pitch to the Moon — Welcome to Goal to the Moon! 🌕⚽
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Goal to the Moon is more than just a meme coin — it’s a global
            celebration of the beautiful game. Born from the shared passion of
            futbal fans across every continent, this project unites the thrill
            of scoring goals with the unstoppable energy of crypto culture.
            <br />
            <br />
            We’re here to bring the passion of the pitch into the decentralized
            future — where cheers echo not just in stadiums, but across
            blockchains. Whether you’re a weekend warrior, a die-hard supporter,
            or just love good memes and great vibes, Goal to the Moon is your
            team.
            <br />
            <br />
            No red cards. No offsides. Just pure community spirit, full
            transparency, and rocket-fueled fun.
            <br />
            <br />
            Join the squad. Kick for the moon.
          </p>

          <h1 className="pb-5 pt-4 text-xl font-bold sm:pt-5 sm:text-2xl">
            Follow Us
          </h1>
          <Link to="https://twitter.com/@GoalToTheMoon">
            <p className="text-base sm:text-lg md:text-lg">
              Twitter/X: @GoalToTheMoon
            </p>
          </Link>
          <Link to="https://youtube.com/@goal2moon">
            <p className="text-base sm:text-lg md:text-lg">
              Youtube: @goal2moon
            </p>
          </Link>
          <Link to="https://tiktok.com/@goal2moon">
            <p className="text-base sm:text-lg md:text-lg">
              Tiktok: @goal2moon
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
