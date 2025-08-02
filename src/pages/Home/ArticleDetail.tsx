import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";
import { basic_url } from "@/stack/stack";
import parse from "html-react-parser";
import "./ArticleDetail.css";
import SubscribeModal from "@/components/SubscribeModal";
import { links1, links2 } from "@/stack/links";

interface DataItem {
  category_id: number;
  contents: string;
  created_at: Date;
  id: number;
  modified_at: Date;
  owner_id: number;
  rating: number;
  title: string;
}

const ArticleDetail = () => {
  const id = useParams();
  const [detailData, setDetailData] = useState<DataItem | undefined>();
  const [subscribeVisible, setSubscribeVisible] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const handleSubscribe = () => {
    setSubscribeVisible(true);
  };

  useEffect(() => {
    if (id.id !== undefined) {
      const len = id.id.length;
      const st_id = id.id.slice(1, len);
      const num_id = Number(st_id);

      axios.get(`${basic_url}blogposts/${num_id}`).then((res) => {
        const length2 = links2.length;
        const random2 = Math.floor(Math.random() * length2);
        let responseData = res.data;
        const contents = responseData?.contents;
        const splited_array = contents?.split("<h2>");
        let content = "";
        for (var i = 0; i < splited_array?.length; i++) {
          content += splited_array[i];
          if (i == Math.floor(splited_array?.length / 2)) {
            content += links2[random2];
          }
          content += "<h2>";
        }
        responseData["contents"] = content;
        setDetailData(res.data);
      });
    }

    const length = links1.length;
    const random = Math.floor(Math.random() * length);
    setLink(links1[random]);
  }, []);

  return (
    <>
      <div className="container">
        <div className="link-animate fixed bottom-10 right-10 h-auto w-36 rounded-3xl  shadow-[0_0_20px_0px] md:w-40">
          {parse(link)}
        </div>
        <div className="mb-3 mt-[100px] text-4xl font-bold">
          {detailData?.title}
        </div>
        <div className="flex items-center text-xl text-black">
          <span className="pr-2">By :</span>
          <span className="pr-2 font-bold">GOLDEXCG.com</span>
          <div className="h-10 w-10 overflow-hidden rounded-[50%]">
            <img src="/icons/1.png" className="h-10 w-10"></img>
          </div>
        </div>
        <div className="mb-3 text-[18px] text-gray-600">
          <span>Published: </span>
          <span>
            {moment(detailData?.created_at).format("YYYY/MM/DD kk:mm:ss ")}
            GMP-5
          </span>
        </div>
        <hr className="pb-3"></hr>
        <div className="article-content">
          {detailData !== undefined && parse(detailData.contents)}
        </div>
        <div className=" my-10 flex flex-col items-center justify-center gap-5 border-b border-t border-[#006F99] py-5 font-mono sm:flex-row">
          <p className="text-center text-base text-black xl:text-xl">
            Don't miss a thing! Sign up for a daily update delivered to your
            inbox
          </p>
          <button
            className="h-[40px] w-[200px] bg-[#006F99] text-base text-white"
            onClick={() => handleSubscribe()}
          >
            Subscribe
          </button>
        </div>
        <SubscribeModal
          visible={subscribeVisible}
          setVisible={setSubscribeVisible}
        ></SubscribeModal>
      </div>
    </>
  );
};

export default ArticleDetail;
