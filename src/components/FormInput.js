import React from 'react';

class FormInput extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.formData(event.target.className, event.target.value);
  }

  render(){
    return(
      <div>
        First name:
        <input type='text' className='firstName' value={this.props.firstName} onChange={this.handleChange}/>
        Last name:
        <input type='text' className='lastName' value={this.props.lastName} onChange={this.handleChange}/>
        Email:
        <input type='text' className='email' value={this.props.email} onChange={this.handleChange}/>

      </div>
    )
  }
}
export default FormInput;
