<template>
    <section id="projetos" class="flex items-center flex-col gap-10">
        <h1 class="font-semibold">{{ $t("projects.title") }}</h1>
        
        <div class="flex flex-wrap gap-1 lg:justify-start justify-center">
            
            <Cards link="https://github.com/1Skuull/portfolio" 
            :titulo="$t('projects.portfolio.title')" 
            :descricao="$t('projects.portfolio.description')"/>
            
            
            <Cards link="https://github.com/1Skuull/grud-prisma" 
            :titulo="$t('projects.grud.title')" 
            :descricao="$t('projects.grud.description')"/>
        

            <Cards link="https://site-de-filmes-sigma.vercel.app" 
            :titulo="$t('projects.movieWebsite.title')" 
            :descricao="$t('projects.movieWebsite.description')"/>

            <Cards link="https://site-de-ofertas.vercel.app/" 
            :titulo="$t('projects.offersWebsite.title')" 
            :descricao="$t('projects.offersWebsite.description')"/>

        
        </div>
    </section> <!--grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -->
</template>
<script setup lang="ts">
import Cards from '../components/CardProjects.vue';
   
</script>
<style scoped>
    section{
        padding-top: 10px;
        min-height: 95vh;
    }
    h1{
        font-size: 30px;
    }
</style>../stores/changeLang