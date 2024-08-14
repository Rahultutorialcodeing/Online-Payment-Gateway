"use client"
import React from 'react'
import { useParams } from 'next/navigation'

export default function Idx() {

    const params=useParams()

  return (
    <div className='jd' style={{textAlign:'center'}}>
        <h1>Payment successful</h1>
        <p>Payment Id:- <span style={{fontSize:'20px',fontWeight:'bold'}}>{params.idx}</span></p>
    </div>
  )
}
