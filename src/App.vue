<!-- parte logica -->
<script>
// importazione delle componenti
import AppHeader from './components/AppHeader.vue';
import AppListMovies from './components/AppListMovies.vue';
import store from '../src/store.js'
export default {
  // chiamata componenti
    components:{
      AppHeader,
      AppListMovies,

    },
    data() {
      return {
          store
        
      }
    },
  
}
</script>

<!-- parte grafica -->
<template lang="">
    <AppHeader/>
    <AppListMovies/>
</template>

<!-- parte di style -->
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
</style>