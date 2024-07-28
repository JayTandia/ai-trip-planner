import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mb-3'>Hotels Recommedations</h2>

        <div className='grid grid-cols-4 gap-5'>
            {trip?.tripData?.hotel_options?.map((hotel, index)=>(
                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.name+','+hotel?.address} target='_blank'>
                <div className='cursor-pointer hover:scale-105 transition-all'>
                    <img className='rounded-xl' src='/placeholder.jpg' />
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium'>{hotel?.name}</h2>
                        <h2 className='text-xs text-gray-500'>📍 {hotel?.address}</h2>
                        <h2 className='text-sm'>💰 {hotel?.price}</h2>
                        <h2 className='text-sm'>⭐ {hotel?.ratings} stars</h2>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels