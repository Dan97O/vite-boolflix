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
  <div class="card" v-for="movie in this.store.movies">
    <img class=" card-img-top" :src="store.getImgUrl(movie)" alt="">
    <ul class="info">
      <li><strong>Titolo: </strong>{{ showTitle(movie) }}</li>
      <li><strong>Titolo Originale: </strong>{{ showOriginalTitle(movie) }}</li>
      <li><strong>Lingua: </strong>
        <img class="flags" v-if="store.movies" :src="store.getFlagsUrl(movie)" />
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
  </div>
</template>


<style lang="scss" scoped>
.card {
  width: 300px;
  background-color: black;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 10px 9px 10px 6px black;

  img {
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }

  .info {
    display: none;
  }
}

.card:hover {
  img {
    filter: opacity(0.5);
  }
}

.card:hover .info {
  display: block;
  width: 300px;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 20px;
  left: 0;

  li {
    padding-left: 1rem;
  }

  .flags {
    height: 20px;
    object-fit: contain;
    width: 20px;
  }
}
</style>