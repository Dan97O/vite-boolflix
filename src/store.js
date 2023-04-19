import axios from "axios";
import { reactive } from "vue";



export const store = reactive({
  api_base: "https://api.themoviedb.org/3/search/movie",
  api_key: 'ca6353eac5048425ca03d3a2a47014d3',
  API_URL: "https://api.themoviedb.org/3/search/movie?api_key=ca6353eac5048425ca03d3a2a47014d3&query=",
  API_URL_TV: "https://api.themoviedb.org/3/search/tv?api_key=ca6353eac5048425ca03d3a2a47014d3&query=",
  api_UrlImg: 'https://image.tmdb.org/t/p/w500/',
  api_urlFlags: 'https://flagsapi.com/',
  movies: null,
  searchMovies: "",
  flags: ['IT', 'FR', 'US', 'GB', 'DE', 'ES', 'JP', 'FI', 'RU'],

  callApi(url) {
    axios
      .get(url)
      .then(response => {
        this.movies = response.data.results
      })
      .catch(error => {
        console.log(error);
        console.error(error.message);
      })

  },
  getFlagsUrl(movie) {
    if (this.flags.includes(movie.original_language.toUpperCase()) && movie.original_language != null) {
      let url
      url = this.api_urlFlags + movie.original_language.toUpperCase() + '/shiny/64.png'
      return url
    } else {
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