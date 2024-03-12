<template>
  <footer class="flex justify-star ml-1">
    <p>{{ $t("footer.start") }} <span class="vue-style">Vue.js</span>,
      Typescript {{ $t("footer.end") }} TailwindCSS</p>
  </footer>
</template>
<script setup lang="ts">

</script>
<style scoped>
p {
  font-size: 16px;
  font-weight: bold;
}

.vue-style:hover {
  background: -webkit-linear-gradient(120deg, #35495e -80%, #41b883);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pinia-style:hover {
  background: -webkit-linear-gradient(78deg, #f7d336 30%, #8ae99c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>../stores/changeLang