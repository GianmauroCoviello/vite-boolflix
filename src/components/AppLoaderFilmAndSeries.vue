<script>
export default {
    
}
</script>

<template lang="">
    <div>
        <div class="loader-page">
            <div class="loader">
                <img class="logo-loader" src="../../public/Event-FilmSeriesLogo.jpg" alt="">
                
            </div>
        </div>  
        
    </div>
</template>

<style lang="scss" scoped>
    .loader-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .loader {
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;

        .logo-loader{
            width: 150px;
            border-radius: 50%;
        }
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
</style>