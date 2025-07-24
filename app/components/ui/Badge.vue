<template>
    <div
        class="inline-flex items-center px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full backdrop-blur-sm">
        <span class="text-sm font-medium font-primary text-secondary-400">
            {{ texto }}
        </span>
    </div>
</template>

<script setup>
// Props do componente
defineProps({
    texto: {
        type: String,
        required: true
    }
})

// Configurações do componente
defineOptions({
    name: 'Badge'
})
</script>