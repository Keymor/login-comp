import React, {ReactNode} from 'react'

export default function Main({children} : {children: ReactNode}) {
    return (
        <main className='size-fit p-10 m-auto bg-blue-300 rounded-4xl flex flex-col gap-10 items-center'>
            {children}
        </main>
    )
}
