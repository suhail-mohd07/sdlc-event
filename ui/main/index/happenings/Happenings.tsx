import Cards from '@/ui/sub/index/happenings/Cards'
import Mhi from '@/ui/sub/index/svgs/happenings/Mhi'
import React from 'react'

function Happenings() {
  const CardData = [
    {
      img: "/images/card-pic.jpg",
      title: "Title",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
    {
      img: "/images/card-pic.jpg",
      title: "Heading",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
    {
      img: "/images/card-pic.jpg",
      title: "Title",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
    {
      img: "/images/card-pic.jpg",
      title: "Title",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
    {
      img: "/images/card-pic.jpg",
      title: "Title",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
    {
      img: "/images/card-pic.jpg",
      title: "Title",
      content:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi ex optio inventore, ipsum, quam dolor tempore hic quidem architecto, placeat quod asperiores nesciunt nam. Minima quam totam libero eveniet!",
    },
  ];
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-auto flex flex-col items-center justify-center py-10'>
        <Mhi /> 
          <div className="w-full h-auto md:flex mt-20 ">
          {CardData.slice(0, 3).map((data, index) => (
            <Cards key={index} content={data.content} img={data.img} title={data.title}/>
        ))}
        </div> 
        <div className="w-full h-auto md:flex md:mt-0 mt-[-1rem] ">
          {CardData.slice(3).map((data, index) => (
            <Cards key={index} content={data.content} img={data.img} title={data.title} />
        ))}
        </div> 
      </div>
    </div>
  )
}

export default Happenings