import React from 'react';
import Movie from "./Movie";
import Person from "./Person";

const movies=[
  {id:1,
  title:"Sex and the City",
  year:2010},
  {id:2,
  title:"Sex and the City 2",
  year:2011},
  {id:3,
  title:"Sex and the City 3",
  year:2012}
]



class App extends React.Component{


  render(){
    return (
      <div>
        <h1 className="main-heading">Hello, world!</h1>
        <p>Welcome to our first React component</p>

        {movies.map(movie => {
          return <Movie key={movie.id} title={movie.title} year={movie.year}/>
          })}
        <Person />

    </div>

    );
  }
}

export default App;
