<template>
  <div class="container">
    
    <Header/>
    <main>
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />

  </div>
</template>
<script setup lang="ts">

import Header from "./pages/Header.vue"
import About from "./pages/About.vue"
import Skills from "./pages/Skills.vue" 
import Projects from "./pages/Projects.vue" 
import Footer from "./pages/Footer.vue" 
  
</script>
<style scoped>
  .container{
    max-width: 1024px;
    margin: 0 auto;
  }
  
</style>
