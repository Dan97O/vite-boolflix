<script>
import { store } from '../store';
export default {
  name: 'listMovies',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <ul v-for="movie in this.store.movies">
    <li v-if="movie.title"><strong>Titolo: </strong>{{ movie.title }}</li>
    <li v-else="movie.name"><strong>Titolo: </strong>{{ movie.name }}</li>
    <li v-if="movie.original_title"><strong>Titolo Originale: </strong>{{ movie.original_title }}</li>
    <li v-else="movie.original_name"><strong>Titolo Originale: </strong>{{ movie.original_name }}</li>
    <li><strong>Lingua: </strong>{{ movie.original_language }}
      <img class="flags" v-if="store.movies" :src="store.getFlagsUrl(movie)" />
    </li>
    <li><strong>Voto: </strong>{{ movie.vote_average }}</li>
  </ul>
</template>


<style lang="scss" scoped>
.flags {
  height: 20px;
  object-fit: contain;
}
</style>