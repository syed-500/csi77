import calendar from "../../assets/event/calendar.png"
import map from "../../assets/event/map.png"
import '../../css/events.css';

const Content = ({ title, date, loc, para, poster }) => {
  return (
    <div className=" mx-10 rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image container */}
        <div className="md:w-1/3">
          <div className="h-[250px] md:h-full">
            <img 
              src={poster} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="md:w-2/3 p-6 bg-white">
          <div className="events-title mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
          
          <div className="events-date flex items-center mb-3">
            <img src={calendar} alt="calendar icon" className="w-5 h-5 mr-2" />
            <span className="text-gray-600">{date}</span>
          </div>
          
          <div className="events-location flex items-center mb-4">
            <img src={map} alt="map icon" className="w-5 h-5 mr-2" />
            <span className="text-gray-600">{loc}</span>
          </div>
          
          <div className="events-desc">
            <p className="text-gray-700 leading-relaxed">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;