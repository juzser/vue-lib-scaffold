<template>
<teleport
  :to="targetAttachRef"
  :disabled="!targetAttachRef"
>
  <transition :name="disableAnimation ? 'vlmodal-no-animated' : 'vlmodal-animated'">
    <div
      v-if="modelValue"
      :class="{ 'vlmodal': true, 'vlmodal--animated': !disableAnimation }"
      @keydown.esc="onPressEsc"
    >
      <div class="vlmodal-overlay" @click.prevent="hide">&nbsp;</div>
      <div
        class="vlmodal-wrapper"
        role="dialog"
        aria-modal
        tabindex="-1"
      >
        <div class="vlmodal-container" :style="containerStyles">
          <div v-if="slots.header" class="vlmodal-header">
            <slot name="header" />
          </div>
          <div class="vlmodal-body">
            <slot />
          </div>
          <div v-if="slots.footer" class="vlmodal-footer">
            <div class="vlmodal-footer-content">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from 'vue';

interface Props {
  /** The element selector to which the modal will be attached. */
  attachTo?: string;
  /** Click outside to close */
  clickToClose?: boolean;
  /** Disable animation */
  disableAnimation?: boolean;
  /** The modal max width. */
  maxWidth?: string;
  /** The modal max height. */
  maxHeight?: string;
  /** The modal min width. */
  minWidth?: string;
  /** The modal min height. */
  minHeight?: string;
  /** v-model */
  modelValue: boolean;
  /** Show close icon */
  showCloseIcon?: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const slots = useSlots();

const targetAttachRef = ref<HTMLElement | null>(null);

const containerStyles = computed(() => ({
  '--vlm-container-max-width': props.maxWidth,
  '--vlm-container-min-width': props.minWidth,
  '--vlm-container-max-height': props.maxHeight,
  '--vlm-container-min-height': props.minHeight,
}));

onMounted(() => {
  // Only attach if the element exists
  if (props.attachTo) {
    targetAttachRef.value = document.querySelector(props.attachTo);
  }
});

const show = () => {
  emits('update:modelValue', true);
}

const hide = () => {
  console.log('hide');
  emits('update:modelValue', false);
};

const onPressEsc = () => {
  console.log('onPressEsc');
}
</script>

<style lang="scss">
@import '../scss/main.scss';
</style>
