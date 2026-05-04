<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref,computed } from "vue";
import type { PointTuple } from "leaflet";
import { listaAlvos } from "../data/dataAlvo";

// Configurações iniciais do mapa (Miami)
const zoom = ref(12);
const center = ref<PointTuple>([25.7617, -80.1918]);

const prop = defineProps<{
  filtro: string
}>()

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const ameacaSelecionada = computed(() => {
    if (prop.filtro === "TODOS") {
        return listaAlvos
    }
    return listaAlvos.filter((alvo) => alvo.nivelAmeaca === prop.filtro)
})
</script>

<template>
  <!-- O segredo do Tailwind: o h-full aqui preenche o 'main' do seu App.vue -->
  <div class="w-full h-full min-h-[500px]">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <l-tile-layer :url="url" layer-type="base" name="OpenStreetMap"></l-tile-layer>
      
      <!-- Exemplo de Pin de Alvo -->
      <l-marker  v-for="alvo in ameacaSelecionada" :key="alvo.codigo" :lat-lng="alvo.coordenadas">
        <l-popup>ALVO: Arthur Mitchell (Trinity Killer)</l-popup>
      </l-marker>
      
    </l-map>
  </div>
</template>
