const API_KEY = '76592f12cad9234e1be53581c60446d6';

const requests = {
    fetch213tv: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetch1024tv: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=1024`,
    fetch3919tv: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=3919`,
    fetch213movies: `/discover/movie?api_key=${API_KEY}`,
    fetch1024movies: `/discover/movie?api_key=${API_KEY}&page=2`,
    fetch3919movies: `/discover/movie?api_key=${API_KEY}&page=4`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}`,
    fetchDiscover : `/discover/movie?api_key=76592f12cad9234e1be53581c60446d6`
};

export default requests;