<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header/Navigation -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <img src="/images/logoEstendida.png" alt="Caobianco & Magalhães Advogados" class="h-48">
          </div>
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/#sobre" class="text-gray-600 hover:text-green-700 font-medium">ESCRITÓRIO</NuxtLink>
            <NuxtLink to="/#advogados" class="text-gray-600 hover:text-green-700 font-medium">ADVOGADOS</NuxtLink>
            <NuxtLink to="/#atuacao" class="text-gray-600 hover:text-green-700 font-medium">ATUAÇÃO</NuxtLink>
            <NuxtLink to="/informes" class="text-green-700 font-semibold border-b-2 border-green-700">INFORMES</NuxtLink>
          </nav>
          <a href="https://wa.me/556733411608" target="_blank" class="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
            FALE CONOSCO
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Informes Jurídicos</h1>
          <p class="text-xl text-green-100 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas notícias e mudanças legislativas 
            que impactam o agronegócio e o direito ambiental
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Featured Article -->
        <div class="lg:col-span-2">
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/agro-destaque.jpg" alt="Nova Lei do Agro" class="w-full h-64 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">DESTAQUE</span>
                <span class="text-gray-500 text-sm ml-4">25 de Outubro, 2025</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Nova Lei Marco do Agronegócio: Principais Mudanças e Impactos
              </h2>
              <p class="text-gray-600 mb-4">
                A recente aprovação da Lei Marco do Agronegócio traz importantes mudanças para o setor, 
                simplificando processos burocráticos e estabelecendo novos parâmetros para licenciamento ambiental. 
                Analisamos os principais pontos que afetarão produtores rurais e empresas do agro.
              </p>
              <a href="#" class="text-green-700 font-semibold hover:text-green-800">Leia mais →</a>
            </div>
          </article>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Recent Articles -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold mb-4">Artigos Recentes</h3>
            <div class="space-y-4">
              <article class="border-b pb-4 last:border-b-0">
                <h4 class="font-medium text-gray-900 mb-2">
                  <a href="#" class="hover:text-green-700">Regularização Fundiária: Novas Diretrizes 2025</a>
                </h4>
                <p class="text-sm text-gray-500">20 de Outubro, 2025</p>
              </article>
              <article class="border-b pb-4 last:border-b-0">
                <h4 class="font-medium text-gray-900 mb-2">
                  <a href="#" class="hover:text-green-700">Licenciamento Ambiental Simplificado para Pequenos Produtores</a>
                </h4>
                <p class="text-sm text-gray-500">18 de Outubro, 2025</p>
              </article>
              <article class="border-b pb-4 last:border-b-0">
                <h4 class="font-medium text-gray-900 mb-2">
                  <a href="#" class="hover:text-green-700">CAR Rural: Prazo Final para Regularização</a>
                </h4>
                <p class="text-sm text-gray-500">15 de Outubro, 2025</p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Todas as Notícias</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Article 1 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/meio-ambiente.jpg" alt="Compensação Ambiental" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">AMBIENTAL</span>
                <span class="text-gray-500 text-sm ml-3">22 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Novas Regras para Compensação Ambiental em Propriedades Rurais
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                IBAMA publica instrução normativa com novos critérios para compensação ambiental, 
                facilitando o processo para pequenos e médios produtores.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/agronegocio.jpg" alt="Crédito Rural" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">FINANCEIRO</span>
                <span class="text-gray-500 text-sm ml-3">19 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Plano Safra 2025/2026: Novos Recursos para Crédito Rural
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                Governo anuncia R$ 400 bilhões para financiamento da próxima safra, 
                com juros reduzidos para agricultura sustentável.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/agua-rural.jpg" alt="Recursos Hídricos" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded">HÍDRICO</span>
                <span class="text-gray-500 text-sm ml-3">17 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Outorga de Uso da Água: Novos Procedimentos Simplificados
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                ANA aprova resolução que simplifica o processo de outorga para uso da água 
                em propriedades rurais de até 100 hectares.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/florestal.jpg" alt="Código Florestal" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">FLORESTAL</span>
                <span class="text-gray-500 text-sm ml-3">14 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Código Florestal: Atualizações na Reserva Legal
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                Ministério do Meio Ambiente publica portaria com novas diretrizes 
                para compensação de Reserva Legal em outros imóveis.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/pesticidas.jpg" alt="Agrotóxicos" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">REGULATÓRIO</span>
                <span class="text-gray-500 text-sm ml-3">12 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                ANVISA Revisa Lista de Agrotóxicos Permitidos
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                Agência publica nova lista com produtos permitidos e proibidos, 
                estabelecendo prazo para adequação dos produtores.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/sustentabilidade.jpg" alt="Agricultura Sustentável" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">SUSTENTÁVEL</span>
                <span class="text-gray-500 text-sm ml-3">10 de Outubro, 2025</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Incentivos Fiscais para Agricultura de Baixo Carbono
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                Governo federal anuncia novos incentivos fiscais para produtores 
                que adotarem práticas de agricultura sustentável.
              </p>
              <a href="#" class="text-green-700 font-medium hover:text-green-800">Leia mais</a>
            </div>
          </article>

        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <nav class="flex space-x-2">
          <button class="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">← Anterior</button>
          <button class="px-3 py-2 text-sm bg-green-700 text-white rounded">1</button>
          <button class="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">2</button>
          <button class="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">3</button>
          <button class="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Próximo →</button>
        </nav>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logoEstendida.png" alt="Caobianco & Magalhães Advogados" class="h-12 mb-4">
            <p class="text-gray-400 text-sm">
              O C&M Advogados é uma referência de escritório de advocacia e consultoria jurídica especializada, 
              no verdadeiro estilo boutique, formado por uma equipe de Advogados entrosados, com sólida 
              formação e experiência comprovada.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Horário de atendimento</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <p class="font-medium">Segunda a sexta</p>
              <p>08 às 11:30 - 13 às 17h</p>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contato</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <div>
                <p class="font-medium">Endereço</p>
                <p>R. Paraíba, 189 - Jardim dos Estados, Campo Grande - MS, 79020-050</p>
              </div>
              <div>
                <p class="font-medium">Tel:</p>
                <p>(67) 3341-1608</p>
              </div>
              <div>
                <p class="font-medium">Email:</p>
                <p>contato@advocaciacm.adv.br</p>
              </div>
              <div>
                <p class="font-medium">Whatsapp</p>
                <p>6799999999</p>
              </div>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Siga-nos</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Caobianco & Magalhães Advogados Associados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: 'Informes Jurídicos - Caobianco & Magalhães Advogados',
  meta: [
    { name: 'description', content: 'Mantenha-se atualizado com as últimas notícias e mudanças legislativas do agronegócio e direito ambiental.' },
    { name: 'keywords', content: 'direito agrário, direito ambiental, agronegócio, legislação, notícias jurídicas, Caobianco Magalhães' }
  ]
})
</script>

<style scoped>
/* Custom styles if needed */
</style>