import React from 'react'
import calendar from "../assets/event/calendar.png"
import map from "../assets/event/map.png"
import '../events.css'

const Content = ({title,date,loc,para,poster}) => {
  return (
    <div className='cards1-content'>
      <div className="cards1-outer-layer">

      <div className="cards1-img">
        <div className="cards1i">
        <img src={poster} alt="poster"  />

        </div>
          </div>
          </div>
          
        <div className="events-detail">
            <div className="events-title" style={{fontSize:"30px",fontWeight:"bold"}}>
                <h2>{title}</h2>
          </div>
          <div className="events-date" style={{ fontWeight: "200", display: "flex", alignItems: "center" ,marginTop:"20px"}}>
          <img src={calendar} alt=""/>
                {date}
          </div>
          <div className="events-location" style={{ fontWeight: "200", display: "flex", alignItems: "center" }}>
            <img src={map} alt=""  />
            {loc}
              </div>
          <div className="events-desc">
            <p>{para}</p>
          </div>

        </div>
    </div>
  )
}

export default Content