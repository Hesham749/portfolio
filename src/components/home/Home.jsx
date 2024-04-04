import React from 'react'
import Social from './Social'
import HomeContent from './HomeContent'
import Image from './Image'


export default function Home() {
  return (
    <main>
      <section id='home ' className='container mt-20 mb-40'>
      <div className="flex ">
      <Social />
      <div className="flex items-center md:justify-center  md:flex-row flex-col gap-10">
        <HomeContent />
        <Image />
      </div>
      </div>

      </section>

    </main>
  )
}
