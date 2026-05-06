<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { ref,computed } from "vue";
import type { PointTuple } from "leaflet";
import { listaAlvos } from "../data/dataAlvo";

// Configurações iniciais do mapa (Miami)
const zoom = ref(12);
const center = ref<PointTuple>([25.7617, -80.1918]);

const props = defineProps<{
  ameaca: string,
  status: string
}>()

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const filtros = computed(() => {
  return listaAlvos.filter((alvo) => {
    const ameacaMatch = props.ameaca === "TODOS" || alvo.nivelAmeaca === props.ameaca;
    const statusMatch = props.status === "TODOS" || alvo.status === props.status;

    return ameacaMatch && statusMatch;
   })
})
const emits = defineEmits(['selecionar']);

</script>

<template>
  <div class="w-full h-full min-h-[500px]">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <l-tile-layer :url="url" layer-type="base" name="OpenStreetMap"></l-tile-layer>
      
      <l-marker  v-for="alvo in filtros" :key="alvo.codigo" :lat-lng="alvo.coordenadas" @click="$emit('selecionar',alvo)">
        <!-- <l-popup>ALVO: {{alvo.nomeReal}} ({{ alvo.codinome }})</l-popup> -->
      </l-marker>
      
    </l-map>
  </div>
</template>
