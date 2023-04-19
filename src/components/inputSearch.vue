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
    <input type="text" v-model="this.store.searchMovies">
    <button @click="$emit('moviesShow')"> Click </button>
  </div>
</template>


<style lang="scss" scoped></style>