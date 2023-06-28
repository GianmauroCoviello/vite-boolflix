<script>

export default {
    
    props:{
        myFilm: Object

    },
    
}
</script>

<!-- parte grafica -->
<template lang="">
    <div>    
        <p>{{ myfilm.title }}</p>
        <p>{{ myFilm.original_title }}</p>
        <p>{{ myFilm.original_language }}</p>
        <p>{{ myFilm.vote_average }}</p>
             
    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>

</style>