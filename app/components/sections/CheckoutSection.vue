<template>
  <section id="checkout" class="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-secondary opacity-5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div 
      ref="checkoutSection" 
      class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible }"
    >
      <div class="max-w-4xl mx-auto">
        <!-- Pre-launch Badge -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 border border-secondary-500/30 rounded-full px-6 py-2">
            <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
            <span class="text-secondary-400 font-semibold text-sm">🚀 PRÉ-LANÇAMENTO ATIVO</span>
            <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Main Checkout Card -->
        <div class="bg-gradient-to-br from-primary-950/90 to-primary-900/80 border-2 border-secondary-500/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-secondary-500/20 backdrop-blur-sm">
          <!-- Header -->
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-primary font-bold text-white mb-4">
              Garanta sua Vaga no
              <span class="text-secondary-400">Pré-Lançamento</span>
            </h2>
            <p class="text-lg text-neutral-300 leading-relaxed">
              Curso ainda em gravação - Aproveite o desconto exclusivo de lançamento
            </p>
          </div>

          <!-- Pricing Section -->
          <div class="grid md:grid-cols-2 gap-8 mb-10">
            <!-- Left - Price Comparison -->
            <div class="space-y-6">
              <!-- Original Price -->
              <div class="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6">
                <div class="text-center">
                  <p class="text-neutral-400 text-sm mb-2">Preço após finalização do curso</p>
                  <div class="relative">
                    <span class="text-3xl font-bold text-neutral-500 line-through">R$ 1.497,00</span>
                    <div class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full transform rotate-12">
                      Não!
                    </div>
                  </div>
                </div>
              </div>

              <!-- Current Price -->
              <div class="bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 border-2 border-secondary-500/40 rounded-xl p-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  67% OFF
                </div>
                <div class="text-center">
                  <p class="text-secondary-400 text-sm mb-2">Preço de Pré-Lançamento</p>
                  <div class="text-4xl md:text-5xl font-bold text-white mb-2">
                    R$ 497<span class="text-2xl">,00</span>
                  </div>
                  <p class="text-secondary-300 text-sm">
                    ou 12x de <span class="font-bold text-lg">R$ 49,90</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Right - What's Included -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                <svg class="w-6 h-6 text-secondary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                O que está incluído:
              </h3>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Acesso vitalício ao curso completo</span>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Módulos liberados conforme gravação</span>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Projetos práticos e templates</span>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Suporte da comunidade exclusiva</span>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Atualizações gratuitas para sempre</span>
                </div>
                
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-neutral-300 text-sm">Certificado de conclusão</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Purchase Button -->
          <div class="mb-8">
            <PurchaseButton texto="Garantir Minha Vaga - R$ 497,00" />
          </div>

          <!-- Payment Methods -->
          <div class="text-center mb-6">
            <p class="text-neutral-400 text-sm mb-4">Formas de pagamento aceitas:</p>
            <div class="flex justify-center items-center space-x-6">
              <div class="flex items-center space-x-2">
                <svg class="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
                <span class="text-neutral-300 text-sm">Cartão de Crédito</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span class="text-neutral-300 text-sm">PIX</span>
              </div>
            </div>
          </div>

          <!-- Guarantee -->
          <div class="bg-primary-950/50 border border-secondary-500/20 rounded-xl p-6 text-center">
            <div class="flex items-center justify-center space-x-2 mb-3">
              <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <h4 class="text-lg font-semibold text-white">Garantia de 30 dias</h4>
            </div>
            <p class="text-neutral-300 text-sm">
              Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>

          <!-- Urgency -->
          <div class="mt-8 text-center">
            <p class="text-secondary-400 text-sm">
              ⚡ Preço de pré-lançamento válido apenas enquanto o curso estiver em gravação
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import PurchaseButton from '~/components/ui/PurchaseButton.vue'

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