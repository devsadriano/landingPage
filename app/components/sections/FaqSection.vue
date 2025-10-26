<template>
  <section class="relative py-20 bg-gradient-dark-br overflow-hidden border-t border-neutral-700/30">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div ref="faqSection"
      class="relative z-10 w-full opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style="padding-left: 12%; padding-right: 12%;"
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
            resposta="Para ter acesso ao curso basta criar sua conta em nossa área de membros com o e-mail informado na hora da compra. Nossa plataforma está vinculada com o sistema de pagamento, ou seja, assim que o pagamento for identificado o conteúdo é liberado imediatamente na área de membros." />

          <FaqItem pergunta="Quanto tempo de acesso ao curso?"
            resposta="Acesso de 1 ano com renovação automática. A renovação automática pode ser cancelada se desejado, basta entrar em contato com a equipe de suporte." />

          <FaqItem pergunta="O curso está completo?"
            resposta="Neste exato momento, o curso encontra-se em fase de pré-lançamento, ou seja, mais da metade das aulas já estão disponíveis para o aluno e o conteúdo já é suficiente para você começar a desenvolver e publicar um aplicativo. Nas próximas semanas o conteúdo estará 100% completo com aulas avançadas e projetos práticos. No pré-lançamento, os alunos têm desconto de R$ 1.000,00 (MIL REAIS) no valor integral do curso. Aproveite o momento!" />

          <FaqItem pergunta="O que exatamente vou aprender?"
            resposta="No final do curso você será capaz de criar e publicar aplicativos web de forma completa e profissional, com segurança e escala usando Inteligência Artificial. Com esse conhecimento você poderá desenvolver aplicativos para projetos pessoais, para seu negócio, criar um SaaS, ou até mesmo prestar serviços de desenvolvimento para outras empresas." />

          <FaqItem pergunta="Vou aprender a criar aplicativos para celular?"
            resposta="Não, o curso é focado em aplicativos web e não aplicativos nativos mobile." />

          <FaqItem pergunta="Qual a diferença entre aplicativo web e aplicativo mobile nativo?"
            resposta="Aplicativo web é qualquer sistema que você acessa pelo navegador através de um endereço como www..., seja no notebook ou no celular. Aplicativo mobile nativo são os aplicativos que você baixa diretamente das lojas de aplicativos Apple App Store e Google Play." />

          <FaqItem pergunta="Preciso saber programação?"
            resposta="Absolutamente não! Com o Método Componentização Extrema não é necessário saber programação para criar seus aplicativos. Através do método você entenderá como funciona a anatomia de uma aplicação e entenderá os conceitos fundamentais por trás do desenvolvimento, e a Inteligência Artificial fica a cargo da escrita do código. Você atuará como um 'gerente' orquestrando e monitorando o trabalho da IA." />

          <FaqItem pergunta="Posso publicar os apps em servidores próprios?"
            resposta="Você pode publicar seus aplicativos onde você quiser, não há qualquer tipo de dependência de ferramentas externas. Você poderá publicar em serviços conhecidos como Vercel, Netlify ou Cloudflare, como também em sua própria VPS." />

          <FaqItem pergunta="Quais ferramentas vou aprender a usar para criar os apps?"
            resposta="O Método Componentização Extrema não é focado no ensino de uma ferramenta específica, mas sim nos fundamentos de desenvolvimento. Isso possibilita você usar qualquer IDE (ferramenta) de sua escolha. Recomendamos qualquer IDE que você baixa no PC como Cursor, Windsurf, Kiro, VSCode, GitHub Copilot, Trae entre outras do mesmo segmento." />

          <FaqItem pergunta="Vou aprender Lovable, Replit, Bolt?"
            resposta="Nosso curso não aborda nenhuma dessas ferramentas, pois seu modelo de negócio é incompatível com nossa filosofia de desenvolvimento. Focamos em ferramentas que nos dão 100% de liberdade em nossos projetos e que não nos deixem 'reféns' delas." />

          <FaqItem pergunta="Vou gastar algo além do curso para aprender?"
            resposta="Além do curso a única coisa que você vai 'gastar' é a IDE (ferramenta) de sua escolha." />

          <FaqItem pergunta="Inteligência Artificial x Bubble?"
            resposta="Bubble é uma ferramenta no-code para desenvolvimento visual, não recomendamos o uso de Bubble, pois não libera o código fonte da aplicação, possui problemas de performance, é extremamente limitada, precificação confusa (você não sabe quanto vai pagar no fim do mês), não permite publicar em servidor próprio, você e seu negócio estão sob total dependência de uma empresa. Com IA você tem total liberdade para desenvolver o que quiser, sem limitações, sem dependência, pode publicar onde quiser, preço previsível (sem surpresas), nenhuma dependência de ninguém." />

          <FaqItem pergunta="Como funciona o suporte?"
            resposta="O suporte funciona dentro da plataforma diretamente nos comentários das aulas ou por email. Em breve será lançada uma comunidade desenvolvida 100% com IA." />

          <FaqItem pergunta="Ficou com alguma dúvida?"
            resposta="Se sobraram dúvidas, clique no ícone flutuante de WhatsApp no canto da tela e nos envie sua dúvida." />
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