<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Personal', path: '/personal' },
  { name: 'Project', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

//FUNCTION FOR SMOOTH SLIDING UNDERLINE
const linkRefs = ref({});

// Posisi & lebar indikator underline
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0,
});

const updateIndicator = () => {
  const activeEl = linkRefs.value[route.path];
  if (activeEl && activeEl.$el) {
    const el = activeEl.$el;
    indicatorStyle.value = {
      left: `${el.offsetLeft}px`,
      width: `${el.offsetWidth}px`,
      opacity: 1,
    };
  } else {
    indicatorStyle.value.opacity = 0;
  }
};

// indicator update
onMounted(async () => {
  await nextTick();
  updateIndicator();
});

watch(
  () => route.path,
  async () => {
    await nextTick();
    updateIndicator();
  }
);
//END FUNCTION FOR SMOOTH SLIDING UNDERLINE

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-(--color-bg-main)/90 backdrop-blur-md border-b border-slate-200/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="group flex items-center gap-2">
        <span class="text-xl sm:text-2xl font-headline font-black tracking-tighter text-(--color-text-dark) group-hover:text-(--color-primary) transition-colors">
          BINTANG ANDIKA
        </span>
      </RouterLink>

      <!-- Desktop nav link -->
      <nav ref="navRef" class="hidden md:flex items-center space-x-8 relative py-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :ref="(el) => { if (el) linkRefs[item.path] = el }"
          :to="item.path"
          class="font-mono-custom text-sm font-medium transition-colors duration-200 relative py-1"
          :class="[
            route.path === item.path
              ? 'text-(--color-text-dark) font-semibold'
              : 'text-(--color-text-subtle) hover:text-(--color-text-dark)'
          ]"
        >
          {{ item.name }}
        </RouterLink>

        <!-- Sliding Underline Indicator -->
        <span
          class="absolute bottom-0 h-[2px] bg-(--color-primary) rounded-full transition-all duration-300 ease-out pointer-events-none"
          :style="{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            opacity: indicatorStyle.opacity,
          }"
        ></span>
      </nav>

      <!-- Right Action -->
      <div class="hidden md:flex items-center space-x-3">
        <RouterLink
          to="/contact"
          class="px-5 py-2 rounded-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/10 font-mono-custom text-xs font-semibold tracking-wide transition-all"
        >
          Contact Me
        </RouterLink>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 text-(--color-text-dark) hover:text-(--color-primary) focus:outline-none"
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
      class="md:hidden bg-(--color-bg-main) border-b border-slate-200 px-6 py-6 space-y-4 animate-fadeIn"
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
              ? 'text-(--color-primary) font-bold'
              : 'text-(--color-text-muted)'
          ]"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
      <div class="flex flex-col gap-2 pt-2">
        <RouterLink
          to="/contact"
          @click="mobileMenuOpen = false"
          class="w-full py-2.5 text-center rounded-full border border-(--color-primary) text-(--color-primary) font-mono-custom text-xs font-semibold"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  </header>
</template>