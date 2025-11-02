<script setup lang="ts">
import { SiArchlinux } from 'vue-icons-plus/si';

const showArchBtw = ref<boolean>(false);
// NOTE: resort to using `style` as the icon has this weird
// quirk that when the component is initially rendered,
// it uses the `class` attribute, but when switched to another
// and back again, it becomes `className` which breaks the
// transitions.
const logoCss = computed<void>(() => {
  return {
    'transition-property': 'all',
    'transition-timing-function': 'var(--tw-ease, var(--default-transition-timing-function))',  /* cubic-bezier(0.4, 0, 0.2, 1) */
    '--tw-duration': '200ms',
    'transition-duration': '200ms'
  }
});
</script>

<template>
  <div class="mx-10">
    <h1 class="text-3xl text-rv-orange font-semibold">About Me</h1>
    <section>
      <p class="mt-4 text-base leading-relaxed">
        Besides from what I've yapped about earlier...
      </p>
      <ul class="ml-4 list-disc">
        <li> 
          <span class="inline-flex gap-x-2">
            I use 
            <div 
              :class="['flex items-center transition-all duration-200',
                { 'gap-x-2': showArchBtw },
              ]"
              @mouseenter="showArchBtw = true"
            >
              <span 
                :class="['transition-all duration-200 hover:cursor-pointer',
                  { 'text-rv-cyan': showArchBtw },
                  { 'underline underline-offset-4': !showArchBtw},
                ]"
              >arch{{ showArchBtw ? 'linux' : '' }}</span>
              <SiArchlinux 
                :style="logoCss"
                color="#61E2FF"
                :size='showArchBtw ? 24 : 0'
              />
            </div>
            btw 
          </span>
        </li>
        <li> awit </li>
      </ul>
    </section>
  </div>
</template>
