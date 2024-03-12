<template>
    <section id="sobre" class="flex justify-center items-start md:items-center flex-col md:flex-row gap-5 px-8">
        <img class="imgperfil" src="../assets/babyyoda.gif" alt="Grogu">
        
        <div class="about">
            <h1 class="text-2xl font-semibold">
                {{ $t("about.presentation") }} <span class="filtroname text-crimson/80 font-bold text-4xl">Hudson Junior</span>
            </h1>

            <h3 class="text-lg mt-5">
                {{ $t("about.text") }}
            </h3>
            
            <!-- <span class="filtroname font-semibold text-crimson/80">Desenvolvedor Fullstack</span> -->
            
            <div class="rounded mt-5 flex justify-start items-center gap-1">
                <a class="filter flex justify-center" href="https://www.linkedin.com/in/devhudsonjunior/" target="_blank">
                    <img src="../assets/linkedin.svg" title="Linkedin" alt="Linkedin">
                </a>
                <a class="filter flex justify-center" href="https://github.com/1Skuull" target="_blank">
                    <img src="../assets/github.svg" title="Github" alt="Github">
                </a>
                
                <!-- <a class="filter flex justify-center" href="" target="_blank">
                    <img src="../assets/whatsapp.svg" title="Whatsapp" alt="Whatsapp">
                </a>
                
                <button v-if="!counter.isActive" class="text-lg hover:text-gray">Baixar CV</button>
                <button v-else class="text-lg hover:text-gray">Download CV</button> -->
            </div>
        
        </div>
        
        <a class="z-10 fixed bottom-4 m-auto" href="#header">
            <img class="rounded-lg z-10 w-12 h-12 p-1" src="../assets/mouse-scroll.svg" alt="">
        </a>
    </section>
</template>
<script setup lang="ts">

</script>
<style scoped>
    #sobre{ min-height: 95vh; }
    .imgperfil{
        width: 300px;
        height: 350px;
        background-color: rgb(52, 52, 52);
        border-radius: 4px;
        filter: grayscale(100%);
        transition: 1s;
    }
    
    .imgperfil:hover{
        filter: none;
    }
    
    .about{
        max-width: 700px;
        min-height: 200px;
    }
    
    .filter, button{
        padding: 10px;
        transition: 1s;
        border-radius: 3px;
        filter: grayscale(100%);
    }
    
    .filter:hover, button:hover{
        background-color: #dbdbdb;
        filter: grayscale(50%);
    }

    .filtroname::selection {
        background: #dc143ccc;
        color: #dbdbdb;
    }
</style>../stores/changeLang