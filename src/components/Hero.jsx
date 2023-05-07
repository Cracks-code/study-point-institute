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
              <main className="relative h-fit py-20 lg:py-1 lg:h-[40rem] w-screen z-10 bg-primary">
                     <div className="container h-full flex flex-col justify-center items-center">

                          {/* {  <div className="relative lg:absolute lg:top-0 lg:left-0 -z-10">
                                   <Image src="/images/study-boy.png" width={500} height={500} alt="image" />
                            </div>} */}
                            <div className="w-screen px-10 lg:w-2/3 flex flex-col justify-center items-center text-center my-8 md:my-0 xl:my-5 z-20">

                                   <h1 className={`${outfit.className} text-3xl lg:text-5xl xxl:text-6xl text-white`}>
                                          Achieve Your Academic Goals with <span className="text-orange-500">Study Point Institute </span>(SPI)~
                                   </h1>
                                   <p className={`text-sm md:text-lg xxl:text-2xl text-white mt-6 leading-6 px-4`}>
                                          Unlock Your Potential and Achieve Academic Excellence with Personalized Offline Tuition Classes from <span className="underline">Study Point Institute</span>, Where Learning Comes to Life
                                   </p>
                                   <div className="mt-6 flex flex-wrap justify-cetner items-center">
                                          <button className="w-full sm:w-fit px-6 py-3 bg-primary m-2 rounded text-white border border-transparent hover:border-primary hover:text-primary hover:bg-white duration-200 font-bold flex justify-center items-center group">
                                                 <span className="mr-4">About Us</span><RiArrowRightLine className="group-hover:fill-primary" size={20} color="white" />
                                          </button>
                                          <button className="w-full sm:w-fit px-8 py-3 bg-transparent m-2 rounded text-orange-400 border border-orange-400 duration-200 font-bold">
                                                 contact Us
                                          </button>
                                   </div>

                            </div>
                     </div>
              </main>
       )
}

export default Hero