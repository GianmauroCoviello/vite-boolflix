<script>
import { store } from '../data/store';
export default {
    data() {
        return {
            store
        }
    },

}
</script>

<!-- parte grafica -->
<template lang="">
    <header>
        <div class="container">
            <div class='row'>
                <nav>
                    <div class="content-title">
                        <h1>BOOLFLIX</h1>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">Film</a></li>
                            <li><a href="#">Serie Tv</a></li>
                        </ul>
                    </div>
                    
                    <div class="content-searchbar">
                        <!-- inseriamo l'input di ricerca che avrà un $emit contenuto nella funzione @input che consentira il filtraggio solamente riempiendo la barra di ricerca  -->
                        <input type="text" placeholder="Search movies or series tv" v-model="store.SearchText" @input="$emit('search')">
                        
                    </div>
                    
                </nav>

            </div>
        </div>

    </header>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    header{
        background-color: rgb(18, 18, 18);
        padding: 20px 0;

        .container{


            .row{
                width: 1170px;
                margin: 0 auto;

                nav{
                    display: flex;
                    justify-content: space-between;
                    

                    .content-title{
                        display: flex;
                        align-items: center;

                        h1{
                            color: rgb(153, 24, 24);
                            
                        }

                        ul{
                            display: flex;
                            list-style-type: none;
                            align-items: center;

                            li{
                                
                                margin-left: 20px;

                                a{
                                    text-decoration: none;
                                    color: white;
                                }
                            }
                        }

                    }
                    


                    input{
                        padding: 5px;
                        width: 200px;
                        margin-right: 10px;
                        border-radius: 15px;
                    }
                    
                }
            }
        }
    }

</style>