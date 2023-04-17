import {BsLinkedin,BsFacebook,BsTwitter} from 'react-icons/bs'
import './Contacts.css'

const Contacts = () => {

    return(
        <div className='contacts'>
            <h3>Connect to Your social Media Apps</h3>
            <ul>
                <li>
                    <BsLinkedin/>
                    Connect Your Account To Linked In

                </li>


                <li>
                    <BsFacebook/>
                    Connect Your Account To FaceBook
                </li>

                <li>
                    <BsTwitter/>
                    Connect Your Accout to Twitter
                    
                </li>
            </ul>
        </div>
    )

}

export default Contacts