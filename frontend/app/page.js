'use client'
import React, { useEffect } from 'react'
import {io} from 'socket.io-client'

const page = () => {
  const socket = io('http://localhost:4000') 

  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("connected to backend")
      console.log(socket.id)
    socket.on("Welcome",(socket)=>{
      console.log(socket)
    })
    })
  },[])


  return ( 
    <div>page</div>
  )
}

export default page 