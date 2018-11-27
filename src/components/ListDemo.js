import React from 'react';
import Card from './Card.js';

const numbers = [1, 2, 3, 4, 5, 6, 'Ismael', 8, 'Rodrigo'];

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

export const MoviesList = () =>{
  return (
    <ul>
      { movies.map((oneMovie, index) => 
        <Card key={index} title={oneMovie.title} director={oneMovie.director} />) 
      }
    </ul>
  )
};

export const listItems = numbers.map((oneNumber, idx) => <li key={idx}>{oneNumber}</li> );
