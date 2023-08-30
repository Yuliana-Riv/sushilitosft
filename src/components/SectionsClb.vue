<template>
  <div id="Sections">
    <HeaderSec />
    
    <div v-if="historyOption == 'colaborador'">
      <Colaboradores />
    </div>
    <div v-if="historyOption == 'terrenos'">
      <Terrenos />
    </div>
    <div v-if="historyOption == 'casas'">
      <Casas />
    </div>
    <div v-if="historyOption == 'oficinas'">
      <Oficinas />
    </div>
    <div v-if="historyOption == 'locales'">
      <Locales />
    </div>
    <div v-if="historyOption == 'locales'">
      <Locales />
    </div>
   
   
  </div>
</template>
<script>
import { mapActions } from "vuex";

import HeaderSec from "../components/HeaderSecClb.vue";

import Colaboradores from "../views/colaboradores/miPerfil.vue";
import Terrenos from "../views/terrenos/terrenos.vue";
import Casas from "../views/casas/casas.vue";
import Oficinas from "../views/oficinas/oficinas.vue";
import Locales from "../views/locales/locales.vue";
export default {
  name: "Sections",
  components: {
    HeaderSec,
   
    Colaboradores,
    Terrenos,
    Casas,
    Oficinas,
    Locales
   
  },

  data() {
    return {
      search_value: "",
      status: "",
      message: "",
      option: "Default",
    };
  },
  computed: {
    historyOption() {
      return this.$store.getters["main/getHistoryOption"];
    },
  },
  created() {
    let option = localStorage.getItem("nav");
    if (option != undefined && option != null && option != "") {
      this.option = option;
      this.setHistoryOptionMain(option);
    }
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),
    ...mapActions("main", ["getHistoryOption"]),
  },
};
</script>
<style scoped>
#Sections {
  background: var(--color-5);
  min-height: 59.25vw;
  width: 73.177083vw;
  margin-left: 4.166666666666666vw;
}

.proximamente p {
  color: var(--color-1);
  font-weight: 700;
  font-size: 5vw;
  margin-top: 11.5vw;
  margin-left: 15vw;
}
</style>
