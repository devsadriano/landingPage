<template>
  <section class="relative py-20 bg-primary-950 overflow-hidden border-t border-neutral-700/30">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 right-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div 
      ref="depoimentosSection" 
      class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible }"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center space-y-6 mb-16">
          <Badge texto="Depoimentos" />
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
            O que nossos <span class="text-secondary-400">Alunos</span> dizem
          </h2>
          
          <p class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e sucesso com o Método Componentização Extrema
          </p>
        </div>
        
        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            nome="Carlos Silva"
            cargo="Desenvolvedor Frontend"
            texto="O método revolucionou minha forma de desenvolver. Consegui criar meu primeiro SaaS em apenas 3 semanas usando as técnicas aprendidas. A componentização extrema realmente funciona!"
          />
          
          <TestimonialCard
            nome="Ana Rodrigues"
            cargo="Empreendedora Digital"
            texto="Sem conhecimento técnico profundo, consegui criar uma plataforma de agendamentos completa. O curso é muito didático e prático. Recomendo para quem quer resultados rápidos."
          />
          
          <TestimonialCard
            nome="Pedro Santos"
            cargo="Freelancer"
            texto="Aumentei minha produtividade em 300%. O que antes levava meses para desenvolver, agora faço em semanas. O investimento no curso se pagou no primeiro projeto."
          />
          
          <TestimonialCard
            nome="Mariana Costa"
            cargo="Startup Founder"
            texto="Consegui validar minha ideia rapidamente criando um MVP funcional. A abordagem com IA me permitiu focar no negócio enquanto a tecnologia fluía naturalmente."
          />
          
          <TestimonialCard
            nome="Rafael Lima"
            cargo="Desenvolvedor Full Stack"
            texto="Mesmo sendo experiente, aprendi técnicas que não conhecia. A metodologia é sólida e os projetos práticos são excelentes para consolidar o conhecimento."
          />
          
          <TestimonialCard
            nome="Julia Ferreira"
            cargo="Designer UX/UI"
            texto="Como designer, sempre quis entender mais de desenvolvimento. O curso me deu autonomia para criar protótipos funcionais e me comunicar melhor com desenvolvedores."
          />
        </div>
        
        <!-- Stats -->
       
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'

// Scroll animation
const depoimentosSection = ref(null)
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

  if (depoimentosSection.value) {
    observer.observe(depoimentosSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Configurações do componente
defineOptions({
  name: 'DepoimentosSection'
})
</script>