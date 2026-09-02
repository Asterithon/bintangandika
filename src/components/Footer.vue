<template>
  <footer class="bg-(--color-bg-footer) border-t border-slate-200/80 mt-5 text-(--color-text-dark) py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand & Copyright -->
      <div class="md:col-span-2 space-y-4">
        <h3 class="text-2xl font-headline font-black tracking-tight text-(--color-text-dark)">
          BINTANG ANDIKA
        </h3>
        <p class="text-sm text-(--color-text-subtle) font-body max-w-sm leading-relaxed">
          © {{ currentYear }} BINTANG ANDIKA. Crafted with technical precision, modern design, and creative flair.
        </p>
      </div>

      <!-- Navigation Column (Dynamic Active Link Highlight) -->
      <div class="md:col-start-4">
        <h4 class="font-mono-custom text-s font-bold uppercase tracking-wider text-(--color-text-muted) mb-4">
          Navigation
        </h4>
        <ul class="space-y-2.5 font-body text-sm">
          <li v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="transition-all duration-200 inline-flex items-center gap-2 font-medium hover:translate-x-0.5"
              :class="[
                route.path === item.path
                  ? 'text-(--color-primary) font-semibold '
                  : 'text-(--color-text-subtle) hover:text-(--color-text-dark)'
              ]"
            >
              <span>{{ item.name }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const currentYear = new Date().getFullYear();

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/personal' },
  { name: 'Contact', path: '/contact' },
];
</script>
