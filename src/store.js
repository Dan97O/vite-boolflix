import axios from "axios";
import { reactive } from "vue";



export const store = reactive({
  api_base: "https://api.themoviedb.org/3/search/movie",
  api_key: 'ca6353eac5048425ca03d3a2a47014d3',
  API_URL: "https://api.themoviedb.org/3/search/movie?api_key=ca6353eac5048425ca03d3a2a47014d3&query=",
  movies: null,
  searchMovies: "",

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
})