import Hading from "@/components/Hading"
import WWHCard from "@/components/cards/WWHCard"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import CourseCard from "@/components/cards/CourseCard"
import TeachersCard from "@/components/cards/TeachersCard"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import Link from "next/link"

import { MdOutlineFormatQuote } from "react-icons/md"
import TestinomialCard from "@/components/cards/TestinomialCard"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 200 },
    items: 1
  }
};

const Home = (props) => {
  return (
    <>
      <Hero />

      {/* {What We Have Section Start} */}
      <section className="mt-20 mb-10">
        <Hading hading="what we have" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum beatae, adipisci magnam est a ab quod cupiditate doloribus totam, quo consequatur esse! Fugiat." />
        <div className="container relative grid grid-cols-1 md:grid-cols-3 gap-3 px-5 mt-14">
          <WWHCard text="👨‍🎓 Top Level Education" />
          <WWHCard text="💰 low price" />
          <WWHCard text="🏃‍♂️ pysical activity" />
          <WWHCard text="👨‍🏫 top teachers" />
          <WWHCard text="📃 every week test" />
          <WWHCard text="📚 all type of course" />
        </div>
      </section>
      {/* {What We Have Section End} */}

      {/* {Our Courses Section Start} */}
      <section className="mt-20 mb-10">
        <Hading hading="Our Courses" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates culpa. Nihil voluptatum nemo reiciendis, tempora repellat ex natus quaerat!" />
        <div className="container relative px-5 mt-14">
          <Carousel swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={1000}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListclassName="space-x-5 py-10"
            itemclassName=" py-5">
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
            <CourseCard href="/courses/asdfasdfasdfasdf46asdf" src="/images/computer.jfif" name="Dca - computer" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis voluptatum ab. Cupiditate at accusamus dignissimos minus dicta expedita doloribus harum, ab omnis perferendis!" rating="⭐⭐⭐⭐⭐+1k" />
          </Carousel>
        </div>
      </section>
      {/* {Our Courses Section End} */}

      {/* {Teachers Section Start} */}
      <section className="mt-20 mb-10">
        <Hading hading="Meet With Our Teachers" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates culpa. Nihil voluptatum nemo reiciendis, tempora repellat ex natus quaerat!" />
        <div className="container flex flex-wrap mx-auto mt-10">
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="deepak yadav" subject="Director" />
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Thalesh Sir" subject="Director" />
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Sorubh Sir" subject="Director" />
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Rajeev Sir" subject="Director" />
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Ham Bhi Sir" subject="Director" />
          <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Tum Bhi Sir" subject="Director" />
        </div>
        <button className="flex mx-auto mt-10 text-white hover:text-primary bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg hover:border-b-2 border-b-primary duration-500">Explore Other</button>
      </section>
      {/* {Teachers Section End} */}

      {/* {Our Libraries Section Start} */}
      <section className="text-gray-600 body-font mt-20 mb-10">
        <Hading hading="Our Libraries" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates culpa. Nihil voluptatum nemo reiciendis, tempora repellat ex natus quaerat!" />

        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <Image className="flex-shrink-0 sm:mr-10" src="/images/Libraries/eklavya-library2" width={400} height={500} />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Eklavya Library</h2>
              <p className="leading-relaxed text-base">8C23+RWX, Braj Colony, Murli Nagar, Karond, Bhopal, Madhya Pradesh 462038</p>
              <Link href="/" className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More</Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row-reverse flex-col">
            <Image className="flex-shrink-0 sm:mr-10" src="/images/Libraries/eklavya-library2" width={400} height={500} />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Eklavya Library</h2>
              <p className="leading-relaxed text-base">8C23+RWX, Braj Colony, Murli Nagar, Karond, Bhopal, Madhya Pradesh 462038</p>
              <Link href="/" className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More</Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <Image className="flex-shrink-0 sm:mr-10" src="/images/Libraries/eklavya-library2" width={400} height={500} />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Eklavya Library</h2>
              <p className="leading-relaxed text-base">8C23+RWX, Braj Colony, Murli Nagar, Karond, Bhopal, Madhya Pradesh 462038</p>
              <Link href="/" className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More</Link>
            </div>
          </div>
          <button className="flex mx-auto mt-10 text-white hover:text-primary bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg hover:border-b-2 border-b-primary duration-500">More About Libraries</button>
        </div>
      </section>
      {/* {Our Libraries Section End} */}

      {/* Testonomials Section Start */}
      <section className="text-gray-600 body-font mt-10 mb-10">
        <Hading hading="What Our Student Says" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates culpa. Nihil voluptatum nemo reiciendis, tempora repellat ex natus" />
        <div className="container relative p-5 mt-14">
          <Carousel swipeable={true}
            draggable={true}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1280 },
                items: 2
              },
              tablet: {
                breakpoint: { max: 1024, min: 200 },
                items: 1
              }
            }}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={1000}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            itemclassName="py-5">
            <TestinomialCard name="Rajeev 😅" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum veniam dignissimos aliquam iusto accusantium temporibus autem, illo mollitia libero voluptates. Vero debitis doloremque placeat nostrum." />
            <TestinomialCard name="Rajeev 😅" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum veniam dignissimos aliquam iusto accusantium temporibus autem, illo mollitia libero voluptates. Vero debitis doloremque placeat nostrum." />
            <TestinomialCard name="Rajeev 😅" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum veniam dignissimos aliquam iusto accusantium temporibus autem, illo mollitia libero voluptates. Vero debitis doloremque placeat nostrum." />
            <TestinomialCard name="Rajeev 😅" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum veniam dignissimos aliquam iusto accusantium temporibus autem, illo mollitia libero voluptates. Vero debitis doloremque placeat nostrum." />
            <TestinomialCard name="Rajeev 😅" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum veniam dignissimos aliquam iusto accusantium temporibus autem, illo mollitia libero voluptates. Vero debitis doloremque placeat nostrum." />

          </Carousel>;
        </div>

      </section>
      {/* Testonomials Section End */}

      {/* Contact Us Section Start */}
      <section className="text-primary body-font ">
        <Hading hading="Contact Us" about_hading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates culpa. Nihil voluptatum nemo reiciendis, tempora repellat ex natus" />
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=study point institute in front of ANAND DAIRY, Karond Chouraha, Karond, Bhopal, Madhya Pradesh 462038&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"> 
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">Submit</button>
              <p className="text-xs text-gray-500 mt-3">Fill All Above Input And Click On Submite Button</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section End */}

      <Footer />

    </>
  )
}

export default Home
