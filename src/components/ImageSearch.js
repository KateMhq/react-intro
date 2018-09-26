import React from "react";
import cx from "classnames";
import ImageDisplay from "./ImageDisplay";

class ImageSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      images: [] //array of regular image links
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.concatImages = this.concatImages.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  concatImages(body) {
    this.setState({
      images: body.results.map(item => {
        return {id: item.id, image:item.urls.regular};
      }),
      text:''
    });
  }

  handleChange(input) {
    this.setState({ text: input.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${
        this.state.text
      }&client_id=233c522c9aa5098a5e08dae45ba3d60a6146624ee96b5a71a364e408bacd2b10`
    )
      .then(response => response.json())
      .then(body => {
        //another function
        console.log(body);
        this.concatImages(body);
      });
    // this.setState({
    //
    //   //add in images concat
    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
        </form>
        <div>
          {this.state.images.map(item => {
            return <ImageDisplay image={item.image} key={item.id}/>;
            console.log(item);
          })}
        </div>
      </div>
    );
  }
}

export default ImageSearch;
