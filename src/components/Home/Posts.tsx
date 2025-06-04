import moment from "moment";
import RelatedPersonSay from "./RelatedPersonSay";
import { Pagination } from "antd";

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

const Posts = ({
  allData,
  totalCount,
  onChange,
}: {
  allData: DataItem[];
  totalCount: number;
  onChange: any;
}) => {
  return (
    <div className="posts-bg rounded-[12px] sm:rounded-[20px] bg-white px-4 sm:px-6 md:px-[50px] pt-8 sm:pt-12 md:pt-[100px]">
      <div className="space-y-10">
        {allData.map((item, index) => {
          return (
            <RelatedPersonSay
              key={index}
              id={item.id}
              author="TRDARTS.com"
              time={moment(item.created_at).format("MM/DD/YYYY")}
              articleTitle={item.title}
              articleSubtitle={item.summary}
              img_url={item.img_url}
            />
          );
        })}
      </div>
      <div className="my-8 sm:my-12 md:my-[64px]">
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={totalCount}
          onChange={onChange}
          className="mt-4 sm:mt-6 select-none px-2 sm:px-4 text-xs sm:text-sm md:text-base"
          itemRender={(_, type, originalElement) => {
            if (type === "prev") {
              return <span className="text-lg sm:text-xl">{"<"}</span>;
            }
            if (type === "next") {
              return <span className="text-lg sm:text-xl">{">"}</span>;
            }
            return originalElement;
          }}
          pageSizeOptions={["12", "24", "48", "96"]}
          defaultPageSize={12}
          size="small"
          responsive
        />
      </div>
    </div>
  );
};

export default Posts;
