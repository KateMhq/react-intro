import React from 'react';
import cx from 'classnames';

class CreditCardInput extends React.Component{
  constructor(){
    super();
    this.state={pin: ""}
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){

    this.setState({
      pin: event.target.value
    })
  }

  render(){
    const classes= cx('border', {
      'border--green': this.state.pin.length==16 && !isNaN(this.state.pin),
      'border--red': this.state.pin.length>16 || isNaN(this.state.pin)

    });

    return(
      <div>
        <input className={classes} onChange={this.handleChange} type='text' value={this.state.pin} />
        <p>{this.state.pin.length}</p>
      </div>
    )
  }

}

export default CreditCardInput;
