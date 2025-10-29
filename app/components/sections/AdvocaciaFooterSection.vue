<template>
    <!-- Seção de Contato com Vídeo de Fundo -->
    <section id="contato" class="relative py-20 overflow-hidden bg-gray-800">
        <!-- Video Background -->
        <div class="absolute inset-0 z-0">
            <video 
                class="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
                autoplay
                muted
                loop
                playsinline
                style="transform: scale(1.1); filter: sepia(1) hue-rotate(85deg) saturate(0.5) brightness(0.7);">
                <source src="/videos/vd.mp4" type="video/mp4">
                Seu navegador não suporta vídeos HTML5.
            </video>
        </div>

        <!-- Conteúdo sobre o vídeo -->
        <div class="relative z-10 w-full text-white" style="padding-left: 12%; padding-right: 12%;">
            <!-- Newsletter Section (compacta) -->
            <div class="text-center mb-12">
                <div class="bg-white bg-opacity-90 rounded-lg p-6 max-w-4xl mx-auto">
                    <div class="text-left">
                        <p class="text-sm text-green-600 font-semibold mb-2">ASSINE NOSSA NEWSLETTER</p>
                        <h2 class="text-xl font-bold text-gray-800 mb-4">
                            Receba novidades e estudos de caso sobre <span class="text-green-600">Direito Ambiental e Agro</span> em seu e-mail
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                            <div>
                                <label class="block text-xs text-gray-600 mb-1">Nome completo</label>
                                <input type="text" placeholder="Digite seu nome" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                            </div>
                            <div>
                                <label class="block text-xs text-gray-600 mb-1">E-mail</label>
                                <input type="email" placeholder="Digite seu e-mail" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                            </div>
                            <div>
                                <button class="w-full px-4 py-2 rounded-lg font-semibold text-white transition-colors text-sm" style="background-color: #364d40;">
                                    QUERO RECEBER >
                                </button>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">
                            AUTORIZO ESTE SITE A ENVIAR COMUNICAÇÕES POR E-MAIL E CONCORDO COM SUA POLÍTICA DE PRIVACIDADE
                        </p>
                    </div>
                </div>
            </div>

            <!-- Footer com informações do escritório (compacto) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-8">
                <!-- Logo e Info Principal -->
                <div class="md:col-span-1">
                    <div class="mb-4">
                        <img src="/images/logoEstendida.png" alt="Caobianco & Magalhães Advogados Associados" class="h-12 w-auto mb-3">
                    </div>
                    <h3 class="text-base font-bold mb-2">Caobianco & Magalhães</h3>
                    <p class="text-xs text-gray-300 mb-2">Advogados Associados</p>
                    <p class="text-xs text-gray-300 mb-2">(67) 3341-1608 | 6799999999</p>
                    <p class="text-xs text-gray-300 mb-3">contato@advocaciacm.adv.br</p>
                    <p class="text-xs text-gray-300 mb-3">R. Paraíba, 189 - Jardim dos Estados, Campo Grande - MS, 79020-050</p>
                    <p class="text-xs text-gray-300 mb-3">Segunda a sexta: 08h às 11:30 - 13h às 17h</p>
                </div>
                
                <!-- Redes Sociais -->
                <div class="md:col-span-1 text-center md:text-left">
                    <h4 class="text-sm font-semibold mb-3">Redes Sociais</h4>
                    <div class="flex justify-center md:justify-start space-x-3 mb-4">
                        <a href="#" class="text-gray-300 hover:text-white">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                    </div>
                </div>
                
                <!-- Links adicionais -->
                <div class="md:col-span-1 text-center md:text-right">
                    <h4 class="text-sm font-semibold mb-3">Links</h4>
                    <div class="space-y-1 text-xs">
                        <p><a href="#sobre" class="text-gray-300 hover:text-white">ESCRITÓRIO</a></p>
                        <p><a href="#sobre" class="text-gray-300 hover:text-white">SOBRE</a></p>
                        <p><a href="#advogados" class="text-gray-300 hover:text-white">ADVOGADOS</a></p>
                        <p><a href="#servicos" class="text-gray-300 hover:text-white">ATUAÇÃO</a></p>
                        <p><NuxtLink to="/informes" class="text-gray-300 hover:text-white">INFORMES</NuxtLink></p>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar (compacto) -->
            <div class="border-t border-gray-600 pt-4">
                <div class="flex flex-col md:flex-row justify-between items-center text-xs">
                    <p class="text-gray-400 mb-2 md:mb-0">
                        © 2025 Caobianco & Magalhães Advogados Associados. Todos os direitos reservados.
                    </p>
                    <div class="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">Termos e condições</a>
                            <a href="#" class="text-gray-400 hover:text-white">Política de Privacidade</a>
                        </div>
                        <p class="text-gray-400 text-xs">Site por <a href="#" class="text-green-400">ggr.marketing</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic
</script>