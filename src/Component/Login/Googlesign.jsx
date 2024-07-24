import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import Home from "../home/Home"
import './google.css'
import {Button} from '@headlessui/react'


function Googlesign() {

    const [value, setValue] = useState('')

    const handleclick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <>
            {value ? <Home /> :
               <div className='container' >
                <img src="https://imgs.search.brave.com/7SJ16Pda9iRTJmiqwbqRgSeCenA4cbVXY0Kl2fDdA4A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG42/LmFwdG9pZGUuY29t/L2ltZ3MvYy84LzUv/Yzg1ZmNjODQxNjhh/MDhlNzgwYjZhNDZm/YTYyMGZkMWRfaWNv/bi5wbmc_dz0xMjg" alt=""
                className='h-8 w-8' />
                <h3>WALLIFY</h3>
                
                 <Button className='loginbtn' onClick={handleclick}>SIGN IN </Button>
               </div>
            }   
        </>

    )
}

export default Googlesign