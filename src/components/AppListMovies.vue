<script>
import AppMoviesCard from './AppMoviesCard.vue';
import AppSeriesTvCard from './AppSeriesTvCard.vue';
import { store } from '../data/store';
export default {
    components:{
        AppMoviesCard,
        AppSeriesTvCard,

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
            <div class="container-card" v-for="(film,index) in store.moviesArray" :key="index">
                <!-- inserita la props nel padre -->
                <AppMoviesCard :myFilm="film"/>
                
                
            </div>
            <div class="container-card" v-for="(serie,index) in store.seriesArray"  :key="index">
                <!-- inserita la props nel padre -->
                
                <!-- <AppSeriesTvCard :mySeriesTv="serie"/> -->
                
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
            width: calc(100%/3 - 40px);
            margin: 20px ;


           
            
        }
    }

}
    
</style>