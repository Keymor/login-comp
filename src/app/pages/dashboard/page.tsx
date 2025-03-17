import Main from '../../../../components/Main'
import React from 'react'
import Buttons from '../../../../components/Buttons'

export default function page() {
    return (
        <Main>
            <h1 className='text-white font-bold text-4xl'>
                Hello USER NAME!
                <p className='text-lg'>Here is the users list</p>
            </h1>
            <div className='bg-white size-full rounded-lg text-center flex flex-col gap-3 p-3'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>
            <Buttons text='Log Out'></Buttons>
        </Main>
    )
}
