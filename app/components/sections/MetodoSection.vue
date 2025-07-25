<template>
  <section class="relative py-20 bg-gradient-dark-br overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 right-20 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div ref="metodoSection"
      class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible }">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Column - Content -->
          <div class="space-y-8">
            <!-- Badge -->
            <div>
              <Badge texto="Método Exclusivo" />
            </div>

            <!-- Title -->
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
              Componentização
              <span class="text-secondary-400">Extrema</span>
            </h2>

            <!-- Subtitle -->
            <p class="text-lg sm:text-xl font-body font-light text-neutral-200 leading-relaxed">
              Método exclusivo que permite criar aplicativos com Inteligência Artificial de forma segura, escalável e
              com controle total, mesmo que você não saiba nada de programação.
            </p>
          </div>

          <!-- Right Column - App Interface -->
          <div class="flex items-center justify-center relative">
            <AppInterface />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import AppInterface from '~/components/ui/AppInterface.vue'

// Scroll animation
const metodoSection = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Para de observar após a primeira aparição
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2, // Ativa quando 20% do elemento está visível
      rootMargin: '0px 0px -50px 0px' // Ativa um pouco antes de estar totalmente visível
    }
  )

  if (metodoSection.value) {
    observer.observe(metodoSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Configurações do componente
defineOptions({
  name: 'MetodoSection'
})
</script>