<template>
    <div class="flex justify-center shadow-lg">
        <div class="block max-w-sm rounded-lg bg-gray shadow-lg dark:bg-neutral-700">
            <a class="flex justify-center" data-te-ripple-init data-te-ripple-color="light">
                <img
                    class="rounded-t-lg"
                    :src="getImageUrl()"
                    :alt="props.alt" />
            </a>
            <div class="p-5">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {{ props.titulo }}
                </h5>
                <p class="mb-3 text-base text-neutral-600 dark:text-neutral-200">
                    {{ props.descricao }}
                </p>
                <a  :href="link"
                    target="_blank"
                    type="button"
                    class="hover:bg-crimson inline-block rounded bg-primary p-1 text-sm"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img src="../assets/link.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    link: String,
    imageUrl: String,
    alt: String,
    titulo: String,
    descricao: String
})


function getImageUrl():any {
  return new URL(`../assets/${props.imageUrl}`, import.meta.url)
}

</script>
<style scoped>
    a{
        transition: 800ms;
    }
</style>