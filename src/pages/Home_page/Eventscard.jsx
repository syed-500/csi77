import React from 'react';
window.React = React
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import displayData from '../../constants/Data1';


const EventsCard = ({ title, description, date, host, poster }) => {
  return (
    <div className="lg:ml-52 pl-20 pr-20 mr-20  md:ml-40   w-[600px] sm:w-[800px] py-5 lg:w-[800px]">
      <div className="lg:h-[400px] h-[200px] rounded-t-3xl bg-white relative">
        <img 
          className="lg:h-[400px] h-[200px] w-full object-cover rounded-t-3xl" 
          src={poster ? poster : ""} 
          alt={title ? title : ""} 
        />
      </div>
      <div className="rounded-b-3xl lg:h-[290px] h-[350px] mt-[-10px] flex flex-col items-left bg-slate-800 p-5 text-white">
        <button className="bg-black mt-2 mb-3 text-white p-3 rounded-full">
          {title ? title : ""}
        </button>
        <p>{description ? description : ""}</p>
        <p>📅 Date: {date ? date : ""}</p>
        <p className="p-3 mt-3 bg-white rounded-xl font-bold text-black">
          Hosted By: {host ? host : ""}
        </p>
      </div>
    </div>
  );
};

// const EventsCard = ({ title, description, date, host, poster }) => {
//   return (
//     <div className="w-[400px] mx-auto mb-10">
//       {/* Image container with object-cover to fit the image fully */}
//       <div className="relative h-[200px] w-full overflow-hidden rounded-t-3xl bg-gray-200">
//         <img
//           className="w-full h-full object-cover"
//           src={poster ? poster : "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"}
//           alt={title ? title : "Event Image"}
//         />
//       </div>

//       {/* Card Content */}
//       <div className="bg-slate-600 text-white p-5 rounded-b-3xl">
//         {/* Event Title Button */}
//         <button className="bg-black py-2 px-4 mb-3 rounded-full">
//           {title ? title : "Event Title"}
//         </button>

//         {/* Description */}
//         <p className="mb-2">
//           {description ? description : "Event description goes here. Learn more about the event and join us."}
//         </p>

//         {/* Event Date */}
//         <p className="mb-4">
//           📅 Date: {date ? date : "Event Date"}
//         </p>

//         {/* Host */}
//         <p className="p-3 bg-white text-black font-bold rounded-xl">
//           Hosted By: {host ? host : "Event Host"}
//         </p>
//       </div>
//     </div>
//   );
// };



const EventsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}> {/* Move dots down */}
        <ul className="dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 mt-3 bg-gray-400 rounded-full hover:bg-gray-700"></div>
    ),
  };

  return (
    <div className="mt-64 ">
      <Slider {...settings}>
        {displayData.map((event, index) => (
          <EventsCard 
            key={index}
            title={event.title}
            description={event.para}
            date={event.date}
            host={event.host}
            poster={event.img}
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventsSlider;
