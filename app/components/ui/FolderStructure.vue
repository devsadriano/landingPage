<template>
  <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-secondary-500/30 shadow-2xl overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 bg-neutral-800/80 border-b border-neutral-700/50">
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-secondary-500 rounded-full"></div>
      </div>
      <div class="text-neutral-300 text-sm font-mono">project-structure</div>
      <div class="flex items-center space-x-1 px-2 py-1 bg-secondary-500/20 border border-secondary-400/30 rounded-md">
        <div class="w-2 h-2 bg-secondary-400 rounded-full"></div>
        <span class="text-secondary-300 text-xs">Organizado</span>
      </div>
    </div>

    <!-- Árvore de componentes -->
    <div class="p-6 font-mono text-sm leading-relaxed">
      <div class="flex">
        <!-- Sidebar com árvore -->
        <div class="w-1/2 pr-4 border-r border-neutral-700/50">
          <!-- Header da árvore -->
          <div class="flex items-center space-x-2 mb-4 text-neutral-400 text-xs">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
              </path>
            </svg>
            <span>Components</span>
          </div>

          <!-- Pasta components -->
          <div class="space-y-1">
            <div class="flex items-center space-x-2 text-neutral-300 bg-neutral-700/30 px-2 py-1 rounded">
              <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                </path>
              </svg>
              <span>components</span>
              <svg class="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            <!-- BaseButton.vue -->
            <div class="flex items-center space-x-2 ml-6 text-secondary-400">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>BaseButton.vue</span>
            </div>

            <!-- BaseInput.vue -->
            <div class="flex items-center space-x-2 ml-6 text-secondary-400">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>BaseInput.vue</span>
            </div>

            <!-- Pasta composables -->
            <div class="flex items-center space-x-2 text-neutral-300 mt-3">
              <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                </path>
              </svg>
              <span>composables</span>
              <svg class="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            <!-- UseCustomer.ts -->
            <div class="flex items-center space-x-2 ml-6 text-blue-300">
              <span class="text-xs bg-blue-500/20 px-1 rounded text-blue-400">TS</span>
              <span>UseCustomer.ts</span>
            </div>

            <!-- app.vue -->
            <div class="flex items-center space-x-2 text-secondary-300 mt-3">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>app.vue</span>
            </div>

            <!-- package.json -->
            <div class="flex items-center space-x-2 text-yellow-300">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>package.json</span>
            </div>
          </div>
        </div>

        <!-- Código do lado direito -->
        <div class="w-1/2 pl-4">
          <div class="text-neutral-400 text-xs mb-2">
            <svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            app.vue
          </div>
          <div class="space-y-1 text-xs">
            <div class="text-neutral-500">&lt;<span class="text-red-300">script</span> <span
                class="text-yellow-300">setup</span>&gt;</div>
            <div class="text-neutral-300 ml-2">const customer = <span class="text-secondary-400">UseCustomer</span>()
            </div>
            <div class="text-neutral-500">&lt;/<span class="text-red-300">script</span>&gt;</div>
            <div class="mt-3 text-neutral-500">&lt;<span class="text-red-300">template</span>&gt;</div>
            <div class="ml-2 text-neutral-500">&lt;<span class="text-yellow-300">main</span>&gt;</div>
            <div class="ml-4 text-neutral-500">&lt;<span class="text-secondary-300">BaseInput</span></div>
            <div class="ml-6 text-blue-300">v-model="customer.name"</div>
            <div class="ml-4 text-neutral-500">/&gt;</div>
            <div class="ml-4 text-neutral-500">&lt;<span class="text-secondary-300">BaseButton</span></div>
            <div class="ml-6 text-blue-300">@click="customer.save()"</div>
            <div class="ml-4 text-neutral-500">&gt;</div>
            <div class="ml-6 text-neutral-300">Salvar</div>
            <div class="ml-4 text-neutral-500">&lt;/<span class="text-secondary-300">BaseButton</span>&gt;</div>
            <div class="ml-2 text-neutral-500">&lt;/<span class="text-yellow-300">main</span>&gt;</div>
            <div class="text-neutral-500">&lt;/<span class="text-red-300">template</span>&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente da árvore de elementos
defineOptions({
  name: 'FolderStructure'
})
</script>