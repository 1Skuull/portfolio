<template>
    <header id="header">
        <nav v-if="counter.isActive" class="flex items-center gap-4 ml-1">
            <a href="#header">About</a>
            <a href="#habilidades">Skills</a>
            <a href="#projetos">Projects</a>
        </nav>
        <nav v-else class="flex items-center gap-4 ml-1">
            <a href="#header">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
        </nav>
        
        <button @click="counter.isActive = !counter.isActive" class="mr-1">
                <a :class="{ active: counter.isActive } ">
                    <img v-if="counter.isActive" src="../assets/flag-uk.svg" title="Switch to portuguese" alt="Brazil">
                    <img v-else src="../assets/flag-brazil.svg" title="Switch to english" alt="UK">
                </a>
        </button>
            
    </header>
</template>
<script setup lang="ts">
import useCounterStore from "../stores/conta"
const counter = useCounterStore()
</script>
<style scoped>
    header{
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a{
        text-decoration: 0;
        font-size: 18px;
        transition: 800ms;
        font-weight: bold;
        /* border-radius: 3px;
        padding-left: 10px;
        padding-right: 10px; */
    }
    button{
        filter: grayscale(100%);
    }
    button:hover{
        filter: grayscale(50%)
    }
    a:hover{
        background-color: #dc143ccc;
    }
    .active{
        border-bottom: 2px solid #dc143ccc;
    }

</style>