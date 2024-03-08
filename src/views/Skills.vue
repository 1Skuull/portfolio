<template>
    <section id="habilidades">
        <header>
            <h1 v-if="counter.isActive" class="font-semibold">Skills</h1>
            <h1 v-else class="font-semibold">Habilidades</h1>
        </header>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 justify-center items-center gap-2">
            <img class="shadow-xl" src="../assets/html5.svg" title="HTML5" alt="HTML5">
            <img class="shadow-xl" src="../assets/css3.svg" title="CSS3" alt="CSS3">
            <img class="shadow-xl" src="../assets/javascript.svg" title="Javascript" alt="Javascript">
            <img class="shadow-xl" src="../assets/typescript.svg" title="Typescript" alt="Typescript">
            <img class="shadow-xl" src="../assets/nodejs.svg" title="Node" alt="Node">
            <img class="shadow-xl" src="../assets/vue.svg" title="Vue.js" alt="Vue.js">
            <img class="shadow-xl" src="../assets/tailwindcss.svg" title="TailwindCSS" alt="TailwindCSS">
        </div>
        <div>
        </div>
    </section>
</template>
<script setup lang="ts">
    import useCounterStore from "../stores/conta"
    const counter = useCounterStore()
</script>
<style scoped>
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 30vh;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    header{
        margin-bottom: 30px;
    }
    header > h1{
        font-size: 30px;
    }
    img{
        background-color: #161616;
        color: gold;
        padding: 10px;
        transition: 1s;
        border-radius: 8px;
        filter: grayscale(100%);
    }
    img:hover{
        background-color: #dbdbdb;
        filter: grayscale(60%);
    }
</style>