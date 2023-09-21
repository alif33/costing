import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="ps-14 pr-7">
        <Layout />
      </div>
    </div>
  );
}
