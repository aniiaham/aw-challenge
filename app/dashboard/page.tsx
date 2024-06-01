import logo from "@/public/images/Logo.svg";
import Image from "next/image";
import viewIcon from "@/public/images/view-icon.svg";
import btcIcon from "@/public/images/btc-icon.svg";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="bg-greyscale-white mx-auto h-full w-full">
      <nav className="bg-[#F0F1F1] flex flex-row items-center justify-between px-8">
        <div className="flex flex-row items-center gap-8 py-2">
          <Image src={logo} alt="logo" />
          <p className="text-dark-teal-2 font-mono font-medium leading-6 text-xl mx-4 my-4">
            DASHBOARD
          </p>
        </div>
        <Image src={viewIcon} alt="view eye" />
      </nav>
      <div className="bg-greyscale-white h-[79px] text-dark-teal-2 font-mono font-medium leading-[36.8px] text-[32px] flex items-center pl-12">
        BTC ADDRESS HERE
      </div>
      <div className="flex flex-row w-full">
        <div className="bg-[#F0F1F1] py-4 border-t-2 border-greyscale-6 border-r-2 border-b-2 w-[420px]">
          <p className="text-dark-teal-2 font-mono text-xl font-medium leading-6 mx-4">
            QUICK ACTIONS
          </p>
        </div>
        <div className="bg-[#F0F1F1] py-4 border-t-2 border-greyscale-6 w-3/4 border-b-2"></div>
      </div>
      <div className="flex flex-row w-full">
        <div className="border-r-2 border-greyscale-6 w-[420px] h-screen">
          <button className="flex flex-row items-center gap-4 bg-greyscale-3 text-dark-teal-main font-mono font-normal text-xl leading-6 border-[1px] border-greyscale-7 rounded  px-4 text-start h-[60px] w-[90%] mt-4 mx-4 ">
            <Image src={btcIcon} alt="btc icon" />
            ADD BTC ADDRESS
          </button>
        </div>
        <div className="w-3/4"></div>
      </div>
    </section>
  );
};

export default Dashboard;
