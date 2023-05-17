import Hading from "@/components/Hading"
import WWHCard from "@/components/cards/WWHCard"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import CourseCard from "@/components/cards/CourseCard"
import TeachersCard from "@/components/cards/TeachersCard"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
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
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="space-x-6 py-10"
            itemClass="p-5">
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
        <div className="container relative p-5 mt-14">
          <Carousel swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="space-x-6 py-10"
            itemClass="p-5">
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="deepak yadav" subject="Director" />
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Thalesh Sir" subject="Director" />
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Sorubh Sir" subject="Director" />
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Rajeev Sir" subject="Director" />
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Ham Bhi Sir" subject="Director" />
            <TeachersCard src="/images/Teachers/deepak_sir.jpg" name="Tum Bhi Sir" subject="Director" />
          </Carousel>;
        </div>
      </section>
      {/* {Teachers Section End} */}

      <Footer />
    </>
  )
}

export default Home