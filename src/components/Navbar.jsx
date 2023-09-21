import { useState } from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import { MdOutlineListAlt } from "react-icons/md";
import { RiArrowDropDownLine, RiLockLine, RiUser2Fill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center px-10 h-[70px] shadow-lg">
      <div className="flex justify-between items-center">
        <img src="/images/logo_comptage.png" alt="" />
        <div className="ps-12">
          <button
            onClick={toggleDropdown}
            className={`px-5 py-2 bg-[var(--nbbleu)] rounded-[4px] text-white hover:bg-[var(--nbviolet)]  flex items-center gap-3 ${
              isOpen && "bg-[var(--nbviolet)]"
            }`}
          >
            <div className="">
              <FaUserAlt />
            </div>
            <span>Individuals (B2C)</span>
            <div className="">
              <RiArrowDropDownLine size={25} />
            </div>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-[280px] space-y-2 px-4 py-5 h-[190px] bg-white border border-gray-300 rounded-md shadow-lg">
              <a
                href="#"
                className="px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)] flex items-center gap-3"
              >
                <FaUserAlt /> Individuals (B2C)
              </a>
              <a
                href="#"
                className="px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)] flex items-center gap-3"
              >
                <FaUserCog size={23} />
                Professionals (B2B)
              </a>
              <a
                href="#"
                className=" flex items-center gap-3 px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)]"
              >
                <RiUser2Fill size={23} />
                Decision makers (B2B)
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center gap-1">
          <div className="cursor-pointer hover:bg-[var(--RiLockLine)] p-1">
            <MdOutlineListAlt size={30} />
          </div>
          <span>Summary</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="cursor-pointer hover:bg-[var(--RiLockLine)] p-1">
            <BsClipboard2Data size={24} />
          </div>
          <span>Ventilation</span>
        </div>
        <div className="bg-[var(--nbjaune)] px-4 py-2 rounded-full flex items-center gap-[5px]">
          <RiLockLine size={20} /> My ZECIBLE account
        </div>
      </div>
    </div>
  );
}
