import Hero from "@/components/Home/Hero";
import Music from "@/components/Home/Music";
import Posts from "@/components/Home/Posts";
import { basic_url } from "@/stack/stack";
import { message, PaginationProps, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "@/styles/posts.css";

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
      <div className="bg-gradient-to-b from-[#031008] to-[#000701]">
        <Music />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 px-4 py-10 pb-16 text-center md:space-y-20 md:py-20 md:pb-32">
            <h1 className="text-4xl font-black text-[#C6A353]/80 sm:text-5xl md:text-6xl lg:text-[64px]">
              Latest Posts
            </h1>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10">
              <Posts
                allData={allData}
                totalCount={totalCount}
                onChange={onChange}
              />
              <div className="w-full shrink-0 space-y-6 md:space-y-[30px] lg:w-[350px]">
                <div className="rounded-[20px] bg-[#0E2115] px-6 py-8 md:px-12 md:py-10 space-y-5">
                  <div className="relative w-full">
                    <input
                      id="search-bar"
                      type="text"
                      placeholder="Search"
                      className="h-10 w-full rounded-full border border-[#313131] bg-[#031008] pl-4 pr-8 text-sm text-white/90 placeholder:text-[#808080] md:h-12 md:text-base focus:outline-none"
                      onChange={(e) => handleChange(e.target.value)}
                      onKeyDown={(e) => handleSearch(e)}
                    />
                    <MdSearch className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 md:h-4 md:w-4" />
                  </div>
                  <Select
                    defaultValue={"latest"}
                    onChange={handleCategory}
                    className="h-10 w-full text-left text-sm md:h-12 md:text-base"
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
                </div>
                <div className="rounded-[20px] bg-white p-4 md:p-5">
                  <iframe
                    className="widget_preview_iframe"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    scrolling="no"
                    style={{visibility: 'visible', width: '100%', height: '723px'}}
                    src="https://www.feedspot.com/widgets/lookup/M1fC72ff768c"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
