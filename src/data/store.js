import { reactive } from "vue";

export const store = reactive({
    // variabile per l'input di ricerca
    SearchText: '',
    // API per i film
    apiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=129b4b5c71c1481134be0192219686b1',
    moviesArray: [],
    // API per le serie
    // apiSeriesTv: 'https://api.themoviedb.org/3/search/tv?api_key=129b4b5c71c1481134be0192219686b1',
    // series: []


})                     