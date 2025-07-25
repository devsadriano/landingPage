<template>
  <div class="bg-gradient-to-br from-primary-950/95 to-primary-900/90 border border-secondary-500/30 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
    <!-- Header with project info -->
    <div class="bg-gradient-to-r from-primary-900/90 to-primary-800/80 px-4 py-3 border-b border-secondary-500/20">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <div>
            <h4 class="text-secondary-300 font-medium text-sm">Projeto Componentizado</h4>
            <p class="text-neutral-400 text-xs">Estrutura organizada</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
          <span class="text-secondary-400 text-xs">Ativo</span>
        </div>
      </div>
    </div>

    <div class="flex min-h-[320px]">
      <!-- File Tree -->
      <div class="w-1/2 bg-gradient-to-b from-primary-950/80 to-primary-900/60 p-5 border-r border-secondary-500/20">
        <div class="space-y-3 text-sm font-mono">
          <!-- Project root indicator -->
          <div class="flex items-center space-x-2 pb-2 border-b border-neutral-700/30">
            <div class="w-3 h-3 bg-secondary-500/30 rounded-full"></div>
            <span class="text-neutral-400 text-xs">meu-projeto</span>
          </div>
          
          <!-- Components folder -->
          <div class="flex items-center space-x-2 hover:bg-secondary-500/5 rounded px-2 py-1 transition-colors">
            <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
            <span class="text-secondary-300 font-medium">components</span>
            <svg class="w-3 h-3 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <!-- BaseButton.vue -->
          <div class="flex items-center space-x-2 ml-6 hover:bg-secondary-500/5 rounded px-2 py-1 transition-colors group">
            <div class="w-4 h-4 bg-secondary-500/20 rounded flex items-center justify-center">
              <svg class="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
              </svg>
            </div>
            <span class="text-secondary-300 group-hover:text-secondary-200">BaseButton.vue</span>
            <div class="w-1 h-1 bg-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <!-- BaseInput.vue -->
          <div class="flex items-center space-x-2 ml-6 hover:bg-secondary-500/5 rounded px-2 py-1 transition-colors group">
            <div class="w-4 h-4 bg-secondary-500/20 rounded flex items-center justify-center">
              <svg class="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
              </svg>
            </div>
            <span class="text-secondary-300 group-hover:text-secondary-200">BaseInput.vue</span>
            <div class="w-1 h-1 bg-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <!-- Composables folder -->
          <div class="flex items-center space-x-2 hover:bg-secondary-500/5 rounded px-2 py-1 transition-colors">
            <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
            <span class="text-blue-300 font-medium">composables</span>
            <svg class="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <!-- UseCustomer.ts -->
          <div class="flex items-center space-x-2 ml-6 hover:bg-blue-500/5 rounded px-2 py-1 transition-colors group">
            <div class="w-4 h-4 bg-blue-500/20 rounded flex items-center justify-center">
              <span class="text-blue-400 text-xs font-bold">TS</span>
            </div>
            <span class="text-blue-300 group-hover:text-blue-200">UseCustomer.ts</span>
            <div class="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <!-- pages folder -->
          <div class="flex items-center space-x-2 hover:bg-secondary-500/5 rounded px-2 py-1 transition-colors">
            <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
            <span class="text-purple-300 font-medium">pages</span>
            <svg class="w-3 h-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <!-- index.vue -->
          <div class="flex items-center space-x-2 ml-6 hover:bg-purple-500/5 rounded px-2 py-1 transition-colors group">
            <div class="w-4 h-4 bg-purple-500/20 rounded flex items-center justify-center">
              <svg class="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
              </svg>
            </div>
            <span class="text-purple-300 group-hover:text-purple-200">index.vue</span>
            <div class="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>

      <!-- Code Preview -->
      <div class="w-1/2 bg-gradient-to-b from-primary-950/60 to-primary-900/40 p-5">
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-purple-500/20 rounded flex items-center justify-center">
              <svg class="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
              </svg>
            </div>
            <span class="text-purple-300 text-sm font-mono font-medium">index.vue</span>
          </div>
          <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <div class="bg-primary-950/50 rounded-lg p-3 border border-neutral-700/30 overflow-hidden">
          <div class="space-y-0.5 text-[10px] font-mono leading-tight">
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">1</span>
              <span class="text-red-400">&lt;script</span> <span class="text-yellow-400">setup</span><span class="text-red-400">&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">2</span>
              <span class="text-purple-400">const</span> <span class="text-neutral-300">{ </span><span class="text-blue-300">funcaoPrincipal</span> <span class="text-neutral-300">} = </span><span class="text-yellow-400">UseCustomer</span><span class="text-neutral-300">()</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">3</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">4</span>
              <span class="text-purple-400">const</span> <span class="text-blue-300">handleClick</span> <span class="text-neutral-300">= () =&gt; {</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">5</span>
              <span class="text-neutral-300">&nbsp;&nbsp;</span><span class="text-blue-300">funcaoPrincipal</span><span class="text-neutral-300">()</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">6</span>
              <span class="text-neutral-300">}</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">7</span>
              <span class="text-red-400">&lt;/script&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">8</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">9</span>
              <span class="text-red-400">&lt;template&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">10</span>
              <span class="text-neutral-300">&nbsp;&nbsp;</span><span class="text-red-400">&lt;div&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">11</span>
              <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-red-400">&lt;BaseInput</span> <span class="text-yellow-400">placeholder</span><span class="text-neutral-300">=</span><span class="text-green-400">"..."</span> <span class="text-red-400">/&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">12</span>
              <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-red-400">&lt;BaseButton</span> <span class="text-yellow-400">@click</span><span class="text-neutral-300">=</span><span class="text-green-400">"handleClick"</span><span class="text-red-400">&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">13</span>
              <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Executar</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">14</span>
              <span class="text-neutral-300">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-red-400">&lt;/BaseButton&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">15</span>
              <span class="text-neutral-300">&nbsp;&nbsp;</span><span class="text-red-400">&lt;/div&gt;</span>
            </div>
            <div class="flex">
              <span class="text-neutral-500 w-4 text-right mr-2 flex-shrink-0">16</span>
              <span class="text-red-400">&lt;/template&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'FolderStructure'
})
</script>