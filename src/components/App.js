import React from 'react';
import FormInput from './FormInput';
import RegistrationForm from './RegistrationForm';
// import Movie from "./Movie";
// import Person from "./Person";
// import CreditCardInput from "./CreditCardInput";
// import ImageSearch from './ImageSearch.js';
// import ImageDisplay from './ImageDisplay.js';


// const movies=[
//   {id:1,
//   title:"Sex and the City",
//   year:2010},
//   {id:2,
//   title:"Sex and the City 2",
//   year:2011},
//   {id:3,
//   title:"Sex and the City 3",
//   year:2012}
// ]



class App extends React.Component{


  render(){
    return (
      <div>
        <h1 className="main-heading">Hello, world!</h1>
        <p>Welcome to our first React component</p>

        {/* {movies.map(movie => {
          return <Movie key={movie.id} title={movie.title} year={movie.year}/>
          })}
        <Person /> */}
        {/* <ImageSearch /> */}
        <RegistrationForm />
    </div>

    );
  }
}

export default App;
