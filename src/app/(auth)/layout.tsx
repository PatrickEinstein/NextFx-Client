"use client";

import { Navbar } from "@/components";
import Logo from "../../../public/AuthImg.svg";
import Logo3 from "../../../public/RegisterImg.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

type AuthPagesProps = {
  children: React.ReactNode;
};

const AuthPages = ({ children }: AuthPagesProps) => {
  const path = usePathname();

  return (
    <div className="h-full w-full">
      <Navbar />

      <main className="w-full h-full bg-white">
        <div className="w-full h-full flex items-center">
          <div className="w-[60%] h-full py-8 bg-tertiary">
            <div className="w-full h-full py-8 flex items-center justify-center">
              <Image src={Logo} alt="Logo" className="h-[calc(100vh-200px)]" />
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center bg-white">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPages;
