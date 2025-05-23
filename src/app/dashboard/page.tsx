'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  function isMobileDevice() {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  useEffect(() => {
    const mobile = isMobileDevice();
    setIsMobile(mobile);

    if (!mobile) {
      window.location.href = "https://devnet.dashboard.enreach.network/";
    }
  }, []);

  if (!isMobile) {
    return null;
  }


  return <div className=" bg-[url(/banner-bg.png)]  mo:bg-top bg-cover  z-[100000] lg:relative  w-full h-screen">
    <div className="flex justify-center w-full pt-[4.75rem] mo:pt-5 flex-col items-center">
      <Image alt="" width={211} height={46} src="../enreach-logo.svg" className="w-[13.1875rem] h-[2.375rem] mo:w-[140px] mo:h-[1.4375rem]" />
      <div className="font-medium text-xl mo:text-sm text-black mt-5 mo:mt-[.375rem]">Mobile App</div>
      <div className="text-[#000000B2] mo:text-xs text-lg mo:my-6 my-10 ">
        Follow instructions to install the Mobile App for <br />
        EnReach Dashboard -- your all-in-one entry to<br />
        manage your EnReach Account and Edge Nodes.
      </div>
      <div className="pb-10 ">
        <img alt="earth" src="../earth.svg" className="w-[30vh] mo:w-full  mo:hidden  " />
        <img alt="earth" src="../mo-earth.svg" className=" mo:w-full ng:hidden enreachMoImg " />

      </div>
      <div className=" absolute bottom-0  mo:w-full  ">
        <img alt="addToDesk" src="../addToDesk.png" className=" object-cover rounded-3xl w-full mo:h-[15.5rem] " />

      </div>

    </div>

  </div>



}

export default Dashboard