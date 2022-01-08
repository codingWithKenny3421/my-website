import React from 'react'
import './Contact.css'
import svg from '../assets/svgImage.svg'
const Contact = () => {
    return (
    
        <div className = 'contact' id='contact'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className = 'topSection'>
          <div className = 'leftContact'>
       
              <h2 className = 'getInTouch'>Let's get in touch!</h2>
              <div className = 'socialIcons'>
              <a href = 'https://discord.com/invite/5xEuGpXtTW' target = '_blank'><i className="fab fa-discord icon"></i></a>
              <a href = 'https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured' target ='_blank'><i className="fab fa-youtube icon"></i></a>
              <a href = 'https://www.youtube.com/channel/UCWJV1nhZSRqS58vZQS2xP5A/featured' target = '_blank'><i class="fab fa-twitter icon"></i></a>
              <a href = 'https://github.com/codingWithKenny3421' target = '_blank'><i class="fab fa-github-alt icon"></i></a>
              </div>
              <img src = {svg} className = 'svgImg'/>
          </div>
          <div className = 'rightContact'>

              <div className = 'formContainer'>
                  <form className = 'form' action = 'https://formspree.io/f/xknynapy' method = 'POST'>

                  <input name = 'Name' type='text' className = 'fullName infoInput' placeholder = 'Your name...' required/> 

           <input name = 'Email' type='email' className ='email infoInput' placeholder = 'Email 📧' required />  

         
          <textarea name ='Message' className = 'messageForm infoInput' placeholder = 'Send me any questions you may have 🙂' required></textarea>
          <button className = 'sendButton' >Send Message</button>
                  </form>
              </div>
            </div>
          </div>
          <div className = 'bottomSection'>
          <p className = 'phoneNumber contactInfo'><i class="fas fa-phone-square-alt"></i> 123-456-789</p>
          <p className = 'myEmail contactInfo'><i class="far fa-envelope"></i> kencamboy@gmail.com</p>
          <p className = 'address contactInfo'><i class="fas fa-map-marker-alt"></i> Hendersonville, NC</p>
        
          </div>

        </div>
    )
}

export default Contact