import React from 'react';

class FormInput extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.receiveInput(event.target.value,this.props.name);
  }

  render(){

    return(
        <input type='text' value={this.props.text} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    )
  }
}
export default FormInput;
