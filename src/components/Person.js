import React from 'react';

class Person extends React.Component{

  constructor(){
    super();
    this.state ={name:" ", names:[]}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      names: this.state.names.concat([this.state.name])
    })
  }


  render(){
    return(
      <React.Fragment>
        <p>{this.state.name}</p>
        {this.state.names.map(item => <p key={item}>{item}</p>)}
        <form>
          <input onChange={this.handleChange} type='text' />
          <button onClick={this.handleClick}>Save</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Person;
