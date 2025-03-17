import React from 'react'

export default function Buttons({text} : {text: string}) {
  return (
    <button className='h-[3rem] w-[8rem] bg-blue-400 rounded-lg text-white text-lg'>
      {text}
    </button>
  )
}
