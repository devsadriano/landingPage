<template>
  <div class="bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-secondary-500/20 rounded-lg p-6 hover:border-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10 transition-all duration-300">
    <!-- Quote Icon -->
    <div class="mb-4">
      <svg class="w-8 h-8 text-secondary-400/60" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
      </svg>
    </div>
    
    <!-- Testimonial Text -->
    <p class="text-neutral-300 leading-relaxed mb-6 text-sm sm:text-base">
      "{{ texto }}"
    </p>
    
    <!-- Author Info -->
    <div class="flex items-center space-x-3">
      <!-- Avatar -->
      <div class="w-12 h-12 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-full flex items-center justify-center flex-shrink-0">
        <span class="text-secondary-400 font-semibold text-lg">{{ iniciais }}</span>
      </div>
      
      <!-- Name and Role -->
      <div class="flex-1 min-w-0">
        <h4 class="text-white font-semibold text-sm">{{ nome }}</h4>
        <p class="text-neutral-400 text-xs">{{ cargo }}</p>
      </div>
      
      <!-- Rating Stars -->
      <div class="flex space-x-1">
        <svg v-for="i in 5" :key="i" class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  nome: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  }
})

const iniciais = computed(() => {
  return props.nome
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase()
})

defineOptions({
  name: 'TestimonialCard'
})
</script>