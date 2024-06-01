import logo from "@/public/images/logo.jpg";
import Image from "next/image";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="bg-greyscale-white mx-auto h-full">
      <nav className="bg-[#F0F1F1] flex flex-row items-center gap-8 pl-4">
        <Image src={logo} alt="logo" />
        <p className="text-dark-teal-2 font-mono font-medium leading-6 text-xl mx-4 my-4">
          DASHBOARD
        </p>
      </nav>
      <div className="bg-greyscale-white h-[79px] text-dark-teal-2 font-mono font-medium leading-[36.8px] text-[32px] flex items-center pl-12">
        BTC ADDRESS HERE
      </div>
      <div className="bg-[#F0F1F1] py-4">
        <p className="text-dark-teal-2 font-mono text-xl font-medium leading-6 pl-4">
          QUICK ACTIONS
        </p>
      </div>
      <div className="flex flex-row">
        <div>
          <button className="text-dark-teal-main font-mono font-normal text-xl leading-6 border-[1px] border-dark-teal-main rounded  px-8 text-start w-full h-[60px]">
            ADD BTC ADDRESS
          </button>
        </div>
        <div className="text-black">DIOLOG GOES HERE</div>
      </div>
    </section>
  );
};

export default Dashboard;
