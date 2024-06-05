import logo from "@/public/images/Logo.svg";
import Image from "next/image";
import viewIcon from "@/public/images/view-icon.svg";
import btcIcon from "@/public/images/btc-icon.svg";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import radarImg from "@/public/images/radar.png";

export default async function () {
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
        <div className="bg-[#F0F1F1] py-4 border-t-2 border-greyscale-6 border-r-2 border-b-2 max-w-[420px] w-full">
          <p className="text-dark-teal-2 font-mono text-xl font-medium leading-6 mx-4">
            QUICK ACTIONS
          </p>
        </div>
        <div className="bg-[#F0F1F1] py-4 border-t-2 border-greyscale-6 w-full border-b-2"></div>
      </div>
      <div className="flex flex-row w-full">
        <div className="border-r-2 border-greyscale-6 max-w-[420px] w-full">
          <AlertDialogDemo />
        </div>
        <div className="w-3/4 mt-6 flex flex-col gap-2 h-screen justify-between">
          <div className="h-full w-full flex flex-col">
            <div className="h-[50px] bg-greyscale-2 rounded-t border border-greyscale-6 mx-4">
              <div className="font-mono text-xl font-medium leading-6 p-3 ml-2">
                HOLDINGS
              </div>
              <div className="bg-greyscale-white h-[393px] border border-greyscale-6 rounded-b"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="h-[60px]" variant={"defaultMain"} size={"md"}>
          <Image src={btcIcon} alt="btc icon" />
          ADD BTC ADDRESS
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogCancel className="flex flex-row justify-end text-xl">
            x
          </AlertDialogCancel>
          <AlertDialogTitle className="bg-[#F0F1F1] border border-t-greyscale-6 border-b-greyscale-6 p-8 w-full h-[50px] flex items-center text-dark-teal-2">
            ADD BTC ADDRESS
          </AlertDialogTitle>
          <div className="flex flex-row px-8 gap-20 py-4">
            <div className="flex flex-col gap-8">
              <AlertDialogDescription>
                Enter the address below to add to your vault
              </AlertDialogDescription>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-mono font-medium leading-[21.6px] tracking-[-0.09px] text-[#001E20]">
                  ADDRESS
                </p>
                <Input placeholder="Enter address here" />
                <p className="text-[#00474B] font-mono text-base font-normal leading-[19.2px] tracking-[-0.08px]">
                  46 characters maximum
                </p>
              </div>
            </div>
            <div className="border-l border-greyscale-6 ">
              <Image
                src={radarImg}
                alt="radar img"
                className="w-[289px] h-[288px] m-14"
              />
            </div>
          </div>
          <div className="px-8 pb-8">
            <AlertDialogAction>Next</AlertDialogAction>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
