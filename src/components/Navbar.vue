<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Personal', path: '/personal' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// FUNCTION FOR SMOOTH SLIDING UNDERLINE (DESKTOP)
const linkRefs = ref({});

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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-50 relative bg-(--color-bg-main)/90 backdrop-blur-md border-b border-slate-200/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="group flex items-center gap-2">
        <span class="text-xl sm:text-2xl font-headline font-black tracking-tighter text-(--color-text-dark) group-hover:text-(--color-primary) transition-colors">
          BINTANG ANDIKA
        </span>
      </RouterLink>

      <!-- Desktop Nav Link -->
      <nav class="hidden md:flex items-center space-x-8 relative py-1">
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

      <!-- Animated Morphing Hamburger / Close Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center text-(--color-text-dark) hover:text-(--color-primary) focus:outline-none transition-colors rounded-xl hover:bg-slate-200/50"
        aria-label="Toggle Navigation Menu"
      >
        <div class="w-5 h-4 relative flex flex-col justify-between items-center">
          <!-- Top Bar -->
          <span
            class="w-full h-[2px] bg-current rounded-full transition-all duration-300 transform origin-center"
            :class="mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
          ></span>
          <!-- Middle Bar -->
          <span
            class="w-full h-[2px] bg-current rounded-full transition-all duration-200"
            :class="mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'"
          ></span>
          <!-- Bottom Bar -->
          <span
            class="w-full h-[2px] bg-current rounded-full transition-all duration-300 transform origin-center"
            :class="mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
          ></span>
        </div>
      </button>
    </div>

    <!-- Animated Overlay Mobile Drawer Menu (Positioned Absolute Top-Full) -->
    <Transition name="mobile-drawer">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-(--color-bg-main)/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-6 space-y-4 shadow-xl overflow-hidden origin-top z-50"
      >
        <nav class="flex flex-col space-y-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="font-mono-custom text-base py-2.5 px-3 rounded-xl transition-all duration-200 border-b border-slate-200/40 flex items-center justify-between group"
            :class="[
              route.path === item.path
                ? 'text-(--color-primary) font-bold bg-(--color-primary)/10'
                : 'text-(--color-text-muted) hover:text-(--color-text-dark) hover:bg-slate-200/50'
            ]"
          >
            <span>{{ item.name }}</span>
            <span
              class="text-xs transition-transform duration-200 flex items-center"
              :class="route.path === item.path ? 'text-(--color-primary) translate-x-0' : 'opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0'"
            >
              <span class="animate-pulse relative inline-flex rounded-full h-3 w-3 bg-(--color-primary) "></span>
            </span>
          </RouterLink>
        </nav>
        
        <div class="flex flex-col gap-2 pt-2">
          <RouterLink
            to="/contact"
            @click="mobileMenuOpen = false"
            class="w-full py-3 text-center rounded-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white font-mono-custom text-xs font-semibold transition-all shadow-xs"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>