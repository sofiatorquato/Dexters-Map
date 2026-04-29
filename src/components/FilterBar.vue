<script setup lang="ts">
import { ref } from 'vue';


</script>

<template>
  <div class="flex gap-4 text-gray-400 items-center p-5 border-t-1 border-blue-300">
    <p>STATUS</p>
    <div class="flex gap-4">
        <button class="border border-blue-300 p-2">Todos</button>
        <button class="border border-blue-300 p-2">Na mira</button>
        <button class="border border-blue-300 p-2">Monitorado</button>
        <button class="border border-blue-300 p-2">Amostra coletada</button>
        <button class="border border-blue-300 p-2">Eliminado</button>
        </div>   

        <p class="ml-10">AMEAÇA</p>

        <div class="flex gap-4">
        <button class="border border-blue-300 p-2">Todos</button>
        <button class="border border-blue-300 p-2">Na mira</button>
        <button class="border border-blue-300 p-2">Monitorado</button>
        <button class="border border-blue-300 p-2">Amostra coletada</button>
        <button class="border border-blue-300 p-2">Eliminado</button>
        </div>   
  </div>
</template>
