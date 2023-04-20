<script>
import { store } from './store';
import AppHeader from './components/appHeader.vue';
import AppMain from './components/appMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style></style>
