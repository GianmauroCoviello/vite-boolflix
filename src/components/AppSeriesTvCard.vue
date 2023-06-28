<script>
    export default {
        // importazione props
        props:{
            mySeriesTv:Object
        },
        mounted() {
            // chiamata della funzione in mounted
            this.getStarVote
        },
        methods: {
            // funzione per arrotondare il numero delle icons
            getStarVote(){
                // dichiariamo una variabile che contiene il props legato alla valutazione che rappresenta un numero decimale
                let newVoteaverage = this.mySeriesTv.vote_average

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
        <!-- aggiunta immagini dei film componendo il path con il link, la dimensione e il dato dell'API -->
        <img class="cover-movies" :src="`https://image.tmdb.org/t/p/w342/${mySeriesTv.poster_path}`" alt="">
        <p><strong>Titolo:</strong>{{ mySeriesTv.name }}</p>
        <p><strong>Titolo Originale</strong>:{{ mySeriesTv.original_name }}</p>

        <div class="content-star-vote">
            <!-- cicliamo le stelline in base al numero della valutazione arrotondato nella funzione -->
            <p class="star-vote" v-for="(star,index) in getStarVote()">
                <i class="fa-star fa-solid"></i>
            </p>
        </div>
        
        <!-- inserita una img con percorso nei node_modules per prendere le country flag che rappresenteranno la lingua originale -->
        <img class="icons" :src="`../../node_modules/country-flag-icons/1x1/${mySeriesTv.original_language.toUpperCase()}.svg`" >
        

    </div>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    .icons{
        width: 20px;
        margin: 5px;
    }
    .cover-movies{
    height: 500px;
    width: 100%;
    }
    p{
        color: white;
        padding: 5px;
        

        strong{
            padding-right: 10px;
            
        }
    }
    .content-star-vote{
        display: flex;
        padding-left: 5px;

        .star-vote{
            color: yellow;
            padding: 0;
        }
    }

</style>