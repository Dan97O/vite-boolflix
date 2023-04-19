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
      //mostra sia il titolo dei film che delle serie Tv, se non è diponibile lo scrive in pagina
      return movie.title || movie.name || 'Titolo non disponibile';
    },
    showOriginalTitle(movie) {
      //mostra sia il titolo originale dei film che delle serie Tv, se non è diponibile lo scrive in pagina
      return movie.original_title || movie.original_name || 'Titolo originale non disponibile';
    },
  },

}
</script>



<template>
  <ul v-for="movie in this.store.movies">
    <img :src="store.getImgUrl(movie)" alt="">
    <li><strong>Titolo: </strong>{{ showTitle(movie) }}</li>
    <li><strong>Titolo Originale: </strong>{{ showOriginalTitle(movie) }}</li>
    <li><strong>Lingua: </strong><img class="flags" v-if="store.movies" :src="store.getFlagsUrl(movie)" />
    </li>
    <!-- Voto diviso 2 e arrotondato per eccesso -->
    <li><strong>Voto: </strong>{{ Math.ceil(movie.vote_average / 2) }}</li>
    <li>
      <strong>Stelle: </strong>
      <span v-for="i in 5">
        <i v-if="i <= Math.ceil(movie.vote_average / 2)" class="fas fa-star"></i>
        <i v-else class="far fa-star"></i>
      </span>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
ul {
  width: 300px;
  list-style: none;
  padding: 0;
  //border: 1px solid rgba(0, 0, 0, 0.945);

  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
  }

  li {
    padding-left: 1rem;
  }
}


.flags {
  height: 20px;
  object-fit: contain;
  width: 20px;
}
</style>