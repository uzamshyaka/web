<template>
  <div class="relative" :class="type==='semi'? 'w-24 h-24':'w-24 h-24'">
    <svg class="w-full h-full -rotate-90" :viewBox="type==='semi'? '0 0 36 18':'0 0 36 36'">
      <component
        :is="pathTag"
        :d="pathD"
        :cx="type==='full'? '18':null"
        :cy="type==='full'? '18':null"
        :r="type==='full'? '16':null"
        fill="none"
        stroke="#FB8C00" 
        stroke-width="3"
        stroke-linecap="round"
    />
      <component
        :is="pathTag"
        :d="pathD"
        :cx="type==='full'? '18' :null"
        :cy="type==='full'? '18' :null"
        :r="type==='full'?'18' :null"
        fill="none"
        stroke="#FB8C00"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>

    <div class="absolute inset-0 flex flex-col items-center justify-center":class="type==='semi'">
      <span class="text-lg font-bold text-white">{{ value }}%</span>
      <span class="text-[10px] uppercase text-white tracking-wide">
        {{ label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props= defineProps({
  value: Number,
  label: String,
  type:{
    type: String,
    default: 'full' // 'full' or 'semi'
  }
  
})
const pathTag = computed(() => (props.type === 'semi' ? 'path' : 'circle'))
const pathD = computed(() => (props.type === 'semi' ? 'M2 18 A 16 16 0 0 1 34 18' : null))



</script>