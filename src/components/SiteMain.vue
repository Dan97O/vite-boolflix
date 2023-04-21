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
          <MoviesList class=" overflow-scroll" />
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
  overflow-y: auto;
  height: calc(100vh - 70px);

  .view {
    background-color: rgba(0, 0, 0, 0.945);
    height: calc(100vh - 70px);
    overflow: hidden;
  }
}

main::-webkit-scrollbar {
  width: 3px;
}

main:-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.945);
}

main::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 25px;
}
</style>