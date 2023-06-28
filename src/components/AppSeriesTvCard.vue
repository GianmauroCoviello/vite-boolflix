<script>
    export default {
        // importazione props
        props:{
            mySeriesTv:Object
        }

    }
</script>

<!-- parte grafica -->
<template lang="">
    <div class="content-card">
        <!-- chiamata delle props nei figli -->
        <!-- aggiunta immagini dei film componendo il path con il link, la dimensione e il dato dell'API -->
        <img class="cover-movies" :src="`https://image.tmdb.org/t/p/w342/${mySeriesTv.poster_path}`" alt="">
        <p><strong>Titolo:</strong>{{ mySeriesTv.name }}</p>
        <p><strong>Titolo Originale</strong>:{{ mySeriesTv.original_name }}</p>
        <p><strong>Voto</strong>:{{ mySeriesTv.vote_average }}</p>
        
        <!-- inserita una img con percorso nei node_modules per prendere le country flag che rappresenteranno la lingua originale -->
        <img class="icons" :src="`../../node_modules/country-flag-icons/1x1/${mySeriesTv.original_language.toUpperCase()}.svg`" >
        

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