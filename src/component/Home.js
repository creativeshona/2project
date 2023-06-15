import React from 'react'
import './Home.css';
import './box.css';
import Back3 from './Images/back3.webp';
import { Parallax } from 'react-parallax';
const Home = () => {
  return (
    <>
     <div className='parallax' >
      <Parallax className='plx' strength={300} bgImage={Back3}>
        <div className='main'>
          <div className='inner-main'>
            <p className='hello'><span>Hello,</span>I am</p>
            <p>Shivani Jangid Vishwakarma</p>
            <p>web-Developer</p>
            <p className='cv'><a href='/resume.pdf' target='_blank'>Download CV</a>

              <a href='./project.js'>My Work</a>
            </p>
          </div>

        <div className='moving-box'>
          <a href='/Project.js' value="pro-1">
            <div className='wrapper' >
              <div className='face html' title='html'>
                <image src='./Images/react.jpg' />
              </div>
              <div className='face css' title='css'>
                <image src='./Images/javascript.jpg' />
              </div>
              <div className='face js' title='js'>
                <image src='./Images/javascript.png' />

              </div>
              <div className='face react' title='react'>
              </div>
              <div className='face jquery' title='jquery'>
              </div>
              <div className='face bootstrap' title='bootstrap'>
              </div>
            </div>
          </a>
          </div>

        </div>
      </Parallax>

      </div>



    </>
  )
}

export default Home
