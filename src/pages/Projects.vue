<template>
    <section id="projetos" class="flex items-center flex-col gap-10">
        <h1 v-if="!counter.isActive">Meus Projetos</h1>
        <h1 v-else>My Projects</h1>
        
        <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            
            <Cards v-if="!counter.isActive" img="../src/assets/vue.svg" link="https://github.com/1Skuull/portfolio" alt="Portfolio" titulo="Portfolio" 
            descricao="Portfolio feito Vue.js, pinia e Typescript" buttao="Veja"/>
            <Cards v-else img="../src/assets/vue.svg" link="https://github.com/1Skuull/portfolio" alt="Portfolio" titulo="Portfolio" 
            descricao="Portfolio create with Vue.js, pinia e Typescript" buttao="Look"/>
            
            <Cards img="../src/assets/typescript.svg" link="https://github.com/1Skuull/portfolio" alt="Portfolio" titulo="Site de Filmes" 
            descricao="Meu primeiro site feito apenas com HTML e CSS" buttao="Veja"/>
        
        </div>
    </section>
</template>
<script setup lang="ts">
    import Cards from "../components/CardProjects.vue"
    import useCounterStore from "../stores/conta"
    const counter = useCounterStore()


</script>
<style scoped>
    section{
        padding: 20px;
        padding-top: 10px;
        min-height: 95vh;
    }
    h1{
        font-size: 30px;
    }

</style>