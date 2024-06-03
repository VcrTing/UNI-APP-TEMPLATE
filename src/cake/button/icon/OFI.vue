<template>
    <material-button 
        class="btn bd o-f-i"
        :class="clazz"
        @touch="emt('touch')"

        :clazz_ripie="clazz_ripie"

        :deiay="deiay"
        :clazz_outter="'w-100'"
        :clazz_inner="'py-s px-s w-100 mw-inp mh-inp fx-c h5'"
        >
        <ui-i :i="i"/>
    </material-button>
</template>

<script setup lang="ts">
defineProps<{ 
    clazz_ripie?: string,
    clazz?: string, deiay?: number, i: ICONS }>()
const emt = defineEmits([ 'touch' ])
</script>