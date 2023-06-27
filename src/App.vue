<!-- parte logica -->
<script>
// importazione delle componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  // chiamata componenti
  components:{
    AppHeader,
    AppMain,

  }
  
}
</script>

<!-- parte grafica -->
<template lang="">
    <AppHeader/>
</template>

<!-- parte di style -->
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
</style>