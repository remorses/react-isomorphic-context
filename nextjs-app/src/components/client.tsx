'use client'
import { useContext } from 'react-isomorphic-context'
import { context } from '../../context'

export default function Server() {
    const { hello } = useContext(context)
    return (
        <div>
            <h1>client</h1>
            <h1>hello</h1>
            <p>{hello}</p>
        </div>
    )
}
