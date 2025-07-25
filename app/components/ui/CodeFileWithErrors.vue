<template>
  <div class="bg-neutral-900/90 border border-red-500/30 rounded-lg overflow-hidden shadow-lg">
    <!-- File Header -->
    <div class="bg-neutral-800/80 px-4 py-2 border-b border-neutral-700/50 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
        <span class="text-neutral-300 text-sm font-mono">App.vue</span>
      </div>
      <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-red-500 rounded-full"></div>
          <span class="text-red-400 text-xs">12 erros</span>
        </div>
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <span class="text-yellow-400 text-xs">8 avisos</span>
        </div>
      </div>
    </div>

    <!-- Code Content -->
    <div class="p-4 font-mono text-sm max-h-96 overflow-y-auto">
      <!-- Line 1 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">1</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;template&gt;</span>
        </div>
      </div>

      <!-- Line 2 - Error -->
      <div class="flex items-start space-x-3 mb-1 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-neutral-500 text-xs w-6 text-right">2</span>
        <div class="flex-1 relative">
          <span class="text-neutral-300">&nbsp;&nbsp;&lt;</span>
          <span class="text-red-400 underline decoration-wavy">div class="contaner"</span>
          <span class="text-neutral-300">&gt;</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Line 3 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">3</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
          <span class="text-green-400">h1</span>
          <span class="text-neutral-300">&gt;{{ title }}&lt;/</span>
          <span class="text-green-400">h1</span>
          <span class="text-neutral-300">&gt;</span>
        </div>
      </div>

      <!-- Line 4 - Warning -->
      <div class="flex items-start space-x-3 mb-1 bg-yellow-500/10 border-l-2 border-yellow-500">
        <span class="text-neutral-500 text-xs w-6 text-right">4</span>
        <div class="flex-1 relative">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
          <span class="text-yellow-400 underline decoration-wavy">button onclick="handleClick()"</span>
          <span class="text-neutral-300">&gt;Clique&lt;/button&gt;</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Line 5 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">5</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;&lt;/</span>
          <span class="text-green-400">div</span>
          <span class="text-neutral-300">&gt;</span>
        </div>
      </div>

      <!-- Line 6 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">6</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;/template&gt;</span>
        </div>
      </div>

      <!-- Line 7 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">7</span>
        <div class="flex-1"></div>
      </div>

      <!-- Line 8 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">8</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;script&gt;</span>
        </div>
      </div>

      <!-- Line 9 - Error -->
      <div class="flex items-start space-x-3 mb-1 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-neutral-500 text-xs w-6 text-right">9</span>
        <div class="flex-1 relative">
          <span class="text-purple-400">export</span>
          <span class="text-neutral-300"> </span>
          <span class="text-purple-400">default</span>
          <span class="text-neutral-300"> {</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Line 10 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">10</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;</span>
          <span class="text-blue-400">data</span>
          <span class="text-neutral-300">() {</span>
        </div>
      </div>

      <!-- Line 11 - Error -->
      <div class="flex items-start space-x-3 mb-1 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-neutral-500 text-xs w-6 text-right">11</span>
        <div class="flex-1 relative">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text-purple-400">return</span>
          <span class="text-neutral-300"> {</span>
          <span class="text-red-400 underline decoration-wavy">title: "Meu App"</span>
          <span class="text-neutral-300"> }</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Line 12 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">12</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;},</span>
        </div>
      </div>

      <!-- Line 13 - Warning -->
      <div class="flex items-start space-x-3 mb-1 bg-yellow-500/10 border-l-2 border-yellow-500">
        <span class="text-neutral-500 text-xs w-6 text-right">13</span>
        <div class="flex-1 relative">
          <span class="text-neutral-300">&nbsp;&nbsp;</span>
          <span class="text-blue-400">methods</span>
          <span class="text-neutral-300">: {</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Line 14 -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">14</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text-yellow-400">handleClick</span>
          <span class="text-neutral-300">() {</span>
        </div>
      </div>

      <!-- Line 15 - Error -->
      <div class="flex items-start space-x-3 mb-1 bg-red-500/10 border-l-2 border-red-500">
        <span class="text-neutral-500 text-xs w-6 text-right">15</span>
        <div class="flex-1 relative">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="text-red-400 underline decoration-wavy">console.log("clicked")</span>
          <div class="absolute -right-2 top-0">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- More lines... -->
      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">16</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;}</span>
        </div>
      </div>

      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">17</span>
        <div class="flex-1">
          <span class="text-neutral-300">&nbsp;&nbsp;}</span>
        </div>
      </div>

      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">18</span>
        <div class="flex-1">
          <span class="text-neutral-300">}</span>
        </div>
      </div>

      <div class="flex items-start space-x-3 mb-1">
        <span class="text-neutral-500 text-xs w-6 text-right">19</span>
        <div class="flex-1">
          <span class="text-blue-400">&lt;/script&gt;</span>
        </div>
      </div>
    </div>

    <!-- Error Panel -->
    <div class="bg-red-500/10 border-t border-red-500/30 p-3">
      <div class="space-y-1 text-xs">
        <div class="flex items-center space-x-2">
          <div class="w-1 h-1 bg-red-500 rounded-full"></div>
          <span class="text-red-400">Erro: Classe CSS 'contaner' não encontrada</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-1 h-1 bg-red-500 rounded-full"></div>
          <span class="text-red-400">Erro: Sintaxe Vue.js incorreta</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-1 h-1 bg-yellow-500 rounded-full"></div>
          <span class="text-yellow-400">Aviso: Uso de console.log em produção</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CodeFileWithErrors'
})
</script>