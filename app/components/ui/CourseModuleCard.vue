<template>
    <div class="bg-neutral-900/80 border border-neutral-700/50 rounded-lg overflow-hidden transition-all duration-200"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }">
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
                            <span class="px-2 py-1 rounded text-xs" :class="statusConfig.badgeClass">
                                {{ statusConfig.label }}
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
            bgClass: 'bg-neutral-700',
            textClass: 'text-neutral-200',
            badgeClass: 'bg-neutral-700 text-neutral-300'
        },
        gravacao: {
            label: 'Em Gravação',
            bgClass: 'bg-neutral-600',
            textClass: 'text-neutral-300',
            badgeClass: 'bg-neutral-600 text-neutral-300'
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