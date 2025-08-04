import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {} from "react-icons";
import { FaTiktok, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
        <div className="container mx-auto px-4 py-20 sm:px-6">
          <div className="relative">
            <h1 className="music-title pb-20 pt-10 text-center font-inter text-3xl font-black text-white sm:pt-20 sm:text-4xl md:text-[64px]">
              Contact Us
            </h1>
            <div className="absolute bottom-0 right-1/2 h-[200px] w-[400px] translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(26,124,255,0.5)_0%,rgba(26,124,255,0)_100%)] sm:h-[300px] sm:w-[600px]"></div>
          </div>
          <div className="mx-auto mt-10 grid w-full max-w-[1096px] divide-x-[1px] divide-[#1A7CFF] rounded-2xl border border-[#1A7CFF] bg-[#1A7CFF]/10 sm:mt-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-l-[15px] px-4 py-6 text-white sm:gap-8 sm:px-6 sm:py-8 md:justify-start md:gap-8 md:px-[44px] md:py-12">
              <h1 className="text-lg font-medium text-[#ffffff]">Contact Us</h1>
              <p className="text-2xl text-white">Let's Get In Touch</p>
              <p>
                Have a question, idea, or need help getting started? Our team is
                here to support you. Drop us a message — we’d love to hear from
                you!
              </p>

              <div className="space-y-5">
                <p className="text-xl font-medium">Follow Us</p>
                <div className="flex items-center gap-5">
                  <Link
                    to="https://www.youtube.com/@goal2moon"
                    className="text-white max-md:hidden"
                  >
                    <FaYoutube size={24} />
                  </Link>
                  <Link
                    to="https://x.com/@GoalToTheMoon"
                    className="text-white max-md:hidden"
                  >
                    <FaXTwitter size={24} />
                  </Link>
                  <Link
                    to="https://www.tiktok.com/@goal2moon"
                    className="text-white max-md:hidden"
                  >
                    <FaTiktok size={24} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-r-[15px] p-4 font-spaceGrotesk text-[#ffffff] md:space-y-6 md:p-6">
              <Form
                name="nest-messages"
                layout="vertical"
                labelWrap
                colon={false}
                onFinish={onFinish}
                className=""
                validateMessages={validateMessages}
              >
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
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
                      className="h-11 rounded-full border border-[#0077FF] bg-[#1A7CFF]/50 bg-[radial-gradient(50%_50%_at_50%_50%,#1A7CFF20_0%,#1A7CFF60_100%)] px-4 text-sm text-white placeholder:text-white/80 sm:h-12"
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
                      className="h-11 rounded-full border border-[#0077FF] bg-[#1A7CFF]/50 bg-[radial-gradient(50%_50%_at_50%_50%,#1A7CFF20_0%,#1A7CFF60_100%)] px-4 text-sm text-white  placeholder:text-white/80 sm:h-12"
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
                    className="rounded-lg border border-[#0077FF] bg-[#1A7CFF]/50 bg-[radial-gradient(50%_50%_at_50%_50%,#1A7CFF20_0%,#1A7CFF60_100%)]  text-white placeholder:text-white/80"
                  ></TextArea>
                </Form.Item>
                <Form.Item>
                  <button
                    type="submit"
                    className="h-11 w-full rounded-full bg-[#1A7CFF] text-center text-white transition-colors hover:bg-[#1A7CFF]/50"
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
