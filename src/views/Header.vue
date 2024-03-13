<template>
    <header id="header">
        <nav class="flex items-center gap-1 ml-1">
            <a href="#header">{{ $t("header.about") }}</a>
            <a href="#habilidades">{{ $t("header.skills") }}</a>
            <a href="#projetos">{{ $t("header.projects") }}</a>
        </nav>
        
        <div>
            <button @click="changeLang" class="button-flag mr-1 flex ">
                <img v-if="locale == 'en'" src="../assets/flag-uk.svg" title="Switch to portuguese" alt="Brazil">
                <img v-else src="../assets/flag-brazil.svg" title="Switch to english" alt="UK">
            </button>
        </div>
       
    </header>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { locale } = useI18n({ useScope: 'global' })

const changeLang = () => locale.value == 'pt' ?  locale.value = 'en' : locale.value = 'pt';

</script>
<style scoped>
    header{
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
    nav > a{
        text-decoration: 0;
        font-size: 18px;
        transition: 800ms;
        font-weight: bold;
        border-radius: 3px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    nav > a:hover{
        background-color: #dc143ccc;
        
    }
    
    .button-flag{
        filter: grayscale(100%);
    }
    .button-flag:hover{
        filter: grayscale(50%)
    }
    
    /* .active{
        border-bottom: 2px solid #dc143ccc;
    } */

</style>../stores/changeLang