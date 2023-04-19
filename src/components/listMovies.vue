<script>
import { store } from '../store';
export default {
  name: 'listMovies',
  data() {
    return {
      store
    }
  },
  methods: {
    showTitle(movie) {
      return movie.title || movie.name || 'Titolo non disponibile';
    },
    showOriginalTitle(movie) {
      return movie.original_title || movie.original_name || 'Titolo originale non disponibile';
    },
  },
}
</script>

<template>
  <ul v-for="movie in this.store.movies">
    <li><strong>Titolo: </strong>{{ showTitle(movie) }}</li>
    <li><strong>Titolo Originale:: </strong>{{ showOriginalTitle(movie) }}</li>
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