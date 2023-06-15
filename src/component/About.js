import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='main-about'>
      <div className='top-about'>
        <div className='main-bulb'>
          <div className='b-1 b'>
            {/* <img className=' bulb' src='./images/bulb.png' /> */}
          </div>
          <div className='b-2 b'>
            {/* <img className=' bulb' src='./images/bulb.png' /> */}
          </div>
          <div className='b-3 b' >
            {/* <img className=' bulb' src="./images/bulb.png" alt="logo" /> */}
          </div>

        </div>
        <div className='about-me'>About-Me</div>

      </div>



      <div className='about'>
        <div className='detail'>
          <span>
            I'm very ambitious front-end developer looking for a role in established IT company with the
            apportunity to work with the latest technologies on challenging and diverse projects

          </span><br></br>
          I'm quietly confident naturally corious, and perpetually working on improving my chops are design problem
          at a time.


        </div>
        <div className='girl'> </div>
      </div>

      {/* <div className='main'> */}
      {/* <div className='wrapper'>

          <div className="card">
            <div className="circle">
              <div className="bar"> </div>
              <div className="box"><span>90%</span></div>
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <div className="bar"> </div>
              <div className="box"><span>80%</span></div>
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <div className="bar"> </div>
              <div className="box"><span>70%</span></div>
            </div>
          </div>
        </div> */}
      {/* </div> */}







      <div className='main-skill'>
        <div className='main-card'>
          <div className='card'>
            <svg className='cr' viewPort="0 0 100 100">
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>90<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            Html
          </div>
        </div>



        <div className='main-card'>
          <div className='card'>
            <svg className='cr'>
              {/* <circle cx="70" cy="70" r="70"> </circle>
              <circle cx="70" cy="70" r="70"> </circle> */}
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>70<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            css
          </div>
        </div>


        <div className='main-card'>
          <div className='card'>
            <svg className='cr'>
              {/* <circle cx="70" cy="70" r="70"> </circle>
              <circle cx="70" cy="70" r="70"> </circle> */}
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>50<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            jquery
          </div>
        </div>
      </div>
      <div className='main-skill-2'>


        <div className='main-card2'>
          <div className='card'>
            <svg className='cr'>
              {/* <circle cx="70" cy="70" r="70"> </circle>
            <circle cx="70" cy="70" r="70"> </circle> */}
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>70<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            javascript
          </div>
        </div>
        <div className='main-card2'>
          <div className='card'>
            <svg className='cr'>
              {/* <circle cx="70" cy="70" r="70"> </circle>
            <circle  cx="70" cy="70" r="70"> </circle> */}
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>50<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            bootstrap
          </div>
        </div>
        <div className='main-card2'>
          <div className='card'>
            <svg className='cr'>
              {/* <circle cx="70" cy="70" r="70"> </circle>
            <circle cx="70" cy="70" r="70"> </circle> */}
              <circle className='circle1' cx="70" cy="70" r="70"> </circle>
              <circle className='circle2' cx="70" cy="70" r="70"> </circle>


              <circle className='circle3' cx="50" cy="50" r="50"> </circle>
              <circle className='circle4' cx="50" cy="50" r="50"> </circle>
            </svg>
            <div className='percent'>
              <h2>70<span>%</span></h2>
            </div>

          </div>
          <div className='lang'>
            react
          </div>
        </div>


      </div>

    </div>
  )
}

export default About




{/* <div className='skill'>
          <div className='html circle'>Html</div>
          <div className='css circle'>Css</div>
          <div className='jquery circle'>Jquery</div> <br />
        </div> */}

{/* <div className='skill-2'>
            <div className='bootstrap circle'>Bootstrap</div>
            <div className='javascript circle'>JavaScript</div>
            <div className='react circle'>React</div>

        </div> */}





