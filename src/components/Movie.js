import React from 'react';


class Movie extends React.Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    alert(this.props.title)
  }

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.year}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Movie;
