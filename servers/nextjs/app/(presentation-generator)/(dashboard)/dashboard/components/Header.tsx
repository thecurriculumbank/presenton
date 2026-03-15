"use client";

import Wrapper from "@/components/Wrapper";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="w-full  sticky top-0 z-50 py-7 ">
      <Wrapper className="px-5 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between py-1"></div>
      </Wrapper>
    </div>
  );
};

export default Header;
