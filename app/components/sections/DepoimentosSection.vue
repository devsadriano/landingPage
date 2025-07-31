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
          <Badge texto="Pré-Lançamento" />
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white leading-tight">
            O que a <span class="text-secondary-400">Comunidade</span> diz
          </h2>
          
          <p class="text-lg sm:text-xl font-body font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Estamos em pré-lançamento e ainda não temos alunos formados, mas veja o que nossa comunidade nas redes sociais já está falando sobre o método. 
            <span class="text-secondary-400 font-medium">Em breve, seus depoimentos estarão aqui!</span>
          </p>
        </div>
        
        <!-- YouTube Comments Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <YoutubeCommentCard
            nome="Edy Carlos"
            texto="Quanto conhecimento, parabéns Prof. Israel. Esses tipo de conteúdo levaríamos semestres para entender em uma universidade. Muitos até saem com diploma sem esse conhecimento"
            avatar="https://yt3.ggpht.com/ytc/AIdro_lx8ZJR49n5Dl7bac59xELcqZSDXVK1G_YrKHb2-WHvNio=s88-c-k-c0x00ffffff-no-rj"
          />
          
          <YoutubeCommentCard
            nome="Geovany Ferreira"
            texto="Muito bom, ao contrário do que muitos dizem 'Crie seu Saas em 1 dia com IA' que a gente vê por aí, as pessoas se encantam com a criação rápida, mas que vai apenas do 1 ao 3, já do 3 ao 5 o jogo é outro, isso que mostrou é a verdadeira realidade de desenvolvimento com IA"
            avatar="https://yt3.ggpht.com/QMuhhJQP67bnmTMDxfsyJ01qNr9jbRABvlyOMwlRMYD5NJl4sHgUMO7LDhIy4V0EswQPWhzf=s88-c-k-c0x00ffffff-no-rj"
          />
          
          <YoutubeCommentCard
            nome="Rodrigo Toledo"
            texto="Essa parada de componentização extrema mudou meu mindset completamente. Evoluí muito depois que vi o vídeo que você fala muito sobre isso."
            avatar="https://yt3.ggpht.com/rkn6zOexeltqC8dw4IWIGQHTO5z3pCrZ7PFKoCAIiViAvD8QuSWhAPdbIpNod3sv_K9Nw5ZdYg=s88-c-k-c0x00ffffff-no-rj"
          />
          
          <YoutubeCommentCard
            nome="Manoel Neto"
            texto="Voltando aqui no seu canal só para agradecer de verdade. Foi um grande achado ter assistido sua live criando um projeto do zero. Com suas técnicas de componentização extrema consegui desenvolver meu primeiro aplicativo em produção com Vue, já com pagamento integrado. Coloquei um app 100% funcional no ar por apenas 3 dólares!"
            avatar="https://yt3.ggpht.com/pI16YJNuZGWwQMiNP-4bsZhIEdTiWDqjWeFMAcRYnq7rWFxDLqz5bpQ0V39O8Kupymtf61rPDA=s88-c-k-c0x00ffffff-no-rj"
          />
          
          <YoutubeCommentCard
            nome="Bruno Lincoln"
            texto="O seu vídeo faz total sentido do começo ao fim. E obrigado pela sinceridade em compartilhar o que torna o caminho muito mais solidificado pro que cada um aqui tem trabalhado. Eu compartilho da mesma opinião sobre não ficar pulando de ferramenta em ferramenta sem querer se aprofundar no que realmente estamos fazendo."
            avatar="https://yt3.ggpht.com/Olc7VVawo75B7WyzlGY5XapvIR3GmAzkJUKumSogI_T52q6svPb4sk_ghmWp8V3dq_SLPL4xEg=s88-c-k-c0x00ffffff-no-rj"
          />
          
          <YoutubeCommentCard
            nome="Tony Riko"
            texto="Vídeo excelente e muito certo. Eu sempre pensei desse jeito e uso as ferramentas para desenvolver componentes dos meus projetos, e não sinto segurança em criar um aplicativo dependente de uma plataforma. Acho mais seguro ter total controle sobre o meu projeto. É mais fácil criar um projeto do zero do que refazer um projeto de outra pessoa."
            avatar="https://yt3.ggpht.com/ytc/AIdro_kN13zFuvw9yU5Kfm6tqHFO6tgyzOgmu069vuTmtbSkS9c=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
        
        <!-- Pre-launch Message -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-secondary-500/10 to-secondary-600/10 border border-secondary-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div class="flex items-center justify-center mb-4">
              <div class="w-3 h-3 bg-secondary-500 rounded-full animate-pulse mr-3"></div>
              <span class="text-secondary-400 font-semibold text-sm uppercase tracking-wider">Pré-Lançamento Ativo</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-primary font-bold text-white mb-4">
              Seja um dos primeiros alunos!
            </h3>
            <p class="text-neutral-300 leading-relaxed">
              O curso está sendo lançado hoje e você pode ser um dos pioneiros a dominar o 
              <span class="text-secondary-400 font-medium">Método Componentização Extrema</span>. 
              Garante sua vaga e em breve seu depoimento estará aqui inspirando outros desenvolvedores.
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
import Badge from '~/components/ui/Badge.vue'
import YoutubeCommentCard from '~/components/ui/YoutubeCommentCard.vue'

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