import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'

//components
import Timer from '../components/Stopwatch'
import Topbar from '../components/Topbar'

//other
import quoteData from "../public/quoteData"


const Home: NextPage = () => {

  const [dailyQuote, setDailyQuote] = useState("");


  // Setting the daily quote by useEffect
  useEffect(() => {
    let rndInt = Math.floor(Math.random()*51)
    return(
      setDailyQuote(quoteData[rndInt].q)
    )
  },[])

  // Main return
  return (
    <div>
        <title>Chrono</title>
      <div className='Background grid'>
        <Topbar />
        <Timer
          quote={dailyQuote}
        />
      </div>
    </div>
  )
}

export default Home
