// import react from 'react'
import {  FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp,  } from 'react-icons/fa'


const Footer = () => {
    return <>
        <div className='footer '>
            <div><img src="./images/logo.png" alt="logo" /></div>
            <div className='footerlinked '>
                <div><a href='/home'>HOME</a></div>
                <div><a href='/about'>ABOUT</a></div>
                <div><a href='/project'>SERVICE</a></div>
                <div><a href='/contact'>CONTACT</a></div>
                {/* <Link to={About}>about</Link> */}
            </div>
            <div className='footer-icons'> 
                <a href='mailto:shivanijangid136@gmail.com'><FaEnvelope/></a>
                <a href='https://www.linkedin.com/in/shivani-jangid-b4b323234/'><FaLinkedin/></a>
                <a href='whatsapp:7827531446'><FaWhatsapp/></a>
                <a href='phone-no:78275314460'><FaPhone/></a>
                
                
            </div>
        </div>
    </>
}

export default Footer