import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastErrorNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
 
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`; 

const Main = () => {
  const { movies, getMovies } = useContext(MovieContext);  
  const {currentUser} = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState("")  
  const navigate = useNavigate()
  const handleSubmit=(e)=> { 
    e.preventDefault()   
    if(currentUser && searchTerm) { 
      getMovies(SEARCH_API + searchTerm)
    } else if(!currentUser) { 
      toastWarnNotify("Please log in to search a movie") 
      navigate("/login")
    } else { 
      toastWarnNotify("Please enter movie name")
    }
    

  }
  return (
    <> 
    <form className="flex justify-center p-2 mt-5" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap ">
        {movies.map((movie) => <MovieCard key={movie.id} {...movie}/>)}
      </div>
    </>
  );
};

export default Main;
