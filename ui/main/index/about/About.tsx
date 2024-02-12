import React from 'react'

function About() {
  return (
    <div className='w-full h-auto flex flex-col'>
        <h1 data-aos="fade-up" data-aos-duration={3000} className='text-center font-bold text-[40px] md:text-[45px] bg-gradient-to-r from-red-500 via-purple-500 to-purple-800 text-transparent bg-clip-text '>About The Conference</h1>
        <div className='w-full h-auto md:flex md:p-20 p-5 justify-center items-center'>
            <img data-aos="flip-right" src="/images/sdlc.png" className='w-[500px] rounded-xl bg-slate-300 shadow-neon' alt="" />
            <p className='text-white text-justify md:pl-20 p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptas necessitatibus nemo sit debitis neque modi pariatur enim quae, dolorum, minus iure facere asperiores a, ad incidunt soluta quaerat in sequi sint. Obcaecati sit veniam aut adipisci quo animi at, et culpa temporibus explicabo commodi cumque, iusto dolorem numquam quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, necessitatibus ullam? Id aliquam ipsam tempora officiis possimus. Rerum, blanditiis, nulla molestias id veniam nemo ducimus reprehenderit quibusdam cupiditate magnam sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolorum doloribus natus. Optio eligendi incidunt vitae saepe recusandae praesentium obcaecati magnam aspernatur amet, ab provident, placeat facere distinctio quas maxime! </p>
        </div>
        <div className='w-full h-auto md:flex md:px-20 p-5 justify-center items-center'>
            <video src="/videos/coding.mp4" className='w-[600px] rounded-xl md:hidden block' loop muted autoPlay></video> 
            {/* | for SM device*/}           
            <p className='text-white text-justify md:pr-20 p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptas necessitatibus nemo sit debitis neque modi pariatur enim quae, dolorum, minus iure facere asperiores a, ad incidunt soluta quaerat in sequi sint. Obcaecati sit veniam aut adipisci quo animi at, et culpa temporibus explicabo commodi cumque, iusto dolorem numquam quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, necessitatibus ullam? Id aliquam ipsam tempora officiis possimus. Rerum, blanditiis, nulla molestias id veniam nemo ducimus reprehenderit quibusdam cupiditate magnam sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolorum doloribus natus. Optio eligendi incidunt vitae saepe recusandae praesentium obcaecati magnam aspernatur amet, ab provident, placeat facere distinctio quas maxime! </p>
            <video src="/videos/coding.mp4" className='w-[600px] rounded-xl md:block hidden' loop muted autoPlay></video>
        </div>
    </div>
  )
}

export default About