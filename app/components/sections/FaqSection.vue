<template>
  <section class="relative py-20 bg-gradient-dark-br overflow-hidden border-t border-neutral-700/30">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div ref="faqSection"
      class="relative z-10 container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible }">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center space-y-6 mb-16">
          <Badge texto="Dúvidas Frequentes" />

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
            Perguntas <span class="text-secondary-400">Frequentes</span>
          </h2>

          <p class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre o curso e o processo de compra
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-4">
          <FaqItem pergunta="Como tenho acesso ao curso?"
            resposta="Os dados de login e senha são enviados para o seu e-mail após a confirmação do pagamento. Você receberá um link de acesso à plataforma exclusiva onde poderá assistir às aulas e baixar os materiais complementares." />

          <FaqItem pergunta="Qual o tempo de acesso ao curso?"
            resposta="Você terá acesso vitalício ao curso. Isso significa que poderá assistir às aulas quantas vezes quiser, no seu próprio ritmo, sem pressa para terminar. Além disso, receberá todas as atualizações futuras gratuitamente." />

          <FaqItem pergunta="Como funciona a garantia?"
            resposta="Você tem 30 dias para acessar a plataforma e solicitar o reembolso caso o curso não atenda às suas expectativas. Nossa garantia é incondicional - se não ficar satisfeito, devolvemos 100% do valor pago, sem perguntas ou complicações." />

          <FaqItem pergunta="Preciso ter conhecimento prévio em programação?"
            resposta="Não é necessário ter conhecimento avançado em programação. O curso foi desenvolvido para pessoas que querem aprender a criar aplicações usando IA, desde iniciantes até desenvolvedores experientes que querem otimizar seu processo de desenvolvimento." />

          <FaqItem pergunta="O curso já está completo?"
            resposta="O curso está em fase de gravação, por isso oferecemos o preço especial de pré-lançamento. Os módulos são liberados conforme ficam prontos, e você já tem acesso aos primeiros módulos imediatamente após a compra. Você acompanha todo o processo de criação do curso." />

          <FaqItem pergunta="Posso parcelar o pagamento?"
            resposta="Sim! Você pode parcelar em até 12x no cartão de crédito, com parcelas de apenas R$ 49,90. Também aceitamos pagamento à vista via PIX com o mesmo valor promocional de R$ 497,00." />

          <FaqItem pergunta="Vou receber certificado de conclusão?"
            resposta="Sim! Ao concluir todos os módulos do curso, você receberá um certificado digital de conclusão que poderá usar em seu portfólio profissional e currículo, comprovando sua especialização no Método Componentização Extrema." />

          <FaqItem pergunta="Existe suporte durante o curso?"
            resposta="Sim! Você terá acesso à nossa comunidade exclusiva no Discord, onde poderá tirar dúvidas, compartilhar projetos e interagir com outros alunos. Além disso, há sessões de Q&A periódicas para esclarecimento de dúvidas mais complexas." />
        </div>

        <!-- Contact Support -->



      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import FaqItem from '~/components/ui/FaqItem.vue'

// Scroll animation
const faqSection = ref(null)
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

  if (faqSection.value) {
    observer.observe(faqSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Configurações do componente
defineOptions({
  name: 'FaqSection'
})
</script>