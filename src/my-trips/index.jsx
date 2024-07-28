import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../service/firebaseConfig';

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
    <div>MyTrips</div>
  )
}

export default MyTrips