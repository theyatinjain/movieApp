import React, { useEffect, useState } from 'react';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function YoutubeVideo(props) {
    const [movieId, setMovieId] = useState("");

    useEffect(() => {
        movieTrailer(props.name, { id: true }).then((res) =>
        setMovieId(res)
      ).catch(err => err);
    }, [props.name]);
    
    const options = {
        height: props.height,
        width: props.width,
    };
    
    return (
        <div className="ytVideo">
            {movieId && <Youtube opts={options} videoId={movieId} />}
            {(!movieId && props.search) ? <a className="search" href={`https://www.youtube.com/results?search_query=${props.name}`} target="_blank" rel="noreferrer">Search For Trailer on Youtube</a> : ""}
        </div>
    )
}

export default YoutubeVideo;