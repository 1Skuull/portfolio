<template>
    <section id="projetos" class="flex items-center flex-col gap-10">
        <h1 v-if="!counter.isActive">Meus Projetos</h1>
        <h1 v-else>My Projects</h1>
        
        <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            
            <Cards v-if="!counter.isActive" imageUrl="portfolio.png" link="#" 
            alt="Portfolio" titulo="Portfolio" 
            descricao="Desenvolvido com Vue.js, Pinia, Typescript e TailwindCSS" buttao="Veja"/>
            <Cards v-else imageUrl="portfolio.png" link="#" 
            alt="Portfolio" titulo="Portfolio" 
            descricao="Developed with Vue.js, Pinia, Typescript and TailwindCSS"/>
            
            <!-- <Cards img="../src/assets/typescript.svg" 
            alt="Site de Filmes" titulo="Site de Filmes" 
            descricao="Meu primeiro site feito apenas com HTML e CSS"/> -->

            <Cards v-if="!counter.isActive" link="https://github.com/1Skuull/grud-prisma" 
            alt="Grud" titulo="Grud" 
            descricao="Meu primeiro Grud usando Typescript, Nodejs, Express e Prisma"/>
            <Cards v-else link="https://github.com/1Skuull/grud-prisma" 
            alt="Grud" titulo="Grud" 
            descricao="My first Grud using Typescript, Nodejs, Express and Prisma"/>
            
            
        
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