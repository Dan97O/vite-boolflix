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
    <li>Titolo: {{ movie.title }}</li>
    <li>Titolo Originale: {{ movie.original_title }}</li>
    <li>Lingua: {{ movie.original_language }}</li>
    <li>Voto: {{ movie.vote_average }}</li>
  </ul>
</template>


<style lang="scss" scoped></style>