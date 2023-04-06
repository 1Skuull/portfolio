<template>
    <div class="flex justify-center">
        <div class="block max-w-sm rounded-lg bg-gray shadow-lg dark:bg-neutral-700">
            <a class="flex justify-center" data-te-ripple-init data-te-ripple-color="light">
            <img
                class="rounded-t-lg"
                :src="props.img"
                :alt="props.alt" />
            </a>
            <div class="p-6">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {{ props.titulo }}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {{ props.descricao }}
                </p>
                <a  
                    :href="link"
                    target="_blank"
                    type="button"
                    class="bg-crimson inline-block rounded bg-primary p-3 text-sm"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    {{ props.buttao }}
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const props =  defineProps({
    link: String,
    img: String,
    alt: String,
    titulo: String,
    descricao: String,
    buttao: String
})

</script>