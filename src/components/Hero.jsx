import Image from "next/image";
import { Outfit } from "next/font/google";
import { RiAlignRight, RiArrowRightLine } from "react-icons/ri";

const outfit = Outfit({
       variable: '-font-outfit',
       subsets: ['latin'],
       weight: '700'
})

const Hero = () => {
       return (
              <main className="relative flex flex-col justify-center items-center h-fit md:h-fit lg:h-[80vh] px-1 z-10">
                     <div className="relative lg:absolute lg:bottom-0 lg:-left-20 -z-10">
                            <Image src="/images/study-boy.png" width={500} height={500} alt="image" />
                     </div>
                     <div className="w-screen px-10 lg:w-2/3 flex flex-col justify-center items-center text-center my-8 md:my-0 xl:my-5 z-20">

                            <h1 className={`${outfit.className} text-3xl lg:text-5xl xxl:text-6xl text-gray-900`}>
                                   Achieve Your Academic Goals with <span className="text-blue-600">Study Point Institute </span>(SPI)~
                            </h1>
                            <p className={`text-sm md:text-lg xxl:text-2xl text-gray-800 mt-6 leading-6 px-4`}>
                                   Unlock Your Potential and Achieve Academic Excellence with Personalized Offline Tuition Classes from <span className="underline">Study Point Institute</span>, Where Learning Comes to Life
                            </p>
                            <div className="mt-6 flex flex-wrap justify-cetner items-center">
                                   <button className="w-full sm:w-fit px-6 py-3 bg-primary m-2 rounded text-white border border-transparent hover:border-primary hover:text-primary hover:bg-transparent duration-200 font-bold flex justify-center items-center group">
                                          <span className="mr-4">About Us</span><RiArrowRightLine className="group-hover:fill-primary" size={20} color="white" />
                                   </button>
                                   <button className="w-full sm:w-fit px-8 py-3 bg-transparent m-2 rounded text-blue-500 border border-blue-500 duration-200 font-bold">
                                          contact Us
                                   </button>
                            </div>

                     </div>
                     <div className="hidden xl:block absolute bottom-0 -right-28 -z-50">
                            <Image src="/images/tree.png" width={600} height={600} alt="image" />
                     </div>
              </main>
       )
}

export default Hero