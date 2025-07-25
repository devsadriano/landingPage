<template>
  <section id="checkout"
    class="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div ref="checkoutSection"
      class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible }">
      <div class="max-w-6xl mx-auto">
        <!-- Pre-launch Badge -->
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 border border-secondary-500/30 rounded-full px-6 py-3">
            <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
            <span class="text-secondary-400 font-semibold text-sm">🚀 PRÉ-LANÇAMENTO ATIVO</span>
            <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Main Title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-primary font-bold text-white mb-4">
            Garanta sua Vaga no
            <span class="text-secondary-400">Método Componentização Extrema</span>
          </h2>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
            Aproveite o desconto exclusivo de pré-lançamento e comece a criar SaaS com IA hoje mesmo
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left Column - Pricing -->
          <div class="space-y-8">
            <!-- Price Comparison -->
            <div
              class="bg-gradient-to-br from-primary-950/80 to-primary-900/60 border border-neutral-700/50 rounded-2xl p-8">
              <!-- Original Price -->
              <div class="text-center mb-6">
                <p class="text-neutral-400 text-sm mb-2">Preço normal após finalização</p>
                <div class="relative inline-block">
                  <span class="text-4xl font-bold text-neutral-500 line-through">R$ 1.497,00</span>
                  <div
                    class="absolute -top-3 -right-8 bg-red-500 text-white text-xs px-2 py-1 rounded-full transform rotate-12 animate-pulse">
                    NÃO!
                  </div>
                </div>
              </div>

              <!-- Arrow Down -->
              <div class="text-center mb-6">
                <svg class="w-8 h-8 text-secondary-400 mx-auto animate-bounce" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <!-- Current Price -->
              <div
                class="bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 border-2 border-secondary-500/40 rounded-xl p-6 relative overflow-hidden">
                <div
                  class="absolute top-0 right-0 bg-secondary-500 text-primary-950 text-sm font-bold px-4 py-2 rounded-bl-xl">
                  67% OFF
                </div>
                <div class="text-center">
                  <p class="text-secondary-400 text-sm mb-2 font-medium">Preço de Pré-Lançamento</p>
                  <div class="text-5xl md:text-6xl font-bold text-white mb-3">
                    R$ 497<span class="text-2xl">,00</span>
                  </div>
                  <div class="bg-secondary-500/10 border border-secondary-500/30 rounded-lg p-3">
                    <p class="text-secondary-300 text-lg font-semibold">
                      ou 12x de <span class="text-2xl font-bold text-secondary-400">R$ 49,90</span>
                    </p>
                    <p class="text-neutral-400 text-sm mt-1">no cartão de crédito</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Purchase Button -->
            <button
              class="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-950 font-bold py-5 px-8 rounded-xl transition-all duration-200 text-xl shadow-lg hover:shadow-secondary-500/25 transform hover:scale-105">
              🚀 GARANTIR MINHA VAGA - R$ 497,00
            </button>

            <!-- Payment Methods -->
            <div class="text-center">
              <p class="text-neutral-400 text-sm mb-4">Formas de pagamento aceitas:</p>
              <div class="flex justify-center items-center space-x-8">
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span class="text-neutral-300 text-sm font-medium">Cartão</span>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span class="text-neutral-300 text-sm font-medium">PIX</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - What's Included -->
          <div
            class="bg-gradient-to-br from-primary-950/60 to-primary-900/40 border border-neutral-700/50 rounded-2xl p-8">
            <h3 class="text-2xl font-primary font-bold text-white mb-6 flex items-center">
              <svg class="w-7 h-7 text-secondary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              O que você vai receber:
            </h3>

            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-4 p-3 bg-secondary-500/5 rounded-lg border border-secondary-500/20">
                <div
                  class="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">1 Ano de acesso completo</h4>
                  <p class="text-neutral-400 text-sm">Acesso total à plataforma por 12 meses</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-3 bg-secondary-500/5 rounded-lg border border-secondary-500/20">
                <div
                  class="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Suporte dentro da plataforma</h4>
                  <p class="text-neutral-400 text-sm">Tire suas dúvidas diretamente na plataforma</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-3 bg-secondary-500/5 rounded-lg border border-secondary-500/20">
                <div
                  class="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Módulos liberados conforme gravação</h4>
                  <p class="text-neutral-400 text-sm">Receba o conteúdo assim que for produzido</p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-3 bg-secondary-500/5 rounded-lg border border-secondary-500/20">
                <div
                  class="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Templates dos projetos</h4>
                  <p class="text-neutral-400 text-sm">Códigos prontos para acelerar seu desenvolvimento</p>
                </div>
              </div>
            </div>

            <!-- Guarantee -->
            <div class="bg-primary-950/50 border border-secondary-500/20 rounded-xl p-6 text-center">
              <div class="flex items-center justify-center space-x-3 mb-3">
                <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h4 class="text-lg font-semibold text-white">Garantia de 7 dias</h4>
              </div>
              <p class="text-neutral-300 text-sm">
                Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
              </p>
            </div>
          </div>
        </div>

        <!-- Urgency Message -->
        <div class="mt-12 text-center">
          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
            <p class="text-red-400 font-semibold text-lg">
              ⚡ ATENÇÃO: Preço de pré-lançamento válido apenas enquanto o curso estiver em gravação!
            </p>
            <p class="text-neutral-400 text-sm mt-2">
              Após a finalização, o valor será R$ 1.497,00
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll animation
const checkoutSection = ref(null)
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

  if (checkoutSection.value) {
    observer.observe(checkoutSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Configurações do componente
defineOptions({
  name: 'CheckoutSection'
})
</script>