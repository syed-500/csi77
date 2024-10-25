import React from 'react'
{ <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style> }
import '../css/cardflip.scss'

const Card = ({ image, title, text }) => {
  return (
    <article className="card" id='card5'>
      {/* Card Header */}
      <header 
        style={{ backgroundImage: `url(${image})` }}
        id={image} 
        className="card-header"
      />
      
      {/* Card Body */}
      <div className="card-body relative" id='cardb'>
        <p className="date">Faculty Coordinator</p>
        
        <h2 
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Poppins:300"
          }}
        >
          {title}
        </h2>
        
        <p className="body-content" id='cardc'>
          {text}
        </p>
      </div>
    </article>
  );
};

export default Card;