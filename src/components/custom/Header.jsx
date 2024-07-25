import React from 'react'
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center px-16'>

      <div className='flex items-center gap-4 font-bold text-xl text-[#fb4f39]'>
        <img src='src/assets/logo.svg'/>
        <h1>AI Trip Planner</h1>
      </div>
      
      <Button>Sign In</Button>
    </div>
  )
}

export default Header