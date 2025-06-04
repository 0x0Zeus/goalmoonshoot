import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "@/styles/article-detail.css";
import moment from "moment";
import axios from "axios";
import { basic_url } from "@/stack/stack";
import parse from "html-react-parser";

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

  useEffect(() => {
    if (id.id !== undefined) {
      const len = id.id.length;
      const st_id = id.id.slice(1, len);
      const num_id = Number(st_id);

      axios.get(`${basic_url}blogposts/${num_id}`).then((res) => {
        let responseData = res.data;
        const contents = responseData?.contents;
        const splited_array = contents?.split("<h2>");
        let content = "";
        for (var i = 0; i < splited_array?.length; i++) {
          content += splited_array[i];
          content += "<h2>";
        }
        responseData["contents"] = content;
        setDetailData(res.data);
        console.log("====>", res);
      });
    }
  }, []);

  return (
    <>
      <div className="container mx-auto font-inter">
        <div className="px-4">
          <div className="mx-auto max-w-[900px] px-1.5 space-y-5">
            <div className="mt-[100px] text-xl font-bold md:mt-[180px] md:text-2xl lg:text-4xl">
              {detailData?.title}
            </div>
            <div className="flex items-center justify-between">
              <div className="w-fit font-medium text-sm text-black rounded-full bg-[#FDE047] px-[14px] py-1">
                Featured
              </div>
              <div className="text-base font-medium text-[#000000]/80">
                <span>
                  {moment(detailData?.created_at).format(
                    "YYYY/MM/DD",
                  )}
                </span>
              </div>
            </div>

            <div className="article-content">
              {detailData !== undefined && parse(detailData.contents)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
