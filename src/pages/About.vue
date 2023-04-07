<template>
    <section id="sobre" class="flex justify-center items-start md:items-center flex-col md:flex-row gap-2 px-8">
        
        <img class="imgperfil" src="../assets/babyyoda.gif" alt="Grogu">
        
        <div class="about">
            
            <h1 v-if="!counter.isActive" class="text-2xl">
                Olá! Meu nome é <span class="filtroname text-crimson font-bold text-4xl">Hudson Junior</span>
            </h1>
            <h1 v-else class="text-2xl">
                Hello! My name is <span class="filtroname text-crimson font-bold text-4xl">Hudson Junior</span>
            </h1>

            <h3 v-if="!counter.isActive" class="text-lg mt-5">
                Sou um desenvolvedor front-end que adora criar sites e aplicativos da Web 
                com forte foco em designs responsivos, desempenho e manutenção futura, usando 
                as mais recentes tecnologias e melhores práticas de front-end.
            </h3>
            <h3 v-else class="text-lg mt-5">
                I'm a Frontend Developer who loves to build Web sites & applications with a 
                strong focus on responsive designs, performance & future maintainability using the 
                latest frontend technologies & best practices.
            </h3>
            
            <div class="rounded mt-5 flex justify-star items-center gap-2">
                
                <a class="filter flex justify-center" href="https://www.linkedin.com/in/devhudsonjunior/" target="_blank">
                    <img src="../assets/linkedin.svg" title="Linkedin" alt="Linkedin">
                </a>
                <a class="filter flex justify-center" href="https://github.com/1Skuull" target="_blank">
                    <img src="../assets/github.svg" title="Github" alt="Github">
                </a>
                
                <!-- <button v-if="!counter.isActive" class="text-xl font-mono hover:text-crimson">Baixar CV</button>
                <button v-else class="text-xl font-mono hover:text-crimson">Download CV</button> -->
            
            </div>
        </div>
        
        <a class="z-10 fixed bottom-4 m-auto" href="#header">
            <img class="rounded-lg z-10 w-12Hudson Junior h-12 p-1" src="../assets/mouse-scroll.svg" alt="">
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