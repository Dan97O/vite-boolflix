<script>
import { store } from '../store';
export default {
  name: 'inputSearch',
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div>
    <input type="search" placeholder="Ricerca Film o Serie TV" v-model="this.store.searchMovies"
      @keyup.enter="$emit('moviesShow')">
    <button @click="$emit('moviesShow')"> Click </button>
  </div>
</template>


<style lang="scss" scoped>
input {
  background-color: rgba(0, 0, 0, 0.945);
  color: lightgrey;
}

button {
  background-color: rgba(0, 0, 0, 0.945);
  color: lightgrey;
}
</style>