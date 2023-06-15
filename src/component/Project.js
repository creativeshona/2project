import React from 'react'

import './Project.css'

const Project = () => {
  return (
    <>
    <h1> My projects</h1>

      <div className='main-pro'>

        <a href='https://relaxed-beijinho-ccdcac.netlify.app' target='blank'>
        <div className='pro'>
          <span style={{ '--i': 0 }} ></span>

          <span style={{ '--i': 1 }} ></span>

          <span style={{ '--i': 2 }} ></span>
          <span style={{ '--i': 3 }} ></span>
        </div>

        </a>
      </div>

      <div className='main-pro'>

       <a href=''>
       <div className='pro pro-2'>
          <span style={{ '--i': 0 }} ></span>

          <span style={{ '--i': 1 }} ></span>

          <span style={{ '--i': 2 }} ></span>
          <span style={{ '--i': 3 }} ></span>
        </div>
       </a>

      </div>











    </>
  )
}

export default Project