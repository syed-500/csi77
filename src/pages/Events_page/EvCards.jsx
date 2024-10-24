import calendar from "../../assets/event/calendar.png"
import map from "../../assets/event/map.png"
import '../../css/events.css';

const Content = ({ title, date, loc, para, poster }) => {
  return (
    <div className="cards1-content mx-10">
      <div className="cards1-outer-layer">
        <div className="cards1-img">
          <div className="">
            <img src={poster} alt="" className="overflow-hidden w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="events-detail">
        <div className="events-title" style={{ fontSize: "30px", fontWeight: "bold" }}>
          <h2>{title}</h2>
        </div>
        <div className="events-date">
          <img src={calendar} alt="calendar icon" />
          {date}
        </div>
        <div className="events-location">
          <img src={map} alt="map icon" />
          {loc}
        </div>
        <div className="events-desc">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};



export default Content