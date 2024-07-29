import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center px-16'>

        <a href='/'>
        <div className='flex items-center gap-4 font-bold text-xl text-[#fb4f39]'>
          <img src='src/assets/logo.svg'/>
          <h1>AI Trip Planner</h1>
        </div>
        </a>

      <div className='flex gap-4'>
        <a href='/my-trips'>
          <Button className='rounded-full' variant='outline'>View All Trips</Button>
        </a>
        <a href='/create-trip'>
          <Button className='rounded-full' variant='outline'>+ Create New Trip</Button>
        </a>
      </div>
      
    </div>
  )
}

export default Header