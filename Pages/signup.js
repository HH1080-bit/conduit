import { useState } from 'react'
import './signup.css'


const Signup = () => {
    const [userLabel,setUserLabel] = useState(false)
    const [emailLabel,setEmailLabel] = useState(false)
    const [passLabel,setPassLabel] = useState(false)


    function puttingLabel(){
        setEmailLabel(true)        
    }
    function removingEmailLabel(){
        setEmailLabel(false)
    }
    function puttingUserLabel(){
        setUserLabel(true)
    }
    function removingUserLabel(){
        setUserLabel(false)
    }
    function puttingPassLabel(){
        setPassLabel(true)        
    }
    function removingPassLabel(){
        setPassLabel(false)
    }

    return (
        <div className='sign-up'>
            <form>
            <h2>Sign Up</h2>
            <p>Nead an <span style={{color:'#B248D8'}}>account?</span></p>
            {userLabel && <label className='floating-user'>Username</label>}
            <input type='text' placeholder='Username' onFocus={puttingUserLabel} style={userLabel ? {outline: '1px solid #843C9D'} :{outline: '1px solid #585858'}}onBlur={removingUserLabel} />
            {emailLabel && <label className='floating-email'>Email</label>}
            <input type='email' placeholder='E-mail' onFocus={puttingLabel} style={emailLabel ? {outline: '1px solid #843C9D'} :{outline: '1px solid #585858'}}onBlur={removingEmailLabel}/>
            {passLabel && <label className='floating-pass'>Password</label>}
            <input type='password' placeholder='Password' onFocus={puttingPassLabel} style={passLabel ? {outline: '1px solid #843C9D'} :{outline: '1px solid #585858'}}onBlur={removingPassLabel}/>
            <button>Sign Up</button>
            </form>

        </div>

    )
}

export default Signup