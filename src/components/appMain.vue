<script>
import listMovies from './listMovies.vue';
export default {
  name: 'appMain',
  components: {
    listMovies
  }
}
</script>
<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex flex-wrap justify-content-center">
          <listMovies />
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