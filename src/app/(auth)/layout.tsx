"use client";

import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";
import Logo from "../../../public/HeroPic.svg";
import Image from "next/image";

type AuthPagesProps = {
  children: React.ReactNode;
};

const AuthPages = ({ children }: AuthPagesProps) => {
  return (
    <div className="h-full w-full">
      <Navbar />

      <main className="w-full h-full bg-white">
        <div className="w-full flex items-center">
          <div className="w-full py-8 bg-secondary">
            <div className="w-full py-8">
              <Image src={Logo} alt="Logo" className="h-[400px]" />
            </div>
          </div>

          <div className="w-full h-full bg-white">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthPages;
