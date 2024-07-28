import React from 'react'
import { Button } from "@/components/ui/button"
import { IoIosSend } from "react-icons/io";

function InfoSection({trip}) {
  return (
    <div>
        <img className='w-full h-[340px] object-cover rounded' src='/placeholder.jpg' />

        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2 my-5'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>💰 {trip?.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>🥂 No. Of Travelers : {trip?.userSelection?.noOfPeoples}</h2>
                </div>
                
            </div>

            <Button><IoIosSend /></Button>
        </div>
        
    </div>
  )
}

export default InfoSection