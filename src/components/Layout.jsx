import { BiTargetLock } from "react-icons/bi";
import LayoutFiles from "./LayoutFiles";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="max-h-[150px] flex items-center py-3 gap-4 w-1/2">
          <h1 className="text-[20px]">Targeting</h1>
          <BiTargetLock size={20} />
          <span className="text-[var(--nbgrisfonce)]">Individuals (B2C)</span>
        </div>
        <LayoutFiles />
      </div>
      <div className="col-span-3 bg-white shadow-xl">
        <Sidebar />
      </div>
    </div>
  );
}
