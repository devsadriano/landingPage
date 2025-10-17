<template>
    <section id="contato" class="py-20 bg-advocacia-azul-principal">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Entre em Contato
                </h2>
                <p class="text-xl text-gray-200 max-w-3xl mx-auto">
                    Agende uma consulta e tire suas dúvidas jurídicas com nossos especialistas
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div class="text-white">
                    <h3 class="text-2xl font-bold mb-8">Informações de Contato</h3>
                    
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Endereço</h4>
                                <p class="text-gray-200">Rua da Advocacia, 123 - Centro<br>São Paulo - SP, 01234-567</p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Telefone</h4>
                                <p class="text-gray-200">(11) 9 9999-9999<br>(11) 3333-3333</p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">E-mail</h4>
                                <p class="text-gray-200">contato@pauloadvogado.com.br<br>dr.paulo@pauloadvogado.com.br</p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-advocacia-dourado-principal rounded-lg flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-advocacia-azul-principal" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold">Horário de Atendimento</h4>
                                <p class="text-gray-200">Segunda a Sexta: 8h às 18h<br>Sábado: 8h às 12h</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold text-advocacia-azul-principal mb-6">Envie uma Mensagem</h3>
                    
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input 
                                type="text" 
                                placeholder="Seu Nome"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-advocacia-dourado-principal focus:border-advocacia-dourado-principal"
                            >
                            <input 
                                type="email" 
                                placeholder="Seu E-mail"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-advocacia-dourado-principal focus:border-advocacia-dourado-principal"
                            >
                        </div>
                        
                        <input 
                            type="tel" 
                            placeholder="Seu Telefone"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-advocacia-dourado-principal focus:border-advocacia-dourado-principal"
                        >
                        
                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-advocacia-dourado-principal focus:border-advocacia-dourado-principal">
                            <option>Selecione o assunto</option>
                            <option>Direito Civil</option>
                            <option>Direito Empresarial</option>
                            <option>Direito Trabalhista</option>
                            <option>Direito Criminal</option>
                            <option>Direito Previdenciário</option>
                            <option>Consultoria Jurídica</option>
                        </select>
                        
                        <textarea 
                            rows="4" 
                            placeholder="Descreva seu caso..."
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-advocacia-dourado-principal focus:border-advocacia-dourado-principal"
                        ></textarea>
                        
                        <button 
                            type="submit"
                            class="w-full bg-advocacia-dourado-principal hover:bg-advocacia-dourado-hover text-advocacia-azul-principal py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component logic
</script>