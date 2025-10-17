<template>
    <section id="servicos" class="py-20 bg-advocacia-cinza-claro">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-advocacia-azul-principal mb-6">
                    Nossos Serviços
                </h2>
                <p class="text-xl text-advocacia-cinza-medio max-w-3xl mx-auto">
                    Oferecemos soluções jurídicas completas e personalizadas para atender 
                    todas as suas necessidades legais com excelência e eficiência.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Direito Civil -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Direito Civil</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Contratos, responsabilidade civil, direito de família, 
                        sucessões e questões patrimoniais.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Divórcio e Inventário
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Contratos em Geral
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Indenizações
                        </li>
                    </ul>
                </div>

                <!-- Direito Empresarial -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clip-rule="evenodd" />
                            <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Direito Empresarial</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Constituição de empresas, contratos comerciais, 
                        sociedades e questões corporativas.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Abertura de Empresas
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Contratos Comerciais
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Recuperação Judicial
                        </li>
                    </ul>
                </div>

                <!-- Direito Trabalhista -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Direito Trabalhista</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Defesa dos direitos trabalhistas, ações contra empresas 
                        e consultoria para empregadores.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Demissões e Rescisões
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Horas Extras
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Assédio Moral
                        </li>
                    </ul>
                </div>

                <!-- Direito Criminal -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Direito Criminal</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Defesa criminal, habeas corpus, recursos e 
                        acompanhamento de processos penais.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Defesa Criminal
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Habeas Corpus
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Recursos
                        </li>
                    </ul>
                </div>

                <!-- Direito Previdenciário -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2 1 1 0 000-2zm-4-1a1 1 0 011-1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Direito Previdenciário</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Aposentadorias, benefícios por incapacidade, 
                        pensões e revisões de benefícios.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Aposentadorias
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Auxílio Doença
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Revisões de Benefícios
                        </li>
                    </ul>
                </div>

                <!-- Consultoria Jurídica -->
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                    <div class="w-16 h-16 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">Consultoria Jurídica</h3>
                    <p class="text-advocacia-cinza-medio mb-6">
                        Orientação jurídica preventiva, análise de contratos 
                        e assessoria legal especializada.
                    </p>
                    <ul class="space-y-2 text-sm text-advocacia-cinza-medio">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Consultoria Preventiva
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Análise de Contratos
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 text-advocacia-dourado-principal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            Assessoria Legal
                        </li>
                    </ul>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16">
                <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-4">
                    Precisa de Ajuda Jurídica?
                </h3>
                <p class="text-advocacia-cinza-medio mb-8">
                    Entre em contato conosco e receba uma consultoria personalizada
                </p>
                <button class="bg-advocacia-dourado-principal hover:bg-advocacia-dourado-hover text-advocacia-azul-principal px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Fale Conosco Agora
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic
</script>