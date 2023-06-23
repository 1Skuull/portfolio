<template>
    <header id="header">
        <nav v-if="counter.isActive" class="flex items-center gap-4 ml-2">
            <a href="#header">About</a>
            <a href="#habilidades">Skills</a>
            <a href="#projetos">Projects</a>
        </nav>
        <nav v-else class="flex items-center gap-4 ml-2">
            <a href="#header">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
        </nav>
        
        <button class="mr-2" @click="counter.isActive = !counter.isActive">
                <a :class="{ active: counter.isActive } ">
                    <img v-if="!counter.isActive" src="../assets/flag-uk.svg" title="Switch to english" alt="Brazil">
                    <img v-else src="../assets/flag-brazil.svg" title="Switch to portuguese" alt="UK">
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
        /* background-color: black; */
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a{
        @apply font-semibold
    }

    a{
        text-decoration: 0;
        color: white;
        font-size: 18px;
        transition: 800ms;
    }
    button{
        filter: grayscale(100%);
    }
    button:hover{
        filter: none;
    }
    a:hover{
        background-color: #dc143c;/*#EB4471*/
    }
    .active{
        border-bottom: 2px solid crimson;
    }

</style>