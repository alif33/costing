import { useState } from "react";

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
            className={`px-5 py-2 bg-[var(--nbbleu)] rounded-[4px] text-white hover:bg-[var(--nbviolet)] ${
              isOpen && "bg-[var(--nbviolet)]"
            }`}
          >
            i Individuals (B2C) i
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-[280px] space-y-2 px-4 py-5 h-[190px] bg-white border border-gray-300 rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)]"
              >
                i Individuals (B2C) i
              </a>
              <a
                href="#"
                className="block px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)]"
              >
                Professionals (B2B)
              </a>
              <a
                href="#"
                className="block px-4 py-2 font-semibold text-[var(--nbgrisfonce)] hover:text-[var(--nbbleu)]"
              >
                Item 3
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex gap-3">
          icon
          <span>Summary</span>
        </div>
        <div className="flex gap-3">
          icon
          <span>Ventilation</span>
        </div>
        <div className="bg-[var(--nbjaune)] px-4 py-2 rounded-full">
          icon My ZECIBLE account
        </div>
      </div>
    </div>
  );
}
