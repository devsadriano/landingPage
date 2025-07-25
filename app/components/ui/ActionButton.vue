<template>
    <button @click="handleClick" class="
          inline-flex items-center justify-center
          px-6 py-3 
          bg-secondary-500
          text-primary-950 font-semibold text-base
          rounded-lg
          hover:bg-secondary-400
          active:bg-secondary-600
          transition-colors duration-200
          border border-secondary-500
          hover:border-secondary-400
          focus:outline-none focus:ring-2 focus:ring-secondary-500/50
        ">
        {{ texto }}
    </button>
</template>

<script setup>
const props = defineProps({
    texto: {
        type: String,
        required: true
    },
    scrollToCheckout: {
        type: Boolean,
        default: false
    }
})

const handleClick = () => {
    if (props.scrollToCheckout) {
        const checkoutSection = document.getElementById('checkout')
        if (checkoutSection) {
            checkoutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
}

defineOptions({
    name: 'ActionButton'
})
</script>