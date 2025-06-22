import { Check, Star } from 'lucide-react'
import React from 'react'

interface UserReviewProps {
    message: string[],
    name: string
    icon: string,
}

const UserReview = ({message, name, icon} : UserReviewProps) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-[#06923E] fill-[#06923E]" />
                <Star className="h-5 w-5 text-[#06923E] fill-[#06923E]" />
                <Star className="h-5 w-5 text-[#06923E] fill-[#06923E]" />
                <Star className="h-5 w-5 text-[#06923E] fill-[#06923E]" />
                <Star className="h-5 w-5 text-[#06923E] fill-[#06923E]" />
              </div>
              <div className="text-lg leading-8">
                <p>
                    {message[0]}
                    <span className='p-0.5 bg-[#212121] text-white'>
                        {message[1]}
                    </span>
                    {message[2]}
                </p>
              </div>
              <div className="flex gap-4 mt-12">
                <img 
                  className="rounded-full h-12 w-12 object-cover"
                  src={icon}
                  alt='user'
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">{name}</p>
                <div className="flex gap-1.5 items-center text-[#212121]">
                  <Check  className="h-4 w-4 stroke-[3px] text-[#06923E]"/>
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
  )
}

export default UserReview