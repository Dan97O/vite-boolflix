<script>
import { store } from './store';
export default {
  data() {

    return {
      store
    }
  },
  mounted() {
    this.store.callApi(this.store.API_URL + this.store.searchMovies)
  }
}
</script>

<template>
  <div>
    <input type="text" v-model="store.searchMovies">
  </div>
</template>

<style></style>
