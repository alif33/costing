import { BiMoney, BiTargetLock } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { FaEuroSign, FaUsers } from "react-icons/fa6";
import { LiaTransgenderSolid } from "react-icons/lia";
import { MdWork } from "react-icons/md";
import { TbRectangle, TbRectangleFilled } from "react-icons/tb";

export default function Segmentation() {
  return (
    <div className="shadow-lg pt-5">
      <div className="flex items-center gap-3 bg-[#6239BD] text-white py-4 ps-6 rounded-t-md">
        <span>i</span>
        <h1 className="font-semibold">SEGMENTATION CRITERIA</h1>
        <span className="text-sm">Define your selection criteria below</span>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 ps-6 pt-6">
        <button className="flex items-center gap-1 px-4 py-2 text-white text-sm bg-[#74C5DA] rounded">
          <LiaTransgenderSolid size={23} />
          <span>Genders</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <FaBirthdayCake size={23} />
          <span>Age groups</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <FaEuroSign size={23} />
          <span>Income (CSP)</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <BsBuildingsFill size={22} />
          <span>Habitat</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <FaUsers size={22} />
          <span>Family</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <BiTargetLock size={22} />
          <span>Hobbies</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <MdWork size={22} />
          <span>Occupations</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <BiMoney size={22} />
          <span>Texation</span>
        </button>
      </div>
      <p className="text-[#6C7293] pt-5 ps-6">List of available genders:</p>
      <div className="flex flex-col lg:flex-row justify-start lg:gap-40 items-center ps-10 pt-3">
        <div className="flex items-center gap-7">
          <span>btn</span>
          <span>Men</span>
        </div>
        <div className="flex items-center gap-7">
          <span>btn</span>
          <span>Women</span>
        </div>
      </div>
      <p className="text-[#6C7293] pt-5 ps-6">
        You can choose one or more genders
      </p>
      <div className="flex items-center gap-10 ps-10 pt-3 pb-10">
        <button className="flex items-center gap-2 hover:rounded-full hover:shadow-lg px-5 py-2">
          <TbRectangleFilled size={23} />
          Check all
        </button>
        <button className="flex items-center gap-2 hover:rounded-full hover:shadow-lg px-5 py-2">
          <TbRectangle size={23} />
          Uncheck all
        </button>
      </div>
    </div>
  );
}
