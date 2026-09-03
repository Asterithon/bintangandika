<script setup>

import { ref, watch, onUnmounted } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['close']);

// --- Image Slider State ---
const currentSlide = ref(0);

const prevSlide = () => {
  if (!props.project) return;
  const len = props.project.images.length;
  currentSlide.value = (currentSlide.value - 1 + len) % len;
};

const nextSlide = () => {
  if (!props.project) return;
  const len = props.project.images.length;
  currentSlide.value = (currentSlide.value + 1) % len;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Reset slide index when the project changes
watch(
  () => props.project,
  () => {
    currentSlide.value = 0;
  }
);

// --- Body Scroll Lock ---
watch(
  () => props.project,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);

onUnmounted(() => {
  document.body.style.overflow = '';
});

const handleClose = () => {
  emit('close');
};

// Handle broken images gracefully
const handleImageError = (event) => {
  event.target.src = '';
  event.target.alt = 'Image not available';
};

// --- Touch Swipe & Mouse Drag Support ---
const swipeStartX = ref(0);
const swipeDelta = ref(0);
const isSwiping = ref(false);

const onPointerDown = (e) => {
  // Capture pointer to ensure we get events even if it leaves the element slightly
  e.target.setPointerCapture(e.pointerId);
  swipeStartX.value = e.clientX;
  swipeDelta.value = 0;
  isSwiping.value = true;
};

const onPointerMove = (e) => {
  if (!isSwiping.value) return;
  swipeDelta.value = e.clientX - swipeStartX.value;
};

const onPointerEnd = (e) => {
  if (!isSwiping.value) return;
  isSwiping.value = false;
  
  if (e.target.hasPointerCapture(e.pointerId)) {
    e.target.releasePointerCapture(e.pointerId);
  }

  const threshold = 50;
  if (swipeDelta.value > threshold) {
    prevSlide();
  } else if (swipeDelta.value < -threshold) {
    nextSlide();
  }
  swipeDelta.value = 0;
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal" :duration="400">
      <div
        v-if="project"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <!-- Backdrop (click closes modal) -->
        <div @click="handleClose" class="absolute inset-0 bg-black/60 modal-backdrop"></div>

        <!-- Modal Panel -->
        <div class="modal-panel relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
          <!-- Inner scrollable area -->
          <div class="max-h-[90vh] overflow-y-auto modal-scroll">

          <!-- Image Slider -->
          <div
            v-if="project.images && project.images.length"
            class="relative w-full bg-slate-100 overflow-hidden"
          >
            <!-- Slides Container -->
            <div 
              class="relative w-full aspect-video touch-pan-y cursor-grab active:cursor-grabbing select-none"
              @pointerdown="onPointerDown"
              @pointermove="onPointerMove"
              @pointerup="onPointerEnd"
              @pointercancel="onPointerEnd"
              @pointerleave="onPointerEnd"
            >
              <template v-for="(img, idx) in project.images" :key="idx">
                <div
                  class="absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center"
                  :class="idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'"
                >
                  <img
                    :src="img"
                    :alt="`${project.title} screenshot ${idx + 1}`"
                    class="w-full h-full object-contain"
                    @error="handleImageError"
                  />
                </div>
              </template>

              <!-- Placeholder when image fails to load -->
              <div
                v-if="!project.images.length"
                class="absolute inset-0 flex items-center justify-center text-(--color-text-subtle) text-sm font-mono-custom"
              >
                No images available
              </div>
            </div>

            <!-- Prev / Next Arrows -->
            <button
              v-if="project.images.length > 1"
              @click="prevSlide"
              class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Previous slide"
            >
              <svg
                class="w-5 h-5 text-(--color-text-dark) group-hover:text-(--color-primary) transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              v-if="project.images.length > 1"
              @click="nextSlide"
              class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Next slide"
            >
              <svg
                class="w-5 h-5 text-(--color-text-dark) group-hover:text-(--color-primary) transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Dot Indicators -->
            <div
              v-if="project.images.length > 1"
              class="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
            >
              <button
                v-for="(_, idx) in project.images"
                :key="idx"
                @click="goToSlide(idx)"
                class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                :class="
                  idx === currentSlide
                    ? 'bg-(--color-primary) scale-110'
                    : 'bg-white/70 hover:bg-white'
                "
                :aria-label="`Go to slide ${idx + 1}`"
              />
            </div>
          </div>

          <!-- Project Details -->
          <div class="px-6 sm:px-8 py-6 sm:py-8 space-y-6">
            <!-- Category & Badge -->
            <div class="flex items-center justify-between">
              <span
                class="px-3 py-1 rounded-full bg-(--color-bg-cta) text-(--color-primary) text-xs font-mono-custom font-bold"
              >
                {{ project.category }}
              </span>
              <span class="text-xs font-mono-custom font-semibold text-(--color-text-subtle)">
                {{ project.badge }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl sm:text-3xl font-headline font-bold text-(--color-text-dark)">
              {{ project.title }}
            </h2>

            <!-- Full Description -->
            <p class="text-sm sm:text-base text-(--color-text-muted) font-body leading-relaxed whitespace-pre-line">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="space-y-2">
              <h4 class="font-mono-custom text-xs font-bold uppercase tracking-wider text-(--color-text-subtle)">
                Tech Stack
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1.5 rounded-full bg-[#F4F6F8] text-(--color-text-muted) text-xs font-mono-custom font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action Links -->
            <div class="flex items-center gap-4 pt-2 border-t border-slate-100">
              <span
                v-if="project.demoUrl === '#'"
                class="inline-flex items-center gap-1.5 text-xs font-mono-custom font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md"
              >
                Not Deployed Yet
              </span>
              <a
                v-else
                :href="project.demoUrl"
                target="_blank"
                class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-(--color-primary) hover:bg-(--color-primary-hover) text-white text-xs font-mono-custom font-semibold transition-all shadow-sm hover:shadow"
              >
                <span>Live Preview</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                :href="project.githubUrl"
                target="_blank"
                class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-200 text-(--color-text-subtle) hover:text-(--color-text-dark) hover:border-slate-300 text-xs font-mono-custom font-semibold transition-all"
              >
                <span>Source Code</span>
              </a>
            </div>
          </div>

          <!-- Bottom Back Button -->
          <div class="px-6 sm:px-8 pb-6 sm:pb-8">
            <button
              @click="handleClose"
              class="w-full py-3 rounded-2xl border border-slate-200 text-(--color-text-muted) hover:text-(--color-primary) hover:border-(--color-primary)/30 font-mono-custom text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Projects</span>
            </button>
          </div>
          </div><!-- end: inner scrollable area -->
        </div><!-- end: outer clip container -->
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Parent Modal Transition ── */
.modal-enter-active .modal-backdrop {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-leave-active .modal-backdrop {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.modal-enter-from .modal-backdrop,
.modal-leave-to .modal-backdrop {
  opacity: 0;
}

/* Animate backdrop-filter smoothly via a CSS class */
.modal-backdrop {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease;
}

/* ── Panel transition ── */
.modal-enter-active .modal-panel {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-leave-active .modal-panel {
  transition: opacity 0.2s ease,
              transform 0.25s cubic-bezier(0.4, 0, 1, 1);
}
.modal-enter-from .modal-panel {
  opacity: 0;
  transform: scale(0.96) translateY(12px);
}
.modal-leave-to .modal-panel {
  opacity: 0;
  transform: scale(0.98) translateY(6px);
}

/* ── Hide scrollbar but keep scrolling ── */
.modal-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.modal-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
