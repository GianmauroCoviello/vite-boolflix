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
    <div class="content-card">
            <!-- chiamata delle props nei figli -->
        <img class="cover-movies" :src="`https://image.tmdb.org/t/p/w342/${myFilm.poster_path}`" alt="">    
        
        
        <p><strong>Titolo:</strong>{{ myFilm.title }}</p>
        <p><strong>Titolo Originale:</strong><p>{{ myFilm.original_title }}</p></p>
        <p><strong>Voto:</strong>{{ myFilm.vote_average }}</p>
        
        <!-- inserita una img con percorso nei node_modules per prendere le country flag che rappresenteranno la lingua originale -->
        <img class="icons" :src="`../../node_modules/country-flag-icons/1x1/${myFilm.original_language.toUpperCase()}.svg`" alt="">
        
             
    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
.icons{
    width: 20px;
}
.cover-movies{
    height: 500px;
    width: 100%;

    
    
}
p{
    color: white;
}

</style>