<template>
  <footer class="flex justify-between items-center justify-star ml-1">
    <p>{{ $t("footer.start") }} <span class="vue-style">Vue.js</span>,
      Typescript {{ $t("footer.end") }} TailwindCSS</p>


    <a href="https://youtu.be/hFNA8UE-VkE&t=74" target="_blank" title="faz o L"></a>
  </footer>
</template>
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


a {
  background-color: #dc143cc5;
  /*color: #dc143cc5;
  font-weight: bold;
  font-size: medium;
  text-decoration: none;
  transition: 1s; */
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

a:hover {
  background-color: #ffffffdc;
  /* color: #ffffffdc; */
}
</style>