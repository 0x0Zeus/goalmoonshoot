import Hero from "@/components/Home/Hero";
import Music from "@/components/Home/Music";
import Posts from "@/components/Home/Posts";
import { basic_url } from "@/stack/stack";
import { message, PaginationProps, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "@/styles/posts.css";
import Brand from "@/components/Home/Brand";

interface DataItem {
  category_id: number;
  created_at: Date;
  img_url: string;
  id: number;
  modified_at: Date;
  owner_id: number;
  rating: number;
  summary: string;
  title: string;
}

const HomePage = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [allData, setAllData] = useState<DataItem[]>([]);
  const [pgNumber, setPgNumber] = useState(1);
  const [pgSize, setPgSize] = useState(10);
  const [category, setCategory] = useState<string>("latest");
  const [totalCount, setTotalCount] = useState<number>(0);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setPgNumber(pageNumber);
    setPgSize(pageSize);
  };

  const handleChange = (value: string) => {
    setSearchVal(value);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    axios.get(`${basic_url}blogposts/all_blogposts_count`).then((res) => {
      setTotalCount(res.data.count);
    });
  });

  const searchFunction = () => {
    if (category === "popular") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popualr/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All data with Search Value"),
          );
      } else {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All Data No Search Value"),
          );
      }
    } else if (category === "latest") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data with Search Value"),
          );
      } else {
        axios
          .get(`${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`)
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data No Search Value"),
          );
      }
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchFunction();
    }
  };

  useEffect(() => {
    searchFunction();
  }, [category, pgNumber, pgSize]);

  return (
    <div className="font-inter">
      <Hero />
      <Brand />
      <Music />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-10 px-4 py-10 pb-16 text-center md:space-y-20 md:py-20 md:pb-32">
          <h1 className="music-title mt-8 text-xl font-black text-white sm:text-2xl md:text-3xl lg:text-4xl ">
            Latest Posts
          </h1>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="space-y-5 flex-1">
              <div className="flex items-center justify-between">
                <Select
                  defaultValue={"latest"}
                  onChange={handleCategory}
                  className="h-10 w-[250px] text-left text-sm md:h-12 md:text-base"
                  options={[
                    {
                      value: "latest",
                      label: "Latest",
                    },
                    {
                      value: "popular",
                      label: "Popular",
                    },
                  ]}
                ></Select>
                <div className="relative w-[250px]">
                  <input
                    id="search-bar"
                    type="text"
                    placeholder="Search"
                    className="h-10 w-full rounded-lg pl-4 pr-8 text-sm text-white/90 placeholder:text-[#808080] focus:outline-none md:h-12 md:text-base border border-[#1A7CFF] bg-[#1A7CFF]/10"
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) => handleSearch(e)}
                  />
                  <MdSearch className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 md:h-4 md:w-4 text-white" />
                </div>
              </div>
              <Posts
                allData={allData}
                totalCount={totalCount}
                onChange={onChange}
              />
            </div>
            <div className="w-full shrink-0 space-y-6 md:space-y-[30px] lg:w-[350px]">
              <div className="rounded-[20px] bg-[#1A7CFF33] p-4 md:p-5 border border-[#1A7CFF]">
                <iframe
                  className="widget_preview_iframe"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  scrolling="no"
                  style={{
                    visibility: "visible",
                    width: "100%",
                    height: "723px",
                  }}
                  src="https://www.feedspot.com/widgets/lookup/M1fC72ff768c"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-20 h-[400px] w-[400px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,124,255,0.5)_0%,rgba(26,124,255,0)_100%)] sm:h-[600px] sm:w-[600px] pointer-events-none"></div>
        <div className="absolute right-0 top-20 h-[400px] w-[400px] translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,124,255,0.5)_0%,rgba(26,124,255,0)_100%)] sm:h-[600px] sm:w-[600px] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HomePage;
