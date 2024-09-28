<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
import '../../src/cardflip.scss'
import React from "react";
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">Faculty</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary ">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body" id='cardb'>
        <p className="date">Faculty Coordinator</p>
        
        <h2 className=' ' style={{fontWeight:"bold",textAlign:"center" , fontFamily:"Poppins:300"}}>{this.props.title}</h2>
        
        <p className="body-content " id='cardc'>{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card" id='card5' >
        <CardHeader image={this.props.image}/>
        <CardBody title={this.props.title} text={this.props.text}/>
      </article>
    )
  }
}

export default Card