export default function LayoutFiles() {
  return (
    <div className="shadow-lg pt-2">
      <div className="flex items-center gap-3 bg-[#6239BD] text-white py-4 ps-6 rounded-t-md">
        <span>i</span>
        <h1 className="font-semibold">LAYOUT OF FILES</h1>
        <span className="text-sm">
          Choose between renting or purchasing below
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
        <div className="flex flex-col items-center text-[#6C7293] mt-12 border-r-[1px] rounded-[10px]">
          <h1 className="text-3xl font-black">Rental</h1>
          <p className="pt-3 pb-3">I would like to rent the files</p>
          <button className="text-white bg-[#6239BD] px-11 rounded-full py-3 hover:bg-[#0070C0]">
            Choose rental
          </button>
        </div>
        <div className="flex flex-col items-center text-[#6C7293] mt-12">
          <h1 className="text-3xl font-black">Purchase</h1>
          <p className="pt-3 pb-3">I would like to buy the sheets</p>
          <button className="text-white bg-[#6239BD] px-11 rounded-full py-3 hover:bg-[#0070C0]">
            Choose purchase
          </button>
        </div>
      </div>
    </div>
  );
}
