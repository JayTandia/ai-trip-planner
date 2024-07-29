import React from 'react'
import { Link } from 'react-router-dom'

function UserTripCardItem({trip}) {
  return (
    <div className='hover:scale-105 transition-all'>
    <Link to={'/view-trip'+trip?.id}>
        <img  className='object-cover rounded-xl' src='/placeholder.jpg' />

        <div>
            <h2 className='font-bold mt-2 text-lg'>{trip?.userSelection?.location}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </Link>
    </div>
  )
}

export default UserTripCardItem