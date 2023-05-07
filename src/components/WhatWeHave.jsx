import React from 'react'
import Hading from './utils/Hading'
import WWHCard from './utils/WWHCard'


const WhatWeHave = () => {
  return (
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
  )
}

export default WhatWeHave