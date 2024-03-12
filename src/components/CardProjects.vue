<template>
    <div class="flex justify-center max-w-sm rounded-lg bg-gray shadow-xl">
        <a :href="link" target="_blank" class="rounded hover:bg-white/80 hover:text-gray p-1 text-sm">
            <div class="p-3 ">
                <h5 class="mb-2 text-2xl font-semibold">
                    {{ props.titulo }}
                </h5>
                <p class="mb-3 font-medium">
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


// function getImageUrl():any {
//   return new URL(`../assets/${props.imageUrl}`, import.meta.url)
// }

</script>
<style scoped>

    a{
        transition: 800ms;
    }
</style>