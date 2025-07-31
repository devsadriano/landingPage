<template>
    <div class="bg-neutral-900/80 rounded-lg overflow-hidden transition-all duration-200 relative"
        :class="[
            { 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible },
            status === 'gravacao' 
                ? 'border border-orange-500/30 shadow-lg shadow-orange-500/10' 
                : 'border border-neutral-700/50'
        ]">
        <!-- Indicador especial para conteúdo em gravação -->
        <div v-if="status === 'gravacao'" class="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-orange-500/60 border-r-[20px] border-r-orange-500/60">
            <div class="absolute -top-4 -right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        </div>
        <!-- Header do módulo -->
        <div class="p-6 cursor-pointer" @click="toggleExpanded">
            <div class="flex items-center justify-between">
                <!-- Informações principais -->
                <div class="flex items-center space-x-4">
                    <!-- Número da parte -->
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="statusConfig.bgClass">
                        <span class="font-semibold text-base" :class="statusConfig.textClass">{{ numero }}</span>
                    </div>
                    <!-- Título e status -->
                    <div>
                        <h3 class="text-base font-medium text-neutral-100 mb-1">
                            {{ titulo }}
                        </h3>
                        <div class="flex items-center space-x-2">
                            <span class="px-2 py-1 rounded text-xs flex items-center space-x-1" :class="statusConfig.badgeClass">
                                <!-- Ícone para status em gravação -->
                                <svg v-if="status === 'gravacao'" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5l-4.24 4.24M6.74 17.26L2.5 21.5m15-15l-4.24 4.24M6.74 6.74L2.5 2.5"/>
                                </svg>
                                <!-- Ícone para status liberado -->
                                <svg v-else class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>{{ statusConfig.label }}</span>
                            </span>
                            <span class="text-sm text-neutral-500">{{ moduleCount }} módulos</span>
                        </div>
                    </div>
                </div>
                <!-- Ícone de expansão -->
                <div class="transition-transform duration-200" :class="{ 'rotate-180': isExpanded }">
                    <svg class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <!-- Descrição -->
            <p class="text-sm text-neutral-400 mt-3 leading-relaxed">{{ descricao }}</p>
            
            <!-- Mensagem especial para conteúdo em gravação -->
            <div v-if="status === 'gravacao'" class="mt-3 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg">
                <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-orange-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    <span class="text-xs text-orange-400 font-medium">
                        Conteúdo sendo produzido - Disponível em breve!
                    </span>
                </div>
            </div>
        </div>

        <!-- Conteúdo expandido -->
        <div class="overflow-hidden transition-all duration-500 ease-in-out"
            :class="{ 'max-h-0': !isExpanded, 'max-h-96': isExpanded }">
            <div class="px-6 pb-6 border-t border-neutral-700/30">
                <div class="pt-4 space-y-3">
                    <div v-for="(modulo, index) in modulos" :key="index"
                        class="flex items-center space-x-3 p-3 rounded bg-neutral-800/30">
                        <!-- Ícone do módulo -->
                        <div class="w-6 h-6 rounded bg-neutral-700 flex items-center justify-center">
                            <svg class="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <!-- Informações do módulo -->
                        <div class="flex-1">
                            <h4 class="text-sm font-medium text-neutral-200">{{ modulo.titulo }}</h4>
                            <p class="text-xs text-neutral-400">{{ modulo.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

// Props
const props = defineProps({
    numero: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    modulos: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: 'liberado', // 'liberado' ou 'gravacao'
        validator: (value) => ['liberado', 'gravacao'].includes(value)
    },
    delay: {
        type: Number,
        default: 0
    }
})

// Estado local
const isExpanded = ref(false)
const isVisible = ref(false)

// Computed
const moduleCount = computed(() => props.modulos.length)

const statusConfig = computed(() => {
    const configs = {
        liberado: {
            label: 'Disponível',
            bgClass: 'bg-secondary-500/20 border border-secondary-500/30',
            textClass: 'text-secondary-400',
            badgeClass: 'bg-secondary-500/20 text-secondary-400 border border-secondary-500/30'
        },
        gravacao: {
            label: 'Em Gravação',
            bgClass: 'bg-orange-500/20 border border-orange-500/30',
            textClass: 'text-orange-400',
            badgeClass: 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/40 animate-pulse'
        }
    }
    return configs[props.status]
})

// Métodos
const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
}

// Lifecycle
onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, props.delay)
})

defineOptions({
    name: 'CourseModuleCard'
})
</script>