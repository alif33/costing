import { AiFillAppstore } from "react-icons/ai";
import { BiMessageSquareDetail, BiNotification, BiSun } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";

export default function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="hidden lg:block">
        <ul className="font-semibold text-base flex items-center gap-8">
          <li className="text-[#3E97FF]">Dashboards</li>
          <li className="text-gray-600">Pages</li>
          <li className="text-gray-600">Apps</li>
          <li className="text-gray-600">Layouts</li>
          <li className="text-gray-600">Help</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <FiSearch size={27} />
        <TiMessages size={27} />
        <BiNotification size={27} />
        <BiMessageSquareDetail size={27} />
        <AiFillAppstore size={27} />
        <BiSun />
        <div className="max-w-[35px]">
          <img src="/images/dp.jpg" className="rounded w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
