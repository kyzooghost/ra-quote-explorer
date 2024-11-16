import {Component as RamChart} from "@/components/ram";
import {Component as CPUChart} from "@/components/cpu";
import { Component as Processes } from "@/components/process";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="bg-cyan-300 flex flex-col flex-grow h-screen">
        <div className="w-full h-[55vh] bg-white grid grid-cols-2">
          <div className="flex flex-col">
            <h1 className="p-2 px-6">Memory usage</h1>
            <RamChart />
          </div>
          <div className="flex flex-col">
            <h1 className="p-2 px-6">CPU usage</h1>
            <CPUChart />
          </div>
        </div>
        <div className="w-full h-[45vh] bg-black p-2 flex flex-col gap-2 overflow-y-auto scrollbar-thin">
          <Processes />
        </div>
      </div>
    </div>
  );
}
