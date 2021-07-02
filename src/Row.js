import React, { useState, useEffect } from 'react';
import "./Row.css";
import axios from './axios';
import requests from './requests';
import YoutubeVideo from './YoutubeVideo';

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [showYT, setshowYT] = useState("");

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(requests[`fetch${props.networkId + props.type}`]);
            // console.log(request.data.results);
            setMovies(request.data.results);
        }
        fetchMovies();
    }, [props.networkId, props.type]);

    function handleClick(movie) {
        if(showYT) setshowYT(false);
        else setshowYT(movie);
    }

    return (
        <div className="Row">
            <h2>{props.title}</h2>
            <div className="Row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className="Row__poster"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name  || movie.title} />
                ))}
            </div>
            <div className="Row__yt">
                {showYT && <YoutubeVideo name={showYT.name || showYT.title} height="360" width="100%" />}
            </div>
        </div>
    )
}

export default Row;