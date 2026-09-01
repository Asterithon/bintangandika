<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Personal', path: '/personal' },
  { name: 'Project', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-[#F4F6F8]/90 backdrop-blur-md border-b border-slate-200/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <RouterLink to="/" class="group flex items-center gap-2">
        <span class="text-xl sm:text-2xl font-headline font-black tracking-tighter text-[#0F172A] group-hover:text-[#2180AE] transition-colors">
          BINTANG ANDIKA
        </span>
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-8">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-mono-custom text-sm font-medium transition-all relative py-1"
          :class="[
            route.path === item.path
              ? 'text-[#0F172A] font-semibold'
              : 'text-[#64748B] hover:text-[#0F172A]'
          ]"
        >
          {{ item.name }}
          <!-- Active underline bar -->
          <span
            v-if="route.path === item.path"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-[#2180AE] rounded-full"
          ></span>
        </RouterLink>
      </nav>

      <!-- Right Action Buttons -->
      <div class="hidden md:flex items-center space-x-3">
        <RouterLink
          to="/contact"
          class="px-5 py-2 rounded-full border border-[#2180AE] text-[#2180AE] hover:bg-[#2180AE]/10 font-mono-custom text-xs font-semibold tracking-wide transition-all"
        >
          Contact Me
        </RouterLink>
        <RouterLink
          to="/contact"
          class="px-5 py-2 rounded-full bg-[#2180AE] hover:bg-[#19688F] text-white font-mono-custom text-xs font-semibold tracking-wide transition-all shadow-xs"
        >
          Book a call
        </RouterLink>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 text-[#0F172A] hover:text-[#2180AE] focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-[#F4F6F8] border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn"
    >
      <nav class="flex flex-col space-y-3">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="font-mono-custom text-base py-2 border-b border-slate-200/50"
          :class="[
            route.path === item.path
              ? 'text-[#2180AE] font-bold'
              : 'text-[#475569]'
          ]"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
      <div class="flex flex-col gap-2 pt-2">
        <RouterLink
          to="/contact"
          @click="mobileMenuOpen = false"
          class="w-full py-2.5 text-center rounded-full border border-[#2180AE] text-[#2180AE] font-mono-custom text-xs font-semibold"
        >
          Contact Me
        </RouterLink>
        <RouterLink
          to="/contact"
          @click="mobileMenuOpen = false"
          class="w-full py-2.5 text-center rounded-full bg-[#2180AE] text-white font-mono-custom text-xs font-semibold"
        >
          Book a call
        </RouterLink>
      </div>
    </div>
  </header>
</template>
