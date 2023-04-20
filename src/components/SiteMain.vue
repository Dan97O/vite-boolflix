<script>
import MoviesList from './MoviesList.vue';
export default {
  name: 'SiteMain',
  components: {
    MoviesList
  }
}
</script>
<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <h1 class="text-center pb-2">ORIGINALI NETFLIX</h1>
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
}
</style>