<template>
  <div class="container animate__animated animate__fadeIn">
    
    <Header />
    <main class="">
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />

  </div>
</template>
<script setup lang="ts">

import Header from "./views/Header.vue"
import About from "./views/About.vue"
import Skills from "./views/Skills.vue" 
import Projects from "./views/Projects.vue" 
import Footer from "./views/Footer.vue" 
  
</script>
<style scoped>
  .container{
    max-width: 1024px;
    margin: 0 auto;
  }
  
</style>
