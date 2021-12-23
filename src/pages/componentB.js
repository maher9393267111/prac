import React from 'react'
import {Context} from './context'
import {useContext} from 'react'
export default function ComponentB() {
    const [isone] = useContext(Context)
    return (
        <div>
 component B
 <h1>{isone}</h1>
        </div>
    )
}
