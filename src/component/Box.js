import React from 'react';
import './box.css';
const Box = () => {
  // const data = props.data;
  return (
    <>
      <div className='main-box' >
         {/* {data.project.map((value, index) => {
          return(
            <> */}
              
        <a href='#' value="pro-1">
          <div className='wrapper' >
            <div className='face html' title='html'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'> </video>
              {/* <video src={value.video.src} alt={value.video.alt}></video> */}

            </div>
            <div className='face css' title='css'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face js' title='js'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face react' title='react'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face jquery' title='jquery'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face bootstrap' title='bootstrap'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
          </div>
        </a>






                     
        <a href='#' value="pro-1">
          <div className='wrapper' >
            <div className='face html' title='html'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'> </video>
              {/* <video src={value.video.src} alt={value.video.alt}></video> */}

            </div>
            <div className='face css' title='css'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face js' title='js'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face react' title='react'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face jquery' title='jquery'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
            <div className='face bootstrap' title='bootstrap'>
              <video src="./Images/pro-1.mp4" autoplay="" loop="infinite" muted="" width="100%" height='100%'></video>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default Box