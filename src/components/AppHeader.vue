<script>
export default {

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
                    </div>
                    
                    <div class="content-searchbar">
                        <input type="text" placeholder="Search movies or series tv">
                        <button>SEARCH</button>
                    </div>
                    
                </nav>

            </div>
        </div>

    </header>
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    header{
        background-color: rgb(0, 0, 0);
        padding: 20px 0;

        .container{


            .row{
                width: 1170px;
                margin: 0 auto;

                nav{
                    display: flex;
                    justify-content: space-between;
                    
                    h1{
                        color: rgb(76, 14, 14);
                    }


                    input{
                        padding: 5px;
                        width: 200px;
                        margin-right: 10px;
                    }
                    button{
                        background-color: rgb(90, 90, 255);
                        color: white;
                        padding: 5px;
                    }
                }
            }
        }
    }

</style>