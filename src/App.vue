<script>
import { store } from './store';
import inputSearch from './components/inputSearch.vue';
import listMovies from './components/listMovies.vue';
export default {
  components: {
    inputSearch,
    listMovies,
  },
  data() {

    return {
      store
    }
  },
  methods: {
    moviesFound() {
      const url = this.store.API_URL + this.store.searchMovies
      this.store.callApi(url)
    }
  },
}
</script>

<template>
  <inputSearch @moviesShow="moviesFound()" />
  <listMovies />
</template>

<style></style>
