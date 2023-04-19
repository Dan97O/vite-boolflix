<script>
import { store } from '../store';
import inputSearch from './inputSearch.vue';
export default {
  name: 'appHeader',
  components: {
    inputSearch,

  },
  data() {

    return {
      store
    }
  },
  methods: {
    moviesFound() {
      const url = this.store.API_URL && this.store.API_URL_TV + this.store.searchMovies
      this.store.callApi(url)
    }
  },
}
</script>
<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="img-logo col-8">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt="Logo Netflix">
        </div>
        <div class="col-4 justify-content-end d-flex align-items-center">
          <inputSearch @moviesShow="moviesFound()" />
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  padding: 1rem 0;
  background-color: black;



  .img-logo {
    img {
      height: 70px;

    }
  }
}
</style>