<template>
    <section id="sobre" class="flex justify-center items-start md:items-center flex-col md:flex-row gap-2 px-8">
        
        <img class="imgperfil" src="../assets/babyyoda.gif" alt="Grogu">
        
        <div class="about">
            
            <h1 v-if="!counter.isActive" class="text-xl">
                Olá! Meu nome é <span class="filtroname text-crimson font-bold text-4xl">Grogu</span>
            </h1>
            <h1 v-else class="text-xl">
                Hello! My name is <span class="filtroname text-crimson font-bold text-4xl">Grogu</span>
            </h1>
            
            <h3 v-if="!counter.isActive" class="text-xl mt-5">

                A empresa em si é uma empresa muito bem sucedida. 
                Quem eles são será seguido pelo descobridor e pela maior dor, mas abrirei 
                o assunto facilmente com esta distinção; Ela, por assim dizer?
            </h3>
            <h3 v-else class="text-xl mt-5">
                The company itself is a very successful company. 
                Who they are will be followed by the discoverer and the greatest pain, but I
                will easily open the subject with this distinction; She, so to speak?
            </h3>
            
            <div class="rounded mt-5 flex justify-star items-center gap-2">
                
                <a class="filter flex justify-center" href="https://www.linkedin.com/in/hudson-junior-b98293218/" target="_blank">
                    <img src="../assets/linkedin.svg" title="Linkedin" alt="Linkedin">
                </a>
                <a class="filter flex justify-center" href="https://github.com/1Skuull" target="_blank">
                    <img src="../assets/github.svg" title="Github" alt="Github">
                </a>
                
                <button v-if="!counter.isActive" class="text-xl font-mono hover:text-crimson">Baixar CV</button>
                <button v-else class="text-xl font-mono hover:text-crimson">Download CV</button>
            
            </div>
        </div>
        
        <a class="z-10 fixed bottom-4 m-auto" href="#header">
            <img class="rounded-lg z-10 w-14 h-14 p-1" src="../assets/mouse-scroll.svg" alt="">
        </a>
       
        
    </section>
</template>
<script setup lang="ts">

import useCounterStore from "../stores/conta"
const counter = useCounterStore()


</script>
<style scoped>
    #sobre{min-height: 95vh;}
    .imgperfil{
        width: 300px;
        height: 350px;
        background-color: rgb(52, 52, 52);
        border-radius: 4px;
        filter: grayscale(100%);
        transition: 1s;
    }
    .filtroname::selection {
        background: #dc143c;
        color: rgb(213, 213, 213);
    }
    .imgperfil:hover{
        filter: none;
    }
    .about{
        max-width: 700px;
        min-height: 200px;
        /* background-color: rgb(52, 52, 52); */
    }
    .filter, button{
        background-color: rgb(22, 22, 22);
        padding: 8px;
        transition: 1s;
        border-radius: 3px;
        filter: grayscale(100%);
    }
    .filter:hover, button:hover{
        background-color: rgb(213, 213, 213);
        filter: none;
    }

</style>