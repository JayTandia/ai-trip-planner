import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { SelectBudgetOptions, SelectTravelesList } from '../constants/options'
import { Button } from "@/components/ui/button"

function CreateTrip() {

  const [place, setPlace] = useState()
  const [formData, setFormData] =useState([])
  const handleInputChange = (name,value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(()=>{
    console.log(formData)
  },[formData])

  return (
    <div className='mt-10 px-72'>

      <h2 className='font-bold text-3xl'>Tell us your travel preference 🏕️🌴</h2>

      <p className='text-gray-500 text-xl mt-3'>Just provide some basic information, and out trip planner will generate a customized itinerary based on your preference</p>

      <div className='mt-16 flex flex-col gap-6'>

        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <Input onChange={(e)=>handleInputChange('location',e.target.value)} 
           /*selectProps={{
            onChange: (v)=>{setPlace(v); handleInputChange('location',v)} 
          }} */ placeholder={'Ex. Las Vegas, Nevada, USA'}/>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
          <Input onChange={(e)=>handleInputChange('noOfDays',e.target.value)} type='number' placeholder={'Ex. 3'}/>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectBudgetOptions.map((item,index)=>(
                <div key={index}
                onClick={()=>handleInputChange('budget',item.title)} 
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-lg border-black'}`}>
                  <h2 className='text-4xl mb-2'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan to travel with?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectTravelesList.map((item,index)=>(
                <div key={index}
                onClick={()=>handleInputChange('noOfPeoples',item.people)} 
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.noOfPeoples==item.people&&'shadow-lg border-black'}`}>
                  <h2 className='text-4xl mb-2'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
              ))}
          </div>
        </div>

        <div className='my-10 flex justify-end'>
          <Button>Generate Trip with AI</Button>
        </div>

      </div>

    </div>
  )
}

export default CreateTrip