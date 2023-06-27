<script>
import AppMoviesCard from './AppMoviesCard.vue';
import { store } from '../store.js';
export default {
    components:{
        AppMoviesCard
    },
    data() {
    return {
        store
      
    }
  },
  

    
}
</script>

<template lang="">
   
    <div class="container">
        <div class='row'>
            <AppMoviesCard :MyMovies="film"/> 
        </div>
    </div>

    
</template>

<style lang="scss" scoped>
.container{


    .row{
        width: 1170px;
        margin: 0 auto;

        
        
    }
}
    
</style>