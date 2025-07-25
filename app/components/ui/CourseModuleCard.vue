<template>
  <div class="group bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-secondary-500/20 rounded-lg overflow-hidden hover:border-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10 transition-all duration-300">
    <!-- Header -->
    <div 
      class="p-6 cursor-pointer select-none group-hover:bg-primary-950/40 transition-colors"
      @click="toggleExpanded"
    >
      <div class="flex items-start justify-between">
        <div class="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
          <!-- Number Badge -->
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors flex-shrink-0">
            <span class="text-secondary-400 font-bold text-xs sm:text-sm">{{ numero }}</span>
          </div>
          
          <!-- Title and Description -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center space-x-2 mb-1">
              <h3 class="text-base sm:text-lg font-primary font-semibold text-white group-hover:text-secondary-100 transition-colors">
                {{ titulo }}
              </h3>
              <!-- Status Badge -->
              <div v-if="status === 'liberado'" class="flex items-center space-x-1">
                <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span class="text-xs text-secondary-400 font-medium">Liberado</span>
              </div>
              <div v-else class="flex items-center space-x-1">
                <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span class="text-xs text-yellow-400 font-medium">Em gravação</span>
              </div>
            </div>
            <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {{ descricao }}
            </p>
            <!-- Module count on mobile -->
            <div class="mt-2 sm:hidden">
              <span class="text-xs text-neutral-500 bg-primary-950/40 px-2 py-1 rounded-full">
                {{ modulos.length }} módulo{{ modulos.length > 1 ? 's' : '' }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Expand Icon -->
        <div class="flex items-center space-x-3 ml-2 flex-shrink-0">
          <!-- Module count on desktop -->
          <div class="hidden sm:block text-xs text-neutral-500 bg-primary-950/40 px-2 py-1 rounded-full">
            {{ modulos.length }} módulo{{ modulos.length > 1 ? 's' : '' }}
          </div>
          <div class="w-8 h-8 bg-secondary-500/10 rounded-full flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
            <svg 
              class="w-4 h-4 text-secondary-400 transition-transform duration-300"
              :class="{ 'rotate-180': isExpanded }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Expandable Content -->
    <div 
      class="overflow-hidden transition-all duration-400 ease-out"
      :class="isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="px-4 sm:px-6 pb-4 sm:pb-6">
        <div class="border-t border-secondary-500/20 pt-3 sm:pt-4">
          <div class="space-y-2 sm:space-y-3">
            <div 
              v-for="(modulo, index) in modulos" 
              :key="index"
              class="group/module flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-primary-950/30 rounded-lg hover:bg-primary-950/50 border border-transparent hover:border-secondary-500/20 transition-all duration-200"
            >
              <!-- Module Number -->
              <div class="w-6 h-6 sm:w-7 sm:h-7 bg-secondary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/module:bg-secondary-500/20 transition-colors">
                <span class="text-secondary-400 font-semibold text-xs">{{ numero }}.{{ index + 1 }}</span>
              </div>
              
              <!-- Module Info -->
              <div class="flex-1 min-w-0">
                <h4 class="text-white font-medium text-xs sm:text-sm mb-1 group-hover/module:text-secondary-100 transition-colors">
                  {{ modulo.titulo }}
                </h4>
                <p class="text-neutral-400 text-xs leading-relaxed">
                  {{ modulo.descricao }}
                </p>
              </div>
              
              <!-- Status Icon -->
              <div v-if="status === 'liberado'" class="w-4 h-4 sm:w-5 sm:h-5 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/module:bg-secondary-500/30 transition-colors">
                <svg class="w-2 h-2 sm:w-3 sm:h-3 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div v-else class="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/module:bg-yellow-500/30 transition-colors">
                <svg class="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  numero: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  modulos: {
    type: Array,
    required: true
  },
  status: {
    type: String,
    default: 'liberado' // 'liberado' ou 'gravacao'
  }
})

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

defineOptions({
  name: 'CourseModuleCard'
})
</script>