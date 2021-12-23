import React from 'react'
import {Context} from './context'
import {useContext} from 'react'
export default function ComponentA() {

    const [isone,setisone] = useContext(Context)
    return (
        <div>
            component A
            <button onClick={()=>setisone('majd jomah')} >change the context </button>
        </div>
    )
}
