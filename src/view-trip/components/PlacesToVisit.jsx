import React from 'react'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg mb-3'>Places to visit</h2>

        <div>
            {trip?.tripData?.itinerary.map((item,index)=>(
                <div>
                    <h2>{item.day}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit