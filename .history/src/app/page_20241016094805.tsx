import Image from "next/image";
import { HomePageComponent } from "@/components/home-page/home-page"
import Header from "@/components/home-page/Header";
import Footer  from "@/components/home-page/Footer"



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <header className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <Header/>

      </header>

      <HomePageComponent/>
      
      <footer className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      

      </footer>

      </main>


    </div>
  );
}
