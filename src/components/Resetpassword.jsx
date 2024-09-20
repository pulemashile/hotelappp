import React from 'react'
import { useState } from 'react'
import { auth } from '../config/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'




function Resetpassword() {
    const [email, setEmail] = useState('')
    
const reset=()=>{
    sendPasswordResetEmail(auth, email)
}
  return (
    <div className='justify-center'>
        <input type='text' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <button className='border-1 rounded-md bg-blue-400' onClick={reset}>reset password</button>
    </div>
  )
}

export default Resetpassword