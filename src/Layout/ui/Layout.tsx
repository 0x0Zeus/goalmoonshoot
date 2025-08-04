import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#020307] font-inter">
      <Header />
      <main id="main" className="w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
