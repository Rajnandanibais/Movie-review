import Movie from './componenet/Movie';
import { useEffect,useState } from 'react';
import './App.css';
import React from 'react';


const api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const searchApi= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function App() {
  const[movies,setMovie]=useState([]);
  const[search,setSearch]=useState(''); 
  useEffect(() => {
     fetch(api)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setMovie(data.results);
    }
    );
  }, []);

const handleSubmit = (e)=>{
  e.preventDefault();

  if(search){
  fetch(searchApi+search)
  .then((res)=>res.json())
  .then((data)=>{
    setMovie(data.results);
  });
  setSearch('');
}}
const handleOnChange=(e)=>{
  setSearch(e.target.value);
};

  return (
    <React.Fragment>
     <header>
       <h1>MOVIE REVIEW</h1>
       <form onSubmit={handleSubmit}>
       <span><input className="search" type="text" placeholder="search"
       value={search}
       onChange={handleOnChange}
       /></span>
       </form>
     </header>
     <div className="container">
   {movies.length>0 && movies.map((movie) =>
    <Movie   key={movie.id} {...movie}  /> )}
    </div>
   </React.Fragment>
  );
  }

export default App;
