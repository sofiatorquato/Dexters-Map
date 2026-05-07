<script setup lang="ts">


const status = ["TODOS", "ATIVO", "NA MIRA", "ELIMINADO", "AMOSTRA COLETADA"];
const ameaca = ["TODOS", "BAIXA", "MÉDIA", "ALTA"];

const emits = defineEmits(['filtros', 'statusAlvo'])

</script>

<template>
  <div class="flex gap-4 text-gray-400 items-center p-5 border-t-1 border-cyan-300/40 bg-black border-b-1">
    <p class="font-mono text-md">STATUS</p>
    <div class="flex gap-4">
        <button class="border border-cyan-300/40 px-2 cursor-pointer font-mono tracking-wider text-sm" v-for="item in status" :key="item" @click="$emit('statusAlvo',item.toUpperCase())">{{item}}</button>     
        </div>   

        <p class="ml-10 font-mono text-md">AMEAÇA</p>
        <div class="flex gap-4">
        <button class="border border-cyan-300/40 px-2 cursor-pointer font-mono text-sm" v-for="itemAmeaca in ameaca" :key="itemAmeaca" @click="$emit('filtros',itemAmeaca.toUpperCase())">
        {{ itemAmeaca }}</button>
        </div>   
        <div>
          <span>Resultados:</span>
        </div>
  </div>
</template>
