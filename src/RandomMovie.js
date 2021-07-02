import React, { useEffect, useState } from "react";
import "./RandomMovie.css";
import axios from "./axios";
import Youtube from './YoutubeVideo';
import requests from "./requests";

function RandomMovie(props) {
  const [randomMovie, setRandomMovie] = useState([]);
  const getRandomEl = (array) =>
    array[Math.floor(Math.random() * array.length)];
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    async function getRandomMovie() {
      const reqParam = `${requests.fetchDiscover}&with_genres=${props.genre}&page=${getRandomNum(2, 10)}`;
      const request = await axios.get(reqParam);
      const movie = getRandomEl(request.data.results);
      // console.log(request.data);
      setRandomMovie(movie);
    }
    getRandomMovie();
  }, [props.val]);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="randomMovie">
      <div className="randomMovie__details">
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.poster_path}`}
          alt={randomMovie?.title}
        />
        <ul>
          <li>Title : {randomMovie?.title || randomMovie?.name}</li>
          <li>
            Year : {randomMovie.release_date?.substring(0, 4) ||
              randomMovie.first_air_date?.substring(0, 4) || "NA"}
          </li>
          <li>Rating : {randomMovie?.vote_average}</li>
          <li>{truncate(randomMovie.overview, 200)}</li>
        </ul>
      </div>
      <div className="randomMovie__yt">
        <Youtube name={randomMovie.name || randomMovie.title} height="360" width="100%" search />
      </div>
    </div>
  );
}

export default RandomMovie;
