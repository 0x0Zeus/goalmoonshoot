import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-white font-inter">
      <div className="container mx-auto mt-20 px-4 pb-[35px] sm:px-6 sm:pb-[70px]">
        <h1 className="music-title pt-10 text-center font-inter text-4xl font-black text-[#000000]/80 sm:pt-20 sm:text-5xl md:text-[64px]">
          KONG Community
        </h1>
        <div className="mx-auto mt-6 w-full max-w-[1096px] space-y-8 sm:mt-12 sm:space-y-[56px]">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-2xl font-black leading-tight text-[#000000]/80 sm:text-3xl sm:leading-[64px] md:text-4xl">
              YouTube Channel
            </p>
            <Link to={"https://www.youtube.com/@livelikekong"}>
              <img
                src="/images/youtube.jpeg"
                alt="youtube"
                className="max-h-[300px] w-full rounded-[16px] border-[4px] border-[#FDE047] object-cover sm:max-h-[450px] sm:rounded-[32px]"
              />
            </Link>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-2xl font-black leading-tight text-[#000000]/80 sm:text-3xl sm:leading-[64px] md:text-4xl">
              Twitter Channel
            </p>
            <Link to={"https://x.com/LiveLikeKong"}>
              <img
                src="/images/twitter.jpeg"
                alt="twitter"
                className="max-h-[300px] w-full rounded-[16px] border-[4px] border-[#FDE047] object-cover sm:max-h-[450px] sm:rounded-[32px]"
              />
            </Link>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-2xl font-black leading-tight text-[#000000]/80 sm:text-3xl sm:leading-[64px] md:text-4xl">
              DexTools
            </p>
            <iframe
              id="dextools-widget"
              title="DEXTools Trading Chart"
              width="100%"
              height="400"
              src="https://www.dextools.io/widget-chart/en/solana/pe-light/4uCWVvu7MPukR5uRtN9DZFjKFSMnhyaewnbTEA5PANnY?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
