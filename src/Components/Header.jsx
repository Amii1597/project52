import React from 'react'
import Man from '../assets/picS.png'
import './Header.css'
const Header = () => {
  return (
<>

<div className='container'>
<div className='left'>
    <p className='header'>An inspiring design delivered to your inbox every morning</p>
    <p class="para1">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring
                one
                every day to
                your inbox</p>
                <p class="tag">Show me how it looks</p>
            <input type="email" placeholder="Your e-mail address" />
            <button>Register Now</button>
            <div class="bottom-line">Free - No Spam - No Data Sharing</div>
        </div>
        <div class="section-right">
            <img src={Man} />
        </div>
</div>

</>
  );
}
export default Header;
