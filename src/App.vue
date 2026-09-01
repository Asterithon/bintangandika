<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F4F6F8] text-[#0F172A] selection:bg-[#2180AE] selection:text-white">
    <Navbar />
    <main class="grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
