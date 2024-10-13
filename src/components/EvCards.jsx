// import React from 'react'
// import calendar from "../assets/event/calendar.png"
// import map from "../assets/event/map.png"
import '../css/events.css'

// const Content = ({title,date,loc,para,poster}) => {
//   return (
//     <div className='cards1-content'>
//       <div className="cards1-outer-layer">

//       <div className="cards1-img">
//         <div className="cards1i">
//         <img src={poster} alt="poster"  />

//         </div>
//           </div>
//           </div>
          
//         <div className="events-detail">
//             <div className="events-title" style={{fontSize:"30px",fontWeight:"bold"}}>
//                 <h2>{title}</h2>
//           </div>
//           <div className="events-date" style={{ fontWeight: "200", display: "flex", alignItems: "center" ,marginTop:"20px"}}>
//           <img src={calendar} alt=""/>
//                 {date}
//           </div>
//           <div className="events-location" style={{ fontWeight: "200", display: "flex", alignItems: "center" }}>
//             <img src={map} alt=""  />
//             {loc}
//               </div>
//           <div className="events-desc">
//             <p>{para}</p>
//           </div>

//         </div>
//     </div>
//   )
// }

const Content = () => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 298, height: 78, left: 0, top: 142, position: 'absolute', background: '#393939', borderTopLeftRadius: 22, borderTopRightRadius: 21}} />
    <div style={{width: 298, height: 142, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(79.69, 79.69, 79.69, 0.50) 0%, rgba(79.69, 79.69, 79.69, 0.50) 100%)', borderTopLeftRadius: 37, borderTopRightRadius: 37}} />
    <div style={{width: 105, height: 36, left: 187, top: 96, position: 'absolute', background: '#1B1414', borderRadius: 19}} />
    <div style={{width: 90, height: 31, left: 202, top: 104, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'}}>AI Finity </div>
    <div style={{width: 203, height: 15, left: 104, top: 199, position: 'absolute', color: 'white', fontSize: 11, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'}}>Hosted by : Taufeeq Naomaan</div>
    <div style={{width: 270, height: 15, left: 10, top: 151, position: 'absolute'}}><span style="color: 'black', fontSize: 9, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'">🔍 </span><span style="color: 'white', fontSize: 9, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'">Unlock the secrets of Generative AI at our exclusive workshop designed just for you! <br/></span></div>
    <div style={{width: 123, height: 15, left: 11, top: 180, position: 'absolute'}}><span style="color: 'black', fontSize: 9, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'">🗓 </span><span style="color: 'white', fontSize: 9, fontFamily: 'Roboto Mono', fontWeight: '400', wordWrap: 'break-word'">Date: April 27, 2024<br/></span></div>
</div>
  )
}
export default Content