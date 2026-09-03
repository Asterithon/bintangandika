<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue'

const isTransitioning = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-(--color-bg-light)">
    <Navbar />

    <main class="flex-1 w-full min-h-[calc(100vh-140px)]">
      <router-view v-slot="{ Component, route }">
        <transition 
          name="page-fade" 
          mode="out-in"
          @before-leave="isTransitioning = true"
          @after-enter="isTransitioning = false"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <Footer 
      class="transition-opacity duration-200"
      :class="isTransitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'" 
    />
  </div>
</template>


<style>
html {
  scroll-behavior: smooth;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>