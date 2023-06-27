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
                        <input type="text">
                        <button>SEARCH</button>
                    </div>
                    
                </nav>

            </div>
        </div>

    </header>{
</template>

<!-- parte di style -->
<style lang="scss" scoped>
    header{
        background-color: blue;
        padding: 20px 0;

        .container{


            .row{
                width: 1170px;
                margin: 0 auto;

                nav{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }

</style>