import React from 'react'
import Main from '../../../../components/Main'
import Buttons from '../../../../components/Buttons'

export default function App() {

    return (
        <Main>
            <h1 className='text-white font-bold text-4xl'>Login</h1>
            <input placeholder='Name' className='w-75 h-10 bg-white rounded-lg text-center'></input>
            <input placeholder='Password' className='w-75 h-10 bg-white rounded-lg text-center'></input>
            <Buttons text='Login'></Buttons>
        </Main>
    )
}