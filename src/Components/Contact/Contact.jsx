import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4f0af892-cafe-4e2a-b7c5-24eaebf84b76");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Have questions or want to learn more about Educity University? Reach out to us today! Our friendly team is here to assist you with any inquiries regarding admissions, programs, or campus life. Contact us via phone, email, or visit our website to start your journey towards a brighter future with Educity University</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@educity.edu</li>
                <li> <img src={phone_icon} alt="" />1234567890</li>
                <li> <img src={location_icon} alt="" />Address</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name: </label>
                <input type='text' name='name' placeholder='Enter your name' required></input>
                <label>Phone number: </label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required></input>
                <label>Write your message here: </label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact