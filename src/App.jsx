import { useState } from 'react'
import './App.css'

import { Button } from "@/components/ui/button"
import Hero from './components/custom/Hero'
import NewHero from './components/custom/NewHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewHero />
      {/*<Hero />*/}
    </>
  )
}

export default App
