<script setup lang="ts">


const status = ["Todos", "Na mira", "Eliminado", "Amostra coletada"];
const ameaca = ["Todos", "Baixa", "Média", "Alta"];

const emits = defineEmits(['filtros', 'statusAlvo'])

</script>

<template>
  <div class="flex gap-4 text-gray-400 items-center p-5 border-t-1 border-blue-300 bg-black border-b-1">
    <p>STATUS</p>
    <div class="flex gap-4">
        <button class="border border-blue-300 px-2 cursor-pointer" v-for="item in status" :key="item" @click="$emit('statusAlvo',item.toUpperCase())">{{item}}</button>     
        </div>   

        <p class="ml-10">AMEAÇA</p>
        <div class="flex gap-4">
        <button class="border border-blue-300 px-2 cursor-pointer" v-for="itemAmeaca in ameaca" :key="itemAmeaca" @click="$emit('filtros',itemAmeaca.toUpperCase())">
        {{ itemAmeaca }}</button>
        </div>   
        <div>
          <span>Resultados:</span>
        </div>
  </div>
</template>
