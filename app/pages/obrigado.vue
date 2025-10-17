<template>
  <div class="min-h-screen bg-gradient-to-br from-advocacia-azul-escuro via-advocacia-azul-principal to-advocacia-azul-medio flex items-center justify-center px-4">
    <div class="max-w-2xl w-full">
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 text-center shadow-2xl">
        
        <div class="w-20 h-20 bg-gradient-to-br from-advocacia-dourado-principal to-advocacia-dourado-hover rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <h1 class="text-4xl font-bold text-white mb-6">
          Mensagem Enviada! 
        </h1>

        <p class="text-xl text-advocacia-azul-claro mb-8">
          Obrigado pelo seu contato! Nossa equipe jurídica entrará em contato em até 24 horas.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-advocacia-dourado-principal to-advocacia-dourado-hover text-white font-semibold rounded-lg transition-all duration-300"
          >
            Voltar ao Início
          </NuxtLink>

          <a 
            href="https://wa.me/5511999990000"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mensagem Enviada - Paulo Advogado',
  meta: [
    { name: 'description', content: 'Sua mensagem foi enviada com sucesso.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
