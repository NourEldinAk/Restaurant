import MainPage from "@/components/Home/MainPage";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <MainPage/>
   <div className="homepage  absolute  top-0 left-0 w-full z-[-1]"
   >
    {/* <Image
    className="opacity-50"
    src="/slider-1.jpeg"
    alt="slider-pic"
    width={1000}
    height={1000}
    style={{
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height:'100%',
      width:'100%'
    }}
    
    >
    </Image> */}
   </div>
    </>
  );
}
