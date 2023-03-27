// import LinkedIn from '../assets/download.png'
// import Instagram from '../assets/insta.png'
import './Footer.css'

const Footer = ()=>{
    return (
        <>
              <div class="footer">
        <ul>
            <li>Prompt Generator</li>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>
        </ul>
        <ul class="footer-list2">
            <li>Dweep.io</li>
            <li>Made with love in India</li>
            <li class="logo-list">
            {/* <i class="fa-brands fa-linkedin-in"></i>
                <i  class="fa-brands fa-instagram"></i> */}
                {/* <img src={LinkedIn} className="link" />
                <img src={Instagram} className="insta"/> */}
            </li>
            <li>&nbsp;</li>
            <li>hello@dweep.io</li>
        </ul>
    </div>
        </>
    )
}

export default Footer