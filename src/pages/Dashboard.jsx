import DashboardNavbar from "../components/DashboardNavbar";
import DashboardProfile from "../components/DashboardProfile";
import DashbordOpen from "../components/DashbordOpen";

export default function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-2 text-white min-h-screen bg-[#131313] overflow-y-hidden py-6">
          <div className="h-16">
            <img
              width={90}
              height={40}
              className="block pt-3 pl-3"
              src="/images/logo.png"
            />
          </div>
          <div className="border-t-[1px] border-dashed border-[#393945]"></div>
          <div className="sidebar-scroll pt-5 ps-5 cursor-pointer">
            <DashbordOpen />
            <span className="">PAGES</span>
            <DashboardProfile />
          </div>
        </div>
        <div className="col-span-10 px-8">
          <div className="">
            <DashboardNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
