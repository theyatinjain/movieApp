import React, { useEffect, useState } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./requests";

function Hero() {
  const [movie, setMovie] = useState([]);
  
  function getIndex() {
    let date = new Date();
    date = date.getDate()
    if(date>1 && date<=20) return date-1;
    else return date-20;
  }

  function getLang(lang) {
    if(lang==="en") return "English";
    else if(lang==="ja") return "Japanese";
    else if(lang==="it") return "Italian";
    else if(lang==="hi") return "Hindi";
    else if(lang==="es") return "Spanish";
    else return "";
  }

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(`${requests.fetchTopRated}&page=${getIndex()+1}`);
      // console.log(request.data);
      const movie = request.data.results[getIndex()];
      setMovie(movie);
    }
    fetchMovie();
  }, []);

  return (
    <div className="hero" id="home">
      <h1 className="hero__title">Movie of the day</h1>
      <img
        src={movie && `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie.title}
        className="movie__poster"
      />
      <div className="movie__details">
        <ul>
          <li>Title : {movie?.title}</li>
          <li>Rating : {movie?.vote_average}</li>
        </ul>
        <ul>
          <li>Year : {movie.release_date?.substring(0, 4)}</li>
          <li>Popularity : {movie?.popularity}</li>
        </ul>
        <ul>
          <li>
            {getLang(movie?.original_language)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;