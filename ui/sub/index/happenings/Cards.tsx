import React from 'react'

interface Props{
    img:string 
    content:string
    title:string
}

function Cards({img,content,title}:Props) {
    return (
        <div data-aos="flip-left" className="md:w-1/3 min-h-[50vh] border m-5 mx-10 p-2 cursor-pointer flex flex-col items-center rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
            <img src={img} className='relative rounded-lg w-full h-[80%] object-cover' alt="" />
            <h1 className='text-white absolute top-[40%] rounded-md border border-black p-1 ' style={{backgroundColor:'rgba(0, 0, 0, 0.721)'}} >{title}</h1>
            <p className=" w-[90%] p-2 rounded-lg absolute md:bottom-2 bottom-5 text-sm  bg-gray-400 text-black text-[14px] text-justify hover:text-gray-900 transition-all duration-200">{content}</p>
        </div>)
}

export default Cards