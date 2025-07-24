<template>
  <div class="w-full max-w-lg mx-auto">
    <!-- App Window Frame -->
    <div class="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-xl shadow-2xl overflow-hidden">
      <!-- Window Header -->
      <div class="bg-neutral-900/90 px-4 py-3 border-b border-neutral-700/50 flex items-center justify-between">
        <!-- Logo/Icon -->
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-secondary-500/20 rounded flex items-center justify-center">
            <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
        </div>
        
        <!-- Navigation Items -->
        <div class="flex items-center space-x-4">
          <div class="h-2 w-12 bg-neutral-600 rounded-full"></div>
          <div class="h-2 w-12 bg-neutral-600 rounded-full"></div>
          <div class="h-2 w-12 bg-neutral-600 rounded-full"></div>
        </div>
        
        <!-- Action Button -->
        <div class="h-6 w-16 bg-secondary-500/30 rounded"></div>
      </div>
      
      <!-- App Content -->
      <div class="p-6 space-y-6">
        <!-- Header Section -->
        <div class="space-y-3">
          <div class="h-4 w-32 bg-neutral-600 rounded"></div>
          <div class="h-3 w-48 bg-neutral-700 rounded"></div>
          <div class="h-3 w-40 bg-neutral-700 rounded"></div>
          <div class="flex space-x-2">
            <div class="h-6 w-16 bg-neutral-600 rounded"></div>
            <div class="h-6 w-20 bg-neutral-600 rounded"></div>
          </div>
        </div>
        
        <!-- Featured Component with Green Border -->
        <div class="relative">
          <div class="h-20 w-full bg-secondary-500/10 border-2 border-dashed border-secondary-500/50 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="w-8 h-8 bg-secondary-500/30 rounded mx-auto mb-2"></div>
              <div class="h-2 w-24 bg-secondary-500/40 rounded mx-auto"></div>
            </div>
          </div>
        </div>
        
        <!-- Component Grid -->
        <div class="grid grid-cols-3 gap-4">
          <div class="h-24 bg-neutral-700/50 rounded-lg flex items-center justify-center">
            <div class="space-y-2">
              <div class="w-8 h-2 bg-neutral-600 rounded mx-auto"></div>
              <div class="w-6 h-2 bg-neutral-600 rounded mx-auto"></div>
            </div>
          </div>
          <div class="h-24 bg-neutral-700/50 rounded-lg flex items-center justify-center">
            <div class="space-y-2">
              <div class="w-8 h-2 bg-neutral-600 rounded mx-auto"></div>
              <div class="w-6 h-2 bg-neutral-600 rounded mx-auto"></div>
            </div>
          </div>
          <div class="h-24 bg-neutral-700/50 rounded-lg flex items-center justify-center">
            <div class="space-y-2">
              <div class="w-8 h-2 bg-neutral-600 rounded mx-auto"></div>
              <div class="w-6 h-2 bg-neutral-600 rounded mx-auto"></div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="space-y-3">
          <div class="h-3 w-full bg-neutral-700 rounded"></div>
          <div class="h-3 w-3/4 bg-neutral-700 rounded"></div>
          <div class="flex justify-between items-center">
            <div class="h-8 w-24 bg-neutral-600 rounded"></div>
            <div class="h-8 w-20 bg-secondary-500/30 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute -top-2 -right-2 w-4 h-4 bg-secondary-500 rounded-full animate-pulse"></div>
    <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-400 rounded-full animate-pulse delay-300"></div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AppInterface'
})
</script>