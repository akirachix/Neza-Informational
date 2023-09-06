import React from 'react'
import "./style.css";


function Role() {
  return (
    <div className='role'>
      <div className='role-content'>
        <h1>Your Role In The Change</h1>
        <p>At Regrow, we power the business case for sustainable agriculture.We use scientifically vetted crop and soil models, <br/>
        connectivity to farm management platforms and terabytes of satellite imagery to support equitable ecosystem markets and programs. <br/>
        This is how the MRV concept works in practice.</p>

      </div>
      <div className='planning'>
        <img src='./role-images/planning.png' alt='planning'/>
      <h2>PLANNING</h2>
        <p>organizations use our predictive model to identify high-risk areas and allocate resources effectively for lead exposure risk reduction.</p>
        
      </div>
      <div className='testing-cleaning'>
        <div className='testing'>
        <img src='./role-images/testing.png' alt='testing'/>
        <h2>TESTING</h2>
        <p>organizations conduct comprehensive assessments, including blood tests, soil and water lead content analysis, and air quality monitoring, to validate our model's predictions.</p>

      </div>
        <div className='cleaning'>
        <img src='./role-images/intervention.png' alt='intervention'/>
      <h2>INTERVENTION</h2>
        <p> organizations implement targeted interventions, provide community support, and continue data-driven monitoring to reduce lead exposure levels and improve public health.</p>
        </div>
      </div>
    </div>
  )
}

export default Role
