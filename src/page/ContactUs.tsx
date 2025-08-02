import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {} from "react-icons";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactUs = () => {
  const handleSendBtn = () => {
    console.log("ClickSendButton");
  };

  const onFinish = (value: any) => {
    console.log(value.user, value.email, value.message);

    axios
      .post(
        `${basic_url}contact_us/${value.user}/${value.email}/${value.message}`,
      )
      .then(() => {
        message.success("Left Message Successfully.");
      })
      .catch(() => message.error("Network Error"));
  };

  return (
    <>
      <div className="min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 sm:px-6 py-20">
          <h1 className="font-inter font-black text-3xl sm:text-4xl md:text-[64px] text-[#FDE047]/80 music-title text-center pt-10 sm:pt-20">
            Contact Us
          </h1>
          <div className="max-w-[1096px] w-full mx-auto mt-6 sm:mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6 sm:gap-8 rounded-xl bg-[#0E2115] px-4 sm:px-6 py-6 sm:py-8 md:justify-start md:gap-8 md:px-[44px] md:py-12 text-white">
              {/* <div className="flex items-center gap-3 sm:gap-4 md:gap-7">
                <div className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#DB2777] to-[#9333EA] text-center">
                  <img
                    src="/icons/phone.png"
                    className="mx-auto w-4 sm:w-5 md:w-7"
                    alt="phone"
                  />
                </div>
                <div className="text-left text-[#000000]/80">
                  <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-[28px] sm:leading-[32px] md:leading-[48px]">
                    Phone
                  </p>
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-[20px] sm:leading-[24px] md:leading-[32px]">
                    +1 234 567 8900
                  </p>
                </div>
              </div> */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-7">
                <div className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#C6A353]/20 to-[#ffffff]/20 text-center">
                  <img
                    src="/icons/company.png"
                    className="mx-auto w-4 sm:w-5 md:w-7"
                    alt="Company"
                  />
                </div>
                
                <div className="text-left text-[#ffffff]/80">
                  <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-[28px] sm:leading-[32px] md:leading-[48px]">
                    Company
                  </p>
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-[20px] sm:leading-[24px] md:leading-[32px]">
                    VV, LLC Company
                  </p>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 sm:gap-4 md:gap-7">
                <div className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[68px] md:w-[68px] shrink-0 content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#DB2777] to-[#9333EA] text-center">
                  <img
                    src="/icons/map.png"
                    className="mx-auto w-4 sm:w-5 md:w-7"
                    alt="map"
                  />
                </div>
                <div className="text-left text-[#000000]/80">
                  <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-[28px] sm:leading-[32px] md:leading-[48px]">
                    Address
                  </p>
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-[20px] sm:leading-[24px] md:leading-[32px]">
                    90 Richmond Hill road, 1M S.I, New York 10314
                  </p>
                </div>
              </div> */}
            </div>
            <div className="space-y-4 rounded-xl bg-[#0E2115] p-4 font-spaceGrotesk text-[#ffffff] md:space-y-6 md:p-6">
              <div className="">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#ffffff]">
                  Contact Us
                </h1>
              </div>
              <Form
                name="nest-messages"
                layout="vertical"
                labelWrap
                colon={false}
                onFinish={onFinish}
                className=""
                validateMessages={validateMessages}
              >
                <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
                  <Form.Item
                    name={["user"]}
                    label={
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#ffffff",
                          fontWeight: "600",
                          lineHeight: "20px",
                        }}
                      >
                        Name
                      </p>
                    }
                    rules={[{ required: true }]}
                    style={{ width: "100%" }}
                  >
                    <Input
                      size="large"
                      placeholder="Full name"
                      className="h-11 sm:h-12 rounded-full border border-[#FDE047] bg-white/20 px-4 text-sm text-white placeholder:text-white/80"
                    />
                  </Form.Item>
                  <Form.Item
                    name={["email"]}
                    label={
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#ffffff",
                          fontWeight: "600",
                          lineHeight: "20px",
                        }}
                      >
                        Email
                      </p>
                    }
                    rules={[{ type: "email", required: true }]}
                    style={{ width: "100%" }}
                  >
                    <Input
                      size="large"
                      placeholder="Your email"
                      className="h-11 sm:h-12 rounded-full border border-[#FDE047] bg-white/20 px-4 text-sm  text-white placeholder:text-white/80"
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  name={["message"]}
                  style={{ width: "100%" }}
                  label={
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#ffffff",
                        fontWeight: "600",
                        lineHeight: "20px",
                      }}
                    >
                      Message
                    </p>
                  }
                  rules={[{ required: true }]}
                >
                  <TextArea
                    style={{ height: 120 }}
                    placeholder="Please enter your message ..."
                    className="rounded-lg border border-[#FDE047] bg-white/20  text-white placeholder:text-white/80"
                  ></TextArea>
                </Form.Item>
                <Form.Item>
                  <button
                    type="submit"
                    className="bg-[#C6A353] w-full rounded-full h-11 text-center text-black hover:bg-[#c41e6a] transition-colors"
                    onClick={handleSendBtn}
                  >
                    Send
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
