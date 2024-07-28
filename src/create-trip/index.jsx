import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '../constants/options'
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'
import { chatSession } from '../service/AIModal'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../service/firebaseConfig'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'


function CreateTrip() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
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

  /*const login = useGoogleLogin({
    onSuccess: (codeResp) => console.log(codeResp),
    onError: (error) => console.log(error)
  })*/

  const onGenerateTrip = async() => {
    
   /* const user = localStorage.getItem('user')

      if(!user){
        setOpenDialog(true)
        return;
      }  */

      if(formData?.noOfDays>5 && !formData?.location || !formData?.budget || !formData?.noOfPeoples){
        toast("Please fill all the details")
        return ;
      }
      setLoading(true)
      const FINAL_PROMPT = AI_PROMPT
      .replace('{location}',formData?.location)
      .replace('{noOfDays}',formData?.noOfDays)
      .replace('{noOfPeoples}',formData?.noOfPeoples)
      .replace('{budget}',formData?.budget)
      .replace('{noOfDays}',formData?.noOfDays)

      console.log(FINAL_PROMPT)

      const result = await chatSession.sendMessage(FINAL_PROMPT)

      console.log(result?.response?.text()); 
      setLoading(false)
      SaveAiTrip(result?.response?.text())
  }

  /*const GetUserProfile = (tokenInfo) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
          headers:{
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'Application/json'
          }
        }).then((resp) => {
          console.log(resp)
          localStorage.setItem('user', JSON.stringify(resp.data))
          setOpenDialog(false)
          onGenerateTrip()
        })
  } */

  const SaveAiTrip = async(TripData) => {
        
    setLoading(true)
    const docId = Date.now().toString()
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      id: docId,
    });
    setLoading(false)
    navigate('/view-trip/'+docId)
  }

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
          <Button disabled={loading} onClick={onGenerateTrip}>
          {loading?
            <AiOutlineLoading3Quarters className='w-7 h-7 animate-spin' /> :'Generate Trip with AI'}
          </Button>
        </div>

        {/*<Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader> 
            
            <DialogDescription>
              <img src='src/assets/logo.svg' />
              <h2 className='font-bold text-lg mt-5 items-center'>Sign In with Google</h2>
              <p>Sign in to the app with Google authentication securely</p>
              
              <Button className=' w-full mt-5 gap-3 items-center'><FcGoogle className='w-7 h-7'/>Sign in with Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
        </Dialog> */}


      </div>

    </div>
  )
}

export default CreateTrip