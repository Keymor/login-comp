'use client'
import { createContext, useContext, useState } from 'react'

const Score = createContext({ score: 0, addScore: () => { } })

export function Culc({children}: {children: React.ReactNode}) {
    const [score, setScore] = useState(0)

    const addScore = () => {
        setScore((s) => s + 5)
    }

    return (
        <Score.Provider value={{score, addScore}}>
            {children}
        </Score.Provider>
    )
}

export function useCulc() {
    return useContext(Score)
}