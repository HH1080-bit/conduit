import { useState } from 'react'
import './signin.css'




const SignIn = () => {
    const [emailLabel,setEmailLabel] = useState(false)
    const [passLabel,setPassLabel] = useState(false)


    function puttingLabel(){
        setEmailLabel(true)        
    }
    function removingEmailLabel(){
        setEmailLabel(false)
    }
    function puttingPassLabel(){
        setPassLabel(true)        
    }
    function removingPassLabel(){
        setPassLabel(false)
    }


    return (
    
            <div className='sign-in'>
            <form>
            <h2>Sign In</h2>
            <p>Nead an <span style={{color:'#B248D8'}}>account?</span></p>
            {emailLabel && <label className='floating-email'>Email</label>}
            <input type='email' placeholder='E-mail' onFocus={puttingLabel} style={emailLabel ? {outline: '1px solid #843C9D'} :{outline: '1px solid #585858'}}onBlur={removingEmailLabel}/>
            {passLabel && <label className='floating-pass'>Password</label>}
            <input type='password' placeholder='Password' onFocus={puttingPassLabel} style={passLabel ? {outline: '1px solid #843C9D'} :{outline: '1px solid #585858'}}onBlur={removingPassLabel}/>
            <button>Sign in</button>
            </form>

            </div>
        
    )

}

export default SignIn