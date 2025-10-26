<template>
  <section class="relative py-20 bg-gradient-dark-br overflow-hidden border-t border-neutral-700/30">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div ref="conteudoSection"
      class="relative z-10 w-full opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style="padding-left: 12%; padding-right: 12%;"
      :class="{ 'opacity-100 translate-y-0': isVisible }">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center space-y-6 mb-16">
          <Badge texto="Conteúdo do Curso" />

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
            O que você vai <span class="text-secondary-400">Aprender</span>
          </h2>

          <p class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Um curso completo e estruturado que te leva do básico ao avançado,
            criando aplicativos reais com metodologia comprovada
          </p>
        </div>

        <!-- Course Modules -->
        <div class="space-y-4">
          <CourseModuleCard numero="1" titulo="Fundamentos Teóricos"
            descricao="Base sólida para entender desenvolvimento web e empreendedorismo" status="liberado" :delay="200"
            :modulos="[
              {
                titulo: 'Introdução ao Desenvolvimento Web',
                descricao: 'Frameworks, servidores, anatomia de aplicações e arquitetura'
              },
              {
                titulo: 'Empreendedorismo Digital',
                descricao: 'Dicas essenciais para criar e monetizar seus projetos'
              },
              {
                titulo: 'Boas Práticas de Desenvolvimento',
                descricao: 'Padrões de código, organização e metodologias ágeis'
              }
            ]" />

          <CourseModuleCard numero="2" titulo="Componentização Extrema"
            descricao="Domine a arte de criar componentes reutilizáveis e escaláveis" status="liberado" :delay="400"
            :modulos="[
              {
                titulo: 'Setup Inicial',
                descricao: 'Instalação do Git, Node.js, editor de código e ferramentas essenciais'
              },
              {
                titulo: 'Componentização com Nuxt',
                descricao: 'Sistema de componentes, propriedades, eventos e composição'
              },
              {
                titulo: 'Versionamento de Código',
                descricao: 'Git, GitHub, commits, branches e colaboração em equipe'
              },
              {
                titulo: 'Caixa Rápida com IA',
                descricao: 'Criação de sites e landing pages para venda imediata'
              }
            ]" />

          <CourseModuleCard numero="3" titulo="Projetos Práticos"
            descricao="Aplicações reais para consolidar o conhecimento adquirido" status="liberado" :delay="600"
            :modulos="[
              {
                titulo: 'Sistema de Cadastro com Auth',
                descricao: 'CRUD completo com autenticação usando Supabase'
              },
              {
                titulo: 'Sistema de Agendamento',
                descricao: 'Aplicação mais elaborada com gestão de horários e usuários'
              }
            ]" />

          <CourseModuleCard numero="4" titulo="Backend e Assinaturas"
            descricao="Infraestrutura robusta e monetização de aplicações" status="gravacao" :delay="800" :modulos="[
              {
                titulo: 'Supabase Auth',
                descricao: 'Autenticação completa: cadastro, login, recuperação de senha'
              },
              {
                titulo: 'Supabase Escala',
                descricao: 'Views, funções, triggers e otimização de performance'
              },
              {
                titulo: 'Supabase Segurança',
                descricao: 'RLS, JWT, políticas de segurança e boas práticas'
              },
              {
                titulo: 'Stripe Integration',
                descricao: 'API do Stripe para gerenciar assinaturas e pagamentos'
              }
            ]" />

          <CourseModuleCard numero="5" titulo="Publicação e Manutenção"
            descricao="Deploy profissional e gestão de aplicações em produção" status="gravacao" :delay="1000" :modulos="[
              {
                titulo: 'Deploy com Vercel',
                descricao: 'Publicação, domínio próprio, variáveis de ambiente e CI/CD'
              }
            ]" />

          <CourseModuleCard numero="6" titulo="Projeto Final do Curso"
            descricao="Criação completa de um SaaS do zero ao deploy" status="gravacao" :delay="1200" :modulos="[
              {
                titulo: 'SaaS Completo',
                descricao: 'Projeto final integrando todos os conceitos aprendidos no curso'
              }
            ]" />
        </div>

        <!-- Course Stats -->


        <!-- Action Button -->
        <div class="mt-16 text-center">
          <ActionButton texto="Começar Agora" :scrollToCheckout="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import explícito dos componentes
import Badge from '~/components/ui/Badge.vue'
import CourseModuleCard from '~/components/ui/CourseModuleCard.vue'
import ActionButton from '~/components/ui/ActionButton.vue'

// Scroll animation
const conteudoCursoSection = ref(null)
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

  if (conteudoCursoSection.value) {
    observer.observe(conteudoCursoSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Configurações do componente
defineOptions({
  name: 'ConteudoCursoSection'
})
</script>