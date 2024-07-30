"use client"

import React, { useState } from 'react'
import Image from 'next/image'


const Me = () => {
 const [isShowDialog, setIsShowDialog] = useState<boolean>(false)

  return (
    <div className='fixed bottom-[-3px] right-0 w-32 md:w-64'>
      {isShowDialog && (
        <div className='nes-balloon from-right w-40'>
        <p className='text-sm'>Entre em contato!</p>
      </div>
      )}


      <Image onMouseEnter={() => setIsShowDialog(true)} onMouseLeave={() => setIsShowDialog(false)} src={"/jeje2-anime.png"} width={300} height={300} alt='jeje em anime' />
    </div>
  )
}

export default Me