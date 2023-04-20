import axios from "axios";
import { reactive } from "vue";



export const store = reactive({
  api_base: "https://api.themoviedb.org/3/",
  movieUrl: 'search/movie',
  tvUrl: 'search/tv',
  api_key: 'ca6353eac5048425ca03d3a2a47014d3',
  API_URL: "https://api.themoviedb.org/3/search/movie?api_key=ca6353eac5048425ca03d3a2a47014d3&query=",
  API_URL_TV: "https://api.themoviedb.org/3/search/tv?api_key=ca6353eac5048425ca03d3a2a47014d3&query=",
  api_UrlImg: 'https://image.tmdb.org/t/p/w500/',
  api_urlFlags: 'https://flagsapi.com/',
  movies: [],
  searchMovies: "",
  flags: ['IT', 'FR', 'US', 'DE', 'ES', 'FI', 'RU'],

  callApi() {
    const movieUrl = `${this.api_base}${this.movieUrl}?api_key=${this.api_key}&query=${this.searchMovies}`;
    const tvUrl = `${this.api_base}${this.tvUrl}?api_key=${this.api_key}&query=${this.searchMovies}`;

    //Promise= per fare richieste contemporaneamente
    Promise.all([
      axios.get(movieUrl),
      axios.get(tvUrl),
    ])
      .then(responses => {
        const movieResults = responses[0].data.results;
        const tvResults = responses[1].data.results;
        this.movies = [...movieResults, ...tvResults];
      })
      .catch(error => {
        console.error(error.message);
      });
  },

  getFlagsUrl(movie) {
    let lang = movie.original_language.toUpperCase()
    if (this.flags.includes(movie.original_language.toUpperCase()) && movie.original_language != null) {
      let url
      url = this.api_urlFlags + movie.original_language.toUpperCase() + '/shiny/64.png'
      return url
    } else if (lang === 'JA') {
      lang = 'JP';
      this.flags.push(lang);
      return `${this.api_urlFlags}${lang}/shiny/64.png`;
    } else if (lang === 'EN') {
      lang = 'GB';
      this.flags.push(lang);
      return `${this.api_urlFlags}${lang}/shiny/64.png`;
    } else if (lang === 'UK') {
      lang = 'GB';
      this.flags.push(lang);
      return `${this.api_urlFlags}${lang}/shiny/64.png`;
    }
    else {
      return 'https://ih1.redbubble.net/image.605890193.3639/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg'
    }
  },

  getImgUrl(movie) {
    if (movie.backdrop_path != null) {
      let url
      url = this.api_UrlImg + movie.backdrop_path
      return url
    }
  },

})