<script setup lang="ts">
import type{ Info } from '../types/InfoAlvo';

const props = defineProps<{
  exibir:boolean
  alvo: Info
}>()

const emits = defineEmits(['fecharModal']);


</script>

<template>
  <Teleport to="body">
  <div v-if="exibir" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60" @click.self="$emit('fecharModal')">
    <div class="bg-slate-800 p-6 rounded-lg max-w-md w-full">
      
        <div class="flex justify-between items-start">
          <div class="">
          <span>DEXTER MORGAN // PRIVATE FILE</span>
          <p>CASE FILE {{ alvo.codigo }}</p>
        </div>
          <button @click="$emit('fecharModal')">
          &times;
          </button>
        </div>
        <div class="flex">
          <img :src="alvo.img" alt="" class="w-35 h-35 min-w-[6rem] object-cover">
          <div class="ml-5">
            <p>{{ alvo.codinome }}</p>
            <p>{{ alvo.nomeReal }}</p>
            <button>{{ alvo.status }}</button>
          </div>
          
        </div>

        <div>
          <span>Crime report</span>
          <h2></h2>
        </div>
        
    </div>
  </div>
</Teleport>
</template>
