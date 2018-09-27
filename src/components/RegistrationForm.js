import React from "react";
import FormInput from "./FormInput";
import cx from 'classnames';

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      firstName: ["",""],
      lastName: "",
      email: ""
    };
    this.receiveSubmit = this.receiveSubmit.bind(this);

    this.receiveInput = this.receiveInput.bind(this);
  }

  receiveSubmit(event, error) {
    event.preventDefault();
    // if(this.state. === undefined){
    // this.setState({error: "Error, invalid input."})
    // }
    //get the label value
    // Object.values(this.state).forEach(value=> {
    //   const classes=cx('normal',{
    //     'normal__warning': value.length===0
    //   })
    //   })

  }

  receiveInput(text,name) {
    console.log(name, text, text.toUpperCase());
    if (name=="lastName"){
        this.setState({
        [name]: text.toUpperCase()
      } );
    } else{
      this.setState({
        [name]: text
      });

    }
     //console.log(this.state[label]));

  }

  render() {
    //console.log(this.state);
    return (

        <form onSubmit={this.receiveSubmit}>
          First name:<FormInput  receiveInput ={this.receiveInput} name= "firstName" text={this.state.firstName}/>
          <p>{this.state.error}</p>
          Last name:<FormInput  receiveInput ={this.receiveInput} name= "lastName" text={this.state.lastName}/>
          <p>{this.state.error}</p>
          email:<FormInput  receiveInput ={this.receiveInput} name= "email" text={this.state.email}/>
          <p>{this.state.error}</p>
          <button type="submit">Submit</button>
        </form>

    );
  }
}
export default RegistrationForm;
