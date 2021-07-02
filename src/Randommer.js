import React, { useEffect, useState } from 'react'
import './Randommer.css';
import RandomMovie from './RandomMovie';
import axios from './axios';
import requests from './requests';
 
function Randommer() {
    const [renderRandommer, setRenderRandommer] = useState("");
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("18");
    
    useEffect(() => {
        async function fetchGenres() {
            const request = await axios.get(requests.fetchGenres);
            // console.log(request.data);
            setGenres(request.data.genres);
        }
        fetchGenres();
    },[]);

    function handleSelectValue(event) {
        // console.log(event.target.value);
        setGenre(event.target.value);
    }

    return (
        <div className="randommer" id="random">
            <div className="randommer__title">
                <h1>Random Watch</h1>
            </div>
            <div className="randommer__text">
                <p>Still can't decide what to watch use this tool to get random movie or series. It's suprisingly fun.</p>
            </div>
            <div className="randommer__opts">
                <label htmlFor="genres">Choose Genre : </label>
                <select id="genres" onChange={handleSelectValue}>
                    {genres.map(genre => (
                        <option value={genre.id} key={genre.id}>{genre.name}</option>
                    ))}
                </select>
            </div>
            <div className="randommer__btn">
                <button onClick={() => setRenderRandommer(Math.random())}>Randomize</button>
            </div>
            <div className="randommer__movieDiv">
                {renderRandommer ? <RandomMovie val={renderRandommer} genre={genre} /> : ""}
            </div>
        </div>
    )
}

export default Randommer;