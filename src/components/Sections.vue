<template>
  <div id="Sections">
    <HeaderSec />
    <div v-if="historyOption == 'Usuarios'">
      <Usuarios />
      
    </div>

    <div v-if="historyOption == 'encuesta'">
      <Encuesta />
      
    </div>

    <div v-if="historyOption == 'Personalizacion'">
      <Perfil />
    </div> 
    <div v-if="historyOption == 'suscripciones'">
      <Suscripciones />
    </div>
    <div v-if="historyOption == 'Banner'">
      <Banner />
    </div>
    <div v-if="historyOption == 'direccion'">
      <Address />
    </div>
    <div v-if="historyOption == 'horario'">
      <Horario />
    </div>
    <div v-if="historyOption == 'telefono'">
      <Telefono />
    </div>
    <div v-if="historyOption == 'redes-sociales'">
      <SocialMedia />
    </div>
    <div v-if="historyOption == 'Sucursales'">
      <Sucursales />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import HeaderSec from "../components/HeaderSec.vue";
import Usuarios from "../views/usuarios/usuarios.vue";
import Perfil from "../views/profile/profile.vue"; 
import Suscripciones from "../views/suscripciones/suscripciones.vue";
import Banner from "../views/banner/banner.vue";
import Address from "../views/address/address.vue";
import Horario from "../views/horario/horario.vue";
import Telefono from "../views/telefono/telefono.vue";
import SocialMedia from "../views/social_media/social_media.vue";
import Encuesta from "../views/encuesta/encuesta.vue";
import Sucursales from "../views/sucursales/sucursales.vue";
export default {
  name: "Sections",
  components: {
    HeaderSec,
    Usuarios,
    Perfil, 
    Banner,
    Suscripciones,
    Address,
    Horario,
    Telefono,
    Encuesta, 
    SocialMedia,
    Sucursales,
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
