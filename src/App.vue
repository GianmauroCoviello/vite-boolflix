<!-- parte logica -->
<script>
// importazione delle componenti
import AppHeader from './components/AppHeader.vue';
import AppListMovies from './components/AppListMovies.vue';
import {store} from './data/store'
import axios from 'axios';
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
    mounted() {
      // richiamo la funzione in mounted
      this.getMovies
    },
    methods: {
		
      
		getMovies(){
			// dichiaro una variabile che conterrà l'API dei film in store
			let moviesUrl = store.apiMovies
      let seriesTvUrl= store.apiSeriesTv
			
			// condizione: se sulla barra di ricerca la stringa e diversa da stringa vuota, allora aggiungo una query string con un valore definito dalla parola inserita nell'input
			if (store.SearchText != '') {
				moviesUrl += `&query=${store.SearchText}`
			}

      
      if (store.SearchText != '') {
        seriesTvUrl += `&query=${store.SearchText}`
        
      }
			console.log('Emit Funziona')


			// effettuo la chiamata tramite la libreria axios
			axios.get(moviesUrl).then((response) => {
				// inseriamo nell'array vuoto il response dell'API sotto un formato JSON
				store.moviesArray = response.data.results
				
			})

      axios.get(seriesTvUrl).then((response) => {
				// inseriamo nell'array vuoto il response dell'API sotto un formato JSON
				store.seriesArray = response.data.results
				console.log(response.data.results)
			})
			


		}
    },
  
}
</script>

<!-- parte grafica -->
<template lang="">
	<!-- chiamata dell'$emit richiamando il contenuto della funzione -->
    <AppHeader @search="getMovies"/>
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