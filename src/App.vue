<script>
import { store } from './store';
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
export default {
  components: {
    appHeader,
    appMain,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <appHeader />
  <appMain />
</template>

<style></style>
