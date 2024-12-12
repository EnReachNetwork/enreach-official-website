import { useState } from "react";
import { showCaseList } from "../utils/common"
import Icon from '@/app/images/index'

const AShowCase = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);


  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate bg-[#1C1C1C] py-[110px] mo:py-0 mo:pt-[38px] ">
    <div className="w-container m-auto md:w-full md:px-[30px] mo:w-full mo:px-5 ">
      <div className="flex justify-center">
        <img src="./title.svg" />
      </div>
      <div className="flex flex-wrap justify-center pt-[50px] mo:pt-6 gap-9 mo:gap-3  w-full cursor-default">
        {showCaseList.map((item, index) => {
          return <div
            key={`tab_${index}`}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover({ index, isHover: false });
            }}
            onClick={() => {
              setDealHover({ index, isHover: true });
            }}
            // data-aos="fade-up"
            // data-aos-duration="1000"
            className={`${dealHover?.isHover && dealHover.index === index
              ? "text-[#FFFFFF] bg-[#4281FF]"
              : "text-[#7C7C7C]"
              } rounded-[51px]  bg-[#313131] flex flex-col items-center justify-center w-full  max-w-[421px] px-8 py-16`}>
            <div >
              <Icon color={`${dealHover?.isHover && dealHover.index === index
                ? "#FFFFFF"
                : " #7C7C7C"
                }`} name={item.icon} />
            </div>
            <div className="  w-[350px] max-h-[200px] h-full mt-[46px] mo:mt-4 text-center">
              <div style={{ letterSpacing: '-0.45px' }} className={` abcgintoText text-[30px] mo:text-lg font-semibold leading-7`}>{item.title}</div>
              <div style={{ letterSpacing: '-0.27px' }} className="asText text-center mt-4 text-xl mo:text-xs font-normal leading-[22px] ">{item.content}</div>
            </div>

          </div>
        })}

      </div>

    </div>
  </div>
}

export default AShowCase