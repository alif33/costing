import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:ps-14 lg:pr-7">
        <Layout />
      </div>
    </div>
  );
}
