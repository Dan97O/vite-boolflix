<script>
import { store } from '../store';
import MoviesList from './MoviesList.vue';
export default {
  name: 'SiteMain',
  components: {
    MoviesList
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <h1 class="text-center pb-2 mt-3" v-if="store.movies.length > 0">ORIGINALI NETFLIX</h1>
        <div class="p-0" v-else>
          <div class="view"></div>
        </div>
        <div class="col-12 d-flex flex-wrap justify-content-center">
          <MoviesList />
        </div>
        <!-- /.col-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </main>
</template>


<style lang="scss" scoped>
main {
  background-color: rgba(0, 0, 0, 0.945);
  color: white;
  overflow-x: hidden;

  .view {
    background-color: rgba(0, 0, 0, 0.945);
    height: calc(100vh - 110px);
  }
}
</style>