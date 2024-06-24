import React from 'react'
import './Services.css'
import Services_Data from '../../assets/assets/services_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h2>My Services</h2>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <a href={service.s_link} target='_blank' className='services-readmore'>
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services