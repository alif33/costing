import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";

export default function DashbordOpen() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  return (
    <div className="">
      <div
        className="flex justify-start items-center gap-3 pb-3"
        onClick={() => setDashboardOpen(!dashboardOpen)}
      >
        <AiFillAppstore size={25} />
        <h1>Dashboards</h1>
      </div>
      <div className={`${dashboardOpen ? "block" : "hidden"} pt-4`}>
        <ul className="list-disc ps-8 text-base">
          <li>Default</li>
          <li className="py-4">eCommerce</li>
          <li>Projects</li>
          <li className="py-4">Online Courses</li>
          <li>Marketing</li>
          <li className="py-4">Bidding</li>
          <li>POS System</li>
          <li className="py-4">Call Center</li>
          <li>Logistics</li>
          <li className="py-4">Website Analytics</li>
          <li>Finance Performance</li>
          <li className="py-4">Store Analytics</li>
          <li>Social</li>
          <li className="py-4">Delievery</li>
          <li>Crypto</li>
          <li className="py-4">School</li>
          <li>Podcast</li>
          <li className="py-4">Landing</li>
        </ul>
      </div>
    </div>
  );
}
