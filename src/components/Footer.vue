<template>
  <footer class="bg-(--color-bg-footer) border-t border-slate-200/80 mt-20 text-(--color-text-dark) py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Brand & Copyright -->
      <div class="md:col-span-2 space-y-4">
        <h3 class="text-2xl font-headline font-black tracking-tight text-(--color-text-dark)">
          BINTANG ANDIKA
        </h3>
        <p class="text-sm text-(--color-text-subtle) font-body max-w-sm leading-relaxed">
          © {{ currentYear }} BINTANG ANDIKA
        </p>
      </div>

      <!-- Navigation Column -->
      <div class="md:col-start-4">
        <h4 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-muted) mb-4">
          Navigation
        </h4>
        <ul class="space-y-2.5 font-body text-sm">
          <li>
            <RouterLink to="/" class="text-(--color-primary) hover:underline font-medium">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" class="text-(--color-text-subtle) hover:text-(--color-text-dark) transition-colors">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/personal" class="text-(--color-text-subtle) hover:text-(--color-text-dark) transition-colors">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-(--color-text-subtle) hover:text-(--color-text-dark) transition-colors">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
