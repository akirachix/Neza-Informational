import React from 'react'
import "./style.css";


function Role() {
  return (
    <div className='role'>
      <div className='role-content'>
        <h1>Your Role In The Change</h1>
        <p>Organizations have a pivotal role to play in our mission. They can intervene effectively by implementing critical interventions, whether it's providing 
          treatment and support to affected communities or advocating for policy changes that prioritize lead-safe environments. Additionally, organizations can contribute 
          to data generation, providing valuable insights and feedback that help enhance the accuracy and effectiveness of our predictive model, ultimately guiding more targeted
           and impactful lead exposure reduction strategies.</p>

      </div>

      <div className='roles'>
      <div className='planning'>
        <img src='./role-images/planning.png' alt='planning'/>
      <h2>PLANNING</h2>
        <p>Using our predictive model to identify high-risk areas and allocate resources effectively for lead exposure risk reduction.</p>
        
      </div>
    
        <div className='testing'>
        <img src='./role-images/testing.png' alt='testing'/>
        <h2>TESTING</h2>
        <p>Conduct comprehensive assessments, including blood, soil and water lead content analysis, and air quality monitoring, to validate our model's predictions.
</p>

      </div>
        <div className='intervention'>
        <img src='./role-images/intervention.png' alt='intervention'/>
      <h2>INTERVENTION</h2>
        <p> Organizations implement targeted interventions, provide community support, and continue data-driven monitoring to reduce lead exposure levels and improve public health.</p>
        </div>
      </div>
    
      </div>
   
  )
}

export default Role
