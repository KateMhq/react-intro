import React from 'react';
import cx from 'classnames';

class ImageDisplay extends React.Component{
  render(){

    return(
      <div>
        <img src = {this.props.image}/>
      </div>
    )
  }


}

export default ImageDisplay;
