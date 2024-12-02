import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="w-full bg-banner-bg bg-center">
      <div className="w-full bg-black opacity-75 text-white">
        <Navbar/>
        <Banner />
      </div>
      
    </main>
  );
}
