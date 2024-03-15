<template>
    <div class="flex justify-start items-center rounded-lg bg-gray shadow-xl">
        <a :href="link" target="_blank" class="rounded-lg hover:bg-white/80 hover:text-gray w-[336px] h-[112px]">
            <div class="px-4 py-5">
                <h5 class="text-2xl font-semibold">
                    {{ props.titulo }}
                </h5>
                <p class="font-normal text-sm">
                    {{ props.descricao }}
                </p>
            </div>
        </a>    
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    link: String,
    alt: String,
    titulo: String,
    descricao: String
})

</script>
<style scoped>
    a{
        transition: 800ms;
    }
</style>