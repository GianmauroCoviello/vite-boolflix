<script>

export default {
    // importazione della props
    props:{
        myFilm: Object

    },
    
}
</script>

<!-- parte grafica -->
<template lang="">
    <div>
            <!-- chiamata delle props nei figli -->
        <p>{{ myFilm.title }}</p>
        <p>{{ myFilm.original_title }}</p>
        <img :src="`https://image.tmdb.org/t/p/w342/${myFilm.poster_path}`" alt="">
        <!-- inserita una img con percorso nei node_modules per prendere le country flag che rappresenteranno la lingua originale -->
        <img class="icons" :src="`../../node_modules/country-flag-icons/1x1/${myFilm.original_language.toUpperCase()}.svg`" alt="">
        <p>{{ myFilm.vote_average }}</p>
             
    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
.icons{
    width: 20px;
}

</style>