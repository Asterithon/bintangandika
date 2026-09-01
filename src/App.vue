<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/personal">Personal</RouterLink>
  <RouterLink to="/projects">Projects</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
  <RouterView />
  <HelloWorld />
</template>
