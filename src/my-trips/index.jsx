import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../service/firebaseConfig';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

    const [userTrip, setUserTrip] = useState([])

    useEffect(() => {
      GetUserTrips()
    }, [])
    
    const GetUserTrips = async() => {
        setUserTrip([])
        const q = query(collection(db, "AITrips"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUserTrip(prevVal => [...prevVal,doc.data()])
});
    }

  return (
    <div className='px-5 md:px-32 lg:px-56 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>

      <div className='grid grid-cols-3 gap-5 mt-10'>
        {userTrip?.length>0?userTrip.map((trip,index)=>(
          <UserTripCardItem trip={trip} key={index}/>
        ))
        :[1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'></div>
        ))
        }
      </div>
    </div>
  )
}

export default MyTrips