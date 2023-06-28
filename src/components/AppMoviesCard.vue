<script>

export default {
    // importazione della props
    props:{
        myFilm: Object

    },
    mounted() {
        // funzione per arrotondare il numero delle icons
        this.getStarVote
    },
    methods: {
        getStarVote(){
            // dichiariamo una variabile che contiene il props legato alla valutazione che rappresenta un numero decimale
            let newVoteaverage = this.myFilm.vote_average

            // dichiariamo una variabile che tramite la proprietà Math.round che arrotonda il numero della valutazione che iniziamelte era decimale dividendolo per due cosi da avere una valutazione totale di un massimo di 5 (inizialmente era di 10)
            let roundVote = Math.round(newVoteaverage / 2)

            console.log(roundVote)
            // mi restituisce la variabile roundvote come risultato della funzione
            return roundVote

        }
        
    },
    
}
</script>

<!-- parte grafica -->
<template lang="">
    <div class="content-card">
            <!-- chiamata delle props nei figli -->
        <img class="cover-movies" :src="`https://image.tmdb.org/t/p/w342/${myFilm.poster_path}`" alt="">    
        
        
        <p><strong>Titolo:</strong>{{ myFilm.title }}</p>
        <p><strong>Titolo Originale:</strong>{{ myFilm.original_title }}</p>
        <div class="content-star-vote">
            <!-- cicliamo le stelline in base al numero della valutazione arrotondato nella funzione -->
            <p class="star-vote" v-for="(star,index) in getStarVote()">
                <i class="fa-star fa-solid"></i>
            </p>
        </div>
        
        
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
    
    strong{
        padding-right: 10px;
    }
}
.content-star-vote{
    display: flex;

    .star-vote{
        color: yellow;
    }
}
</style>