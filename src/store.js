import { reactive } from "vue";

export const store = reactive({
    // variabile per l'input di ricerca
    SearchText: '',
    // API per i film
    apiMovies: 'https://api.themoviedb.org/3/movie/550?api_key=129b4b5c71c1481134be0192219686b1',
    // API per le serie
    apiSeriesTv: 'https://api.themoviedb.org/3/tv/550?api_key=129b4b5c71c1481134be0192219686b1'

})