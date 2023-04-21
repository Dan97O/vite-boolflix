<script>
import { store } from '../store';
import SearchInput from './SearchInput.vue';
import NavHeader from './NavHeader.vue';
export default {
  name: 'SiteHeader',
  components: {
    SearchInput,
    NavHeader
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
            <NavHeader />
          </div>
          <div class="col-4 justify-content-end d-flex align-items-center">
            <SearchInput @moviesShow="store.callApi()" />
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
     box-shadow: 4px -2px 12px 6px #363636;
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