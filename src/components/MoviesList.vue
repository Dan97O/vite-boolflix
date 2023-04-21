<script>
import { store } from '../store';
export default {
  name: 'MoviesList',
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
    <ul class="title p-0">
      <li class="text-center p-1">{{ showTitle(movie) }}</li>
    </ul>
    <ul class="info w-100">
      <li><strong>Titolo Originale: </strong>{{ showOriginalTitle(movie) }}</li>
      <li><strong>Lingua: </strong>
        <img class="flags" v-if="store.movies" :src="store.getFlagsUrl(movie)" />
      </li>
      <!-- Voto diviso 2 e arrotondato per eccesso -->
      <!-- <li><strong>Voto: </strong>{{ Math.ceil(movie.vote_average / 2) }}</li> -->
      <li>
        <strong>Stelle: </strong>
        <span v-for="i in 5">
          <i v-if="i <= Math.ceil(movie.vote_average / 2)" class="fas fa-star"></i>
          <i v-else class="far fa-star"></i>
        </span>
      </li>
      <li class="overview"><strong>Trama: </strong>{{ movie.overview }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
.info::-webkit-scrollbar {
  width: 3px;
}

.info:-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.945);
}

.info::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 25px;
}

.card {
  width: 415px;
  background-color: rgba(0, 0, 0, 0.945);
  margin-bottom: 3rem;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: 10px 9px 10px 6px #363636;

  .title {
    position: absolute;
    bottom: -16px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    background: #00000078;
  }

  ul li {
    list-style: none;
  }

  img {
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }

  .info {
    display: none;
  }
}

.card:hover {
  .title {
    display: none;
  }

  .card-img-top {
    filter: opacity(0.3);
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
  height: 90%;
  overflow-y: auto;


  li {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flags {
    height: 20px;
    object-fit: contain;
    width: 20px;
  }

  .overview {
    font-size: 11px;
  }
}
</style>