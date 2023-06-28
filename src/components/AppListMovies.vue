<script>
import AppMoviesCard from './AppMoviesCard.vue';
import { store } from '../data/store';
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
            <!-- ciclaggio delle card nell'array che conterra le informazioni dell'API dei film -->
            <div class="container-card" v-for="(movie,index) in store.moviesArray" :key="index">
                <!-- TEST -->
                <AppMoviesCard :myFilm="film"/>
                
                
                
                
        
            </div>
            
        </div>
    </div>

    
</template>

<style lang="scss" scoped>
.container{


    .row{
        width: 1170px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;


        .container-card{
            border: 2px solid black;
            width: calc(100%/3 - 20px);
            height: 200px;
            margin: 10px;
        }
    }

}
    
</style>