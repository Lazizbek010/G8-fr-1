<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Main class="flex-grow" />
    
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
</script>