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