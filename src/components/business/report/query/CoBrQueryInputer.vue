<template>
    <view v-if="src" class="soft">
        <view v-if="src.__type == 'search'">

            <o-input-s 
                :def="src.__value_def"
                @result="(n: SN) => src.__value = n"
                :clazz="'fx-aii-sdo-sec-inp'"
            />
        </view>

        <view v-else-if="src.__type == 'date'">

            <o-input-s 
                :def="src.__value_def"
                @result="(n: SN) => src.__value = n"
                :clazz="'fx-aii-sdo-sec-inp'"
            />
        </view>

        <view v-else>{{ src.__type }}</view>
    </view>
</template>

<script setup lang="ts">
const prp = defineProps<{
    src: RSchemaQuery
}>()

</script>