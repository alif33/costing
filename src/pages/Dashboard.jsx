export default function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-2 min-h-screen overflow-y-hidden">
            <div className="h-16">
                <img
                    width={90}
                    height={40}
                    className="block pt-3 pl-3"
                    src="/images/logo.png"
                />
            </div>
            <div className="sidebar-scroll">
                <ul>
                    <li>name</li>
                    <li>name</li>
                 
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                    <li>name</li>
                </ul>
            </div>
            

        </div>
        <div className="col-span-10"></div>
      </div>
    </div>
  );
}