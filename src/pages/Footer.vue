<template>
    <footer class="flex justify-star ml-1">
        <p v-if="!counter.isActive">Desenvolvido com Vue.js, Pinia e Typescript</p>
        <p v-else>Developed with  Vue.js, Pinia end Typescript</p>
    </footer>
</template>
<script setup lang="ts">
  import useCounterStore from "../stores/conta"
  const counter = useCounterStore()
  
</script>
<style scoped>
    p{
        font-size: 16px;
    }


</style>