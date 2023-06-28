<script>
import { store } from '../data/store';
export default {
    // CH
    props:{
        myFilm: Object

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
    <div>
        <!-- <img :src="myMovies.backdrop_path" alt="">
        <p>{{ myfilm.title }}</p>
        <p>{{ myFilm.original_title }}</p>
        <p>{{ myFilm.original_language }}</p>
        <p>{{ myFilm.vote_average }}</p>
         -->
        <p>{{ myfilm.original_title }}</p>
             
    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>

</style>