<template>
    <section id="habilidades">
        <header>
            <h1 v-if="counter.isActive">My Skills</h1>
            <h1 v-else>Minhas Habilidades</h1>
        </header>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center items-center gap-1">
            <img src="../assets/html5.svg" title="HTML" alt="HTML">
            <img src="../assets/css3.svg" title="CSS" alt="CSS">
            <img src="../assets/Javascript.svg" title="Javascript" alt="Javascript">
            <img src="../assets/typescript.svg" title="Typescript" alt="Typescript">
            <img src="../assets/vue.svg" title="Vue.js" alt="Vue.js">
            <img src="../assets/tailwindcss.svg" title="TailwindCSS" alt="TailwindCSS">
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
        border-radius: 3px;
        filter: grayscale(100%);
    }
    img:hover{
        background-color: rgb(213, 213, 213);
        filter: none;
    }
</style>