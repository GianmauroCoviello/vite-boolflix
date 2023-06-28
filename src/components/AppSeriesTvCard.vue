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
    <div>
        <!-- chiamata delle props nei figli -->
        <p>{{ mySeriesTv.name }}</p>
        <p>{{ mySeriesTv.original_name }}</p>
        <!-- aggiunta immagini dei film componendo il path con il link, la dimensione e il dato dell'API -->
        <img :src="`https://image.tmdb.org/t/p/w342/${mySeriesTv.poster_path}`" alt="">
        <!-- inserita una img con percorso nei node_modules per prendere le country flag che rappresenteranno la lingua originale -->
        <img class="icons" :src="`../../node_modules/country-flag-icons/1x1/${mySeriesTv.original_language.toUpperCase()}.svg`" >
        

    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .icons{
        width: 20px;
    }

</style>