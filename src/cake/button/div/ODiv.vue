<template>
    <material-button 
        class=""
        :class="clazz"
        
        :clazz_ripie="clazz_ripie"

        :clazz_outter="'w-100'"
        :clazz_inner="clazz_inner + ' w-100'"
        @touch="emt('touch')"
        >
        <slot></slot>
    </material-button>
</template>

<script setup lang="ts">
defineProps<{ clazz?: string, clazz_ripie?: string, clazz_inner?: string }>()
const emt = defineEmits([ 'touch' ])
</script>