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
}
</script>
<template>
  <header>
    <div class="position-fixed">
      <div class="container-fluid">
        <div class="row">
          <div class="img-logo col-8">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
              alt="Logo Netflix">
          </div>
          <div class="col-4 justify-content-end d-flex align-items-center">
            <inputSearch @moviesShow="store.callApi()" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped> header {
   padding: 1rem 0;
   background-color: black;
   height: 110px;
   position: relative;


   .position-fixed {
     padding: 1rem 0;
     background-color: black;
     box-shadow: 10px 9px 10px 6px black;
     top: 0px;
     left: 0px;
     width: 100%;
     z-index: 500;


   }

   .img-logo {
     img {
       height: 70px;

     }
   }
 }
</style>