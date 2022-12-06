<template lang="pug">
.vlmodal Hello
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
}

const props = defineProps<Props>();
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
