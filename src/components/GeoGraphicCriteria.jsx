import { BiCarousel } from "react-icons/bi";
import { BsSignpost2Fill } from "react-icons/bs";
import { CiLollipop } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcCursor } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { PiSignpostLight } from "react-icons/pi";

export default function GeoGraphicCriteria() {
  return (
    <div className="shadow-lg pt-6">
      <div className="flex items-center gap-3 bg-[#6239BD] text-white py-4 ps-5 rounded-t-md">
        <MdLocationPin size={23} />
        <h1 className="font-semibold">GEOGRAPHICAL CRITERIA</h1>
        <span className="text-sm">Define your geographic criteria below</span>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-1 ps-6 pt-6">
        <button className="flex items-center gap-1 px-4 py-2 text-white text-sm bg-[#74C5DA] rounded">
          <MdLocationPin size={20} />
          <span>Regions</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <BiCarousel size={20} />
          <span>Former regions</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <FaMapLocationDot size={20} />
          <span>Deparments</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <BsSignpost2Fill size={20} />
          <span>Cities</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <PiSignpostLight size={20} />
          <span>Postcodes</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <MdLocationPin size={20} />
          <span>INSEE codes</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <MdLocationPin size={20} />
          <span>IRIS codes</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <CiLollipop size={20} />
          <span>HEXAVIA codes</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <CiLollipop size={20} />
          <span>HEXACLE codes</span>
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-[#6C7293] text-sm rounded">
          <GrMapLocation size={18} />
          <span>Geolocation</span>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6 pt-5 pb-8">
        <div className="">map</div>
        <div className="flex flex-col gap-2">
          <div className="">
            <label className="text-[#6C7293]">Select:</label>
            <div className="flex items-center border-[1px] rounded border-[#6C7293]">
              <div className="py-2 px-3 border-r-[1px] border-solid border-[#6C7293] bg-[#FFFFFF]">
                <FcCursor size={25} />
              </div>
              <input type="text" className="w-full outline-none py-2 px-3" />
            </div>
            <label className="text-xs text-[#6C7293]">
              You can select one or more regions
            </label>
          </div>
          <div className="">
            <label className="text-[#6C7293]">To research :</label>
            <div className="flex items-center border-[1px] rounded border-[#6C7293]">
              <div className="py-2 px-3 border-r-[1px] border-solid border-[#6C7293] bg-[#FFFFFF]">
                <FcCursor size={25} />
              </div>
              <input type="text" className="w-full outline-none py-2 px-3" />
            </div>
            <label className="text-xs text-[#6C7293]">
              You can search for one or more regions
            </label>
          </div>
          <div className="">
            <label className="text-[#6C7293]">Copy paste :</label>
            <div className="flex items-center border-[1px] rounded border-[#6C7293]">
              <div className="py-2 px-3 border-r-[1px] border-solid border-[#6C7293] bg-[#FFFFFF]">
                <FcCursor size={25} />
              </div>
              <input type="text" className="w-full outline-none py-2 px-3" />
            </div>
            <label className="text-xs text-[#6C7293]">
              You can copy and paste one or more regions (1000 maximum)
            </label>
          </div>
          <div className="">
            <label className="text-[#6C7293]">Send a file :</label>
            <div className="flex items-center border-[1px] rounded border-[#6C7293]">
              <div className="py-2 px-3 border-r-[1px] border-solid border-[#6C7293] bg-[#FFFFFF]">
                <FcCursor size={25} />
              </div>
              <input type="text" className="w-full outline-none py-2 px-3" />
            </div>
            <label className="text-xs text-[#6C7293]">
              You can send a file listing your regions
            </label>
          </div>
          <div className="">
            <label className="text-[#6C7293]">Include or exclude:</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-sm text-[#6C7293]">
                  Include these regions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-sm text-[#6C7293]">
                  Exclude these regions
                </span>
              </div>
            </div>
            <label className="text-xs text-[#6C7293]">
              You can include or exclude the selected region(s)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
