<script>
import { store } from './store';
import inputSearch from './components/inputSearch.vue';
export default {
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
      const url = this.store.API_URL + this.store.searchMovies
      this.store.callApi(url)
    }
  },
}
</script>

<template>
  <inputSearch @moviesShow="moviesFound()" />
</template>

<style></style>
