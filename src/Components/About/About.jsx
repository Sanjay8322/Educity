import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} className='about-img'></img>
            <img src={play_icon} className='play-icon' onClick={()=>setPlayState(true)}></img>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nuturing tomorrow's Leaders today</h2>
            <p>Cutting-Edge Curriculum: Educity University offers a dynamic curriculum designed to prepare students for the demands of the modern workforce, integrating the latest industry trends and technologies into its programs.</p>
            <p>Global Perspective: With a diverse student body and faculty hailing from around the world, Educity University fosters an environment of cross-cultural understanding and global collaboration, enriching the educational experience.</p>
            <p>Innovation Hub: Positioned at the forefront of innovation, Educity University provides state-of-the-art facilities and resources for research, entrepreneurship, and creativity, empowering students to become leaders in their fields.</p>
        </div>
    </div>
  )
}

export default About