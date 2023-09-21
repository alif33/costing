import { AiOutlineCheck } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { FaCalculator, FaFilter, FaShoppingCart, FaTags } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

export default function Sidebar() {
  return (
    <div>
      <div className="px-5">
        <div className="flex gap-2 items-center text-[var(--nbviolet)] font-medium text-lg py-5">
          <BiTargetLock size={22} />
          <h1>YOUR TARGETING</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[#A0A5B2]">
            <div className="flex items-center ">
              <PiUsersThreeFill size={25} />
              <h2 className="font-semibold">Sheets</h2>
            </div>
            <span>Individuals (B2C)</span>
          </div>
          <h1 className="text-[#FFB822] font-semibold text-xl">0</h1>
        </div>
        <div className="py-4">
          <div className="border-t-[1px] border-dashed text-[#A0A5B2]"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[#A0A5B2]">
            <div className="flex items-center">
              <FaCalculator />
              <span className="font-semibold">Price</span>
            </div>
            <span>Discount:</span>
            <span>0%</span>
          </div>
          <div className="text-end text-[#0070C0] text-xl font-bold">
            {" "}
            <del>
              {" "}
              0 € excluding <br /> VAT
            </del>
          </div>
        </div>
        <div className="py-4">
          <div className="border-t-[1px] border-dashed text-[#A0A5B2]"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[#A0A5B2]">
            <div className="flex items-center">
              <FaShoppingCart />
              <span className="font-semibold">Total</span>
            </div>
            <span>Without</span>
            <span>texes</span>
          </div>
          <div className="text-end text-[#0070C0] text-xl font-bold">
            0 € excluding <br /> VAT
          </div>
        </div>
        <div className="pt-4">
          <div className="border-t-[1px] border-dashed text-[#A0A5B2]"></div>
        </div>
        <div className="flex justify-center pt-2">
          <span className="text-sm text-[#A0A5B2] px-4 py-3 bg-[#F9F9FC]">
            i.e. a CPM of €0.00 excluding tax
          </span>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button className="text-xs flex gap-1 items-center text-[#0070C0] border-[1px] border-solid border-[#A0A5B2] px-20 py-[6px] hover:bg-[#f0eeee] rounded-sm">
          <FaTags size={18} />
          Show Price Detail...
        </button>
      </div>
      <div className="flex justify-center">
        <button className="text-xs flex gap-1 items-center text-white bg-[#6239BD] px-[72px] py-2 hover:bg-[#0070C0] rounded-sm">
          <FaFilter size={15} />
          Set a maximum value...
        </button>
      </div>
      <div className="flex justify-center pt-6 pb-2">
        <button className="text-xs flex gap-1 items-center text-black bg-[#FFB822] px-[60px] py-3 rounded-sm">
          <AiOutlineCheck size={16} />
          VALIDATE THIS TARGETING
        </button>
      </div>
    </div>
  );
}
