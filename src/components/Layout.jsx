import { BiTargetLock } from "react-icons/bi";
import GeoGraphicCriteria from "./GeoGraphicCriteria";
import LayoutFiles from "./LayoutFiles";
import Segmentation from "./Segmentation";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="grid grid-cols-1 mx-auto lg:grid-cols-12 gap-6">
      <div className="lg:col-span-9">
        <div className="max-h-[150px] flex items-center py-3 gap-4 w-1/2">
          <h1 className="text-[20px]">Targeting</h1>
          <BiTargetLock size={20} />
          <span className="text-[var(--nbgrisfonce)]">Individuals (B2C)</span>
        </div>
        <LayoutFiles />
        <GeoGraphicCriteria />
        <Segmentation />
      </div>
      <div className="lg:col-span-3 hidden lg:block bg-white shadow-xl">
        <Sidebar />
      </div>
    </div>
  );
}
