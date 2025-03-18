import React from 'react'

export default function Buttons({ text, onClickFun }: {text: string, onClickFun?: React.MouseEventHandler<HTMLButtonElement>}) {

  return (
    <button onClick={onClickFun} className='h-[3rem] w-[8rem] bg-blue-400 rounded-lg text-white text-lg'>
      {text}
    </button>
  )
}
//add comment