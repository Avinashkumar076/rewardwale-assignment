import React from 'react'
import Image from "next/image";

type CardProps = {
  title: string;
  desc: string;
};


function Card({ title, desc }: CardProps) {
  
  return (

    <div className="card w-full bg-white rounded-lg border">
      <div className="card-content p-4 h-auto">
        <div className="">
          <div className="flex">
            <div>
              <Image src="/ic2.png" alt="Card image" height={35} width={35} className="bg-black rounded-full" />
            </div>
            <div className="mx-3 my-1 font-semibold text-base md:text-lg lg:text-xl">
              {title}
            </div>
          </div>
          <div className="ml-12 text-sm md:text-base text-gray-500">
            {desc}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
