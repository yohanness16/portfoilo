import { FloatingNav } from "@/component/ui/FloatingNav";
import Header from "../component/header";
import Grid from "@/component/Grid";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5  ">
      <div className="max-w-7xl w-full">
     <FloatingNav navItems={[
      {
        name: "Home",
        link: "/",
        icon: <FaHome/>
      }
     ]

     }/>
      <Header/>
      <Grid/>
      </div>
       
    </main>
  );
};
