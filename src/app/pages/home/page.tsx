import React from 'react'
import Main from '../../../../components/Main'
import Buttons from '../../../../components/Buttons'

export default function page() {
    return (
        <Main>
            <h1 className='text-white mx-auto font-bold text-4xl'>Welcom!</h1>
            <div className='flex gap-5 mx-auto'>
                <Buttons text='Sign up'></Buttons>
                <Buttons text='Login'></Buttons>
            </div>
        </Main>
    )
}
