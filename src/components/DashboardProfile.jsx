import { useState } from "react";
import { BiSolidUserAccount } from "react-icons/bi";

export default function DashboardProfile() {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div>
      <div
        className="flex justify-start items-center gap-3 pt-5"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <BiSolidUserAccount size={25} />
        <h1>User Profile</h1>
      </div>
      <div className={`${profileOpen ? "block" : "hidden"} pt-4`}>
        <ul className="list-disc ps-8 text-base">
          <li>Overview</li>
          <li className="py-4">Projects</li>
          <li>Campaigns</li>
          <li className="py-4">Documents</li>
          <li>Followers</li>
          <li className="py-4">Activity</li>
        </ul>
      </div>
    </div>
  );
}
