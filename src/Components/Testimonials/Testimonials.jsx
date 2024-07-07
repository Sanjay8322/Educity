import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef()
    let tx = 0;
    const slideForward=()=>{
        if(tx > -50){
            tx -=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx < 0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='Testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jack Wills</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div> 
                        <p>
                        As an alumna of Educity University, I can attest to the institution's commitment to excellence. The personalized support from faculty members and access to cutting-edge resources have prepared me to thrive in my chosen field and make a meaningful impact.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Green Cam</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div> 
                        <p>
                        Studying at Educity University has been a transformative journey. The faculty's dedication to fostering critical thinking and innovation has empowered me to excel academically and professionally.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Yassine</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div> 
                        <p>
                        Educity University stands out for its vibrant campus culture and diverse community. Through engaging seminars, workshops, and extracurricular activities, I've developed invaluable lifelong friendships and expanded my horizons.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Matt Wills</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div> 
                        <p>
                        Choosing Educity University was one of the best decisions I've made. The hands-on approach to learning, coupled with state-of-the-art facilities, has equipped me with the skills and confidence to navigate the complexities of the modern world.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials