<template>
    <button class="
      inline-flex items-center justify-center
      px-8 py-4 
      bg-gradient-secondary
      text-white font-semibold text-lg
      rounded-lg
      shadow-secondary-lg hover:shadow-glow-secondary
      transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-out
      border border-secondary-500/30
      hover:border-secondary-400
      focus:outline-none focus:ring-4 focus:ring-secondary-500/20
    ">
        {{ texto }}
    </button>
</template>

<script setup>
defineProps({
    texto: {
        type: String,
        required: true
    }
})

defineOptions({
    name: 'ActionButton'
})
</script>