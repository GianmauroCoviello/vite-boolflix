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
        <p>{{ myFilm.original_language }}</p>
        <p>{{ myFilm.vote_average }}</p>
             
    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>

</style>