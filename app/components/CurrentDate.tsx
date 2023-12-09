'use client'
import { useState, useEffect } from 'react'

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(null)

  setTimeout(()=> {
    const currentDay = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    const seconds = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()
    const currentTime = `${new Date().getHours()}:${new Date().getMinutes()}:${seconds}`
    setCurrentDate(`${currentDay} - ${currentTime}`)
  }, 1000)
  
  return <p>Lisbon, {currentDate}</p>
}