<template>
  <div id="propiedad_view">
    <img
      @click="setAddedPrd('')"
      class="pv_volver"
      src="../assets/propiedades/Volver.svg"
      alt=""
    />
    <div class="pv_slider">
      <!-- SLIDER -->
      <div class="bx_tipo2">
        <div class="ctn_tipo2">
          <p class="prop_tipo2">{{ propiedad.tipo }}</p>
        </div>
      </div>

      <div v-if="propiedad.propiedad == 'casa'">
        <carousel :perPage="1" navigationEnabled>
          <slide v-for="(item, index) in propiedad.fotos" :key="index">
            <div class="sl-pro">
              <img
                class="pv_ft_prop"
                :src="url + 'casas-img/' + item.image"
                alt="foto propiedad"
              />
            </div>

            <!--<div class="" :style="{'background-image':'url('+srcImg(s.image_mv)+')'}"></div> -->
          </slide>
        </carousel>
      </div>
      <div v-if="propiedad.propiedad == 'terreno'">
        <carousel :perPage="1" navigationEnabled>
          <slide v-for="(item, index) in propiedad.fotos" :key="index">
            <div class="sl-pro">
              <img
                class="pv_ft_prop"
                :src="url + 'terrenos-img/' + item.image"
                alt="foto propiedad"
              />
            </div>
            <!--<div class="" :style="{'background-image':'url('+srcImg(s.image_mv)+')'}"></div> -->
          </slide>
        </carousel>
      </div>
      <div v-if="propiedad.propiedad == 'local'">
        <carousel :perPage="1" navigationEnabled>
          <slide v-for="(item, index) in propiedad.fotos" :key="index">
            <div class="sl-pro">
              <img
                class="pv_ft_prop"
                :src="url + 'locales-img/' + item.image"
                alt="foto propiedad"
              />
            </div>
            <!--<div class="" :style="{'background-image':'url('+srcImg(s.image_mv)+')'}"></div> -->
          </slide>
        </carousel>
      </div>
      <div v-if="propiedad.propiedad == 'oficina'">
        <carousel :perPage="1" navigationEnabled>
          <slide v-for="(item, index) in propiedad.fotos" :key="index">
            <div class="sl-pro">
              <img
                class="pv_ft_prop"
                :src="url + 'oficinas-img/' + item.image"
                alt="foto propiedad"
              />
            </div>
            <!--<div class="" :style="{'background-image':'url('+srcImg(s.image_mv)+')'}"></div> -->
          </slide>
        </carousel>
      </div>
    </div>
    <div class="pv_info">
      <div class="bx_pv_info">
        <img
          @click="setAddedPrd('')"
          class="back_img"
          src="../assets/propiedades/back_arrow.svg"
          alt=""
        />
        <p class="prop_pre" v-if="propiedad.precio !== 0">
          ${{ propiedad.precio | formatCurrency }} <span>MXN</span>
        </p>
        <p class="prop_pre" v-else>
          Contacta con tu asesor
        </p>
        <p class="prop_til">{{ propiedad.titulo }}</p>
        <p class="prop_ubi">{{ propiedad.ubicacion }}</p>
        <hr />
        <div class="icons_bar">
          <!-- CASA -->
          <div v-if="propiedad.propiedad == 'casa'" class="pv_bar_prop">
            <img
              v-if="propiedad.cuartos"
              src="../assets/propiedades/cama.svg"
              alt="icono cama"
            />
            <p v-if="propiedad.cuartos" class="mr1">{{ propiedad.cuartos }}</p>
            <img
              v-if="propiedad.banos"
              src="../assets/propiedades/bano.svg"
              alt="icono baño"
            />
            <p v-if="propiedad.banos" class="mr1">{{ propiedad.banos }}</p>
            <img
              v-if="propiedad.cochera"
              src="../assets/propiedades/carro.svg"
              alt="icono carro"
            />
            <p v-if="propiedad.cochera" class="mr5">{{ propiedad.cochera }}</p>
            <img
              v-if="propiedad.superficie_casa"
              src="../assets/propiedades/casa.svg"
              alt="icono casa"
            />
            <p v-if="propiedad.superficie_casa" class="mr1">
              {{ propiedad.superficie_casa }}m2
            </p>
            <img
              v-if="propiedad.superficie"
              src="../assets/propiedades/terreno.svg"
              alt="icono terreno"
            />
            <p v-if="propiedad.superficie" class="mr1">
              {{ propiedad.superficie }}m2
            </p>
          </div>

          <!-- TERRENO -->
          <div v-if="propiedad.propiedad == 'terreno'" class="pv_bar_prop">
            <img
              v-if="propiedad.superficie"
              src="../assets/propiedades/terreno.svg"
              alt="icono terreno"
            />
            <p v-if="propiedad.superficie" class="mr1">
              {{ propiedad.superficie }}m2
            </p>
          </div>

          <!-- LOCAL -->

          <div v-if="propiedad.propiedad == 'local'" class="pv_bar_prop">
            <img
              v-if="propiedad.superficie"
              src="../assets/propiedades/terreno.svg"
              alt="icono terreno"
            />
            <p v-if="propiedad.superficie" class="mr1">
              {{ propiedad.superficie }}m2
            </p>
          </div>

          <!-- OFICINA -->

          <div v-if="propiedad.propiedad == 'oficina'" class="pv_bar_prop">
            <img
              v-if="propiedad.superficie"
              src="../assets/propiedades/terreno.svg"
              alt="icono terreno"
            />
            <p v-if="propiedad.superficie" class="mr1">
              {{ propiedad.superficie }}m2
            </p>
          </div>
        </div>
        <div class="pv_etiquetas">
          <p
            v-for="(etiqueta, index) in propiedad.etiquetas"
            :key="index"
            class="ctn_eti"
          >
            {{ etiqueta }}
          </p>
        </div>

        <div class="pv_det">
          <div v-html="propiedad.detalles"></div>
        </div>
        <div class="pv_foo">
          <div class="ft_ag">
            <img
              :src="url + 'colaborador-img/' + propiedad.colb_image"
              alt="foto agente" v-if="propiedad.colb_image !== null"
            />
            <img class="ase" src="../assets/agente_pc.png" alt="serv" v-else/>
          </div>
          <div class="info_clb">
            <p class="name_clb">{{ propiedad.colb_fullname }}</p>
            <p class="sub_clb">Asesor Profesional</p>
          </div>
          <p class="pv_contactar">Contactar</p>
          <a :href="telcolb(propiedad )" >
            <img
              class="pv_icon_ctc"
              src="../assets/propiedades/Llamar.svg"
              alt="llamar icon"
          /></a>
          <a :href="propiedad.colb_wlink" target="_blank" rel="noopener noreferrer">
            <img
              class="pv_icon_ctc"
              src="../assets/propiedades/Wapp.svg"
              alt="whatsapp icon"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { url } from "../global/index";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  name: "propiedad_view",
  data() {
    return {
      url: url,
    };
  },
  computed: {
    propiedad() {
      const item = this.$store.getters["propiedad/getAdded"];
      if (!item.id) return "";
      return item;
    },
  },
  methods: {
    ...mapActions("propiedad", ["setAddedPrd"]),
    telcolb(propiedad) {
      if (!propiedad.colb_phone) return "";

      return "tel:+" + propiedad.colb_phone;
    },
  },
  filters: {
    formatCurrency(num) {
      if (!num || isNaN(num)) return num;

      //Se puede enviar como segundo parametro un json con el tipo de moneda.
      const formateado = num.toLocaleString("en");
      /* segundo parametro.
                , {
                    style: "currency",
                    currency: "MXN"
                }
            */

      //formateado MX$PRECIO -> procedemos a ternornar solo el precio
      //let split = formateado.split('$')

      return formateado;
    },
  },
};
</script>
<style>
img.pv_volver {
  display: none;
}
#propiedad_view {
  width: 89.74vw;
  min-height: 33.646vw;
  display: flex;
}
#propiedad_view .VueCarousel-pagination {
  display: none;
}
.pv_slider,
.pv_info {
  width: 50%;
}
.pv_info {
  width: 50%;
  overflow: hidden;
}
.sl-pro {
    width: 45vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.pv_slider img {
  /*width: 100%;
  height: 30vw;*/
  width: auto;
    height: 34vw;
  margin: auto;
}
.pv_slider {
  position: relative;
}
.bx_pv_info {
  width: 40.75vw; /*33.750vw;*/
  margin-left: 4.01vw;
}
p.prop_pre {
  font-size: 1.161vw;
  color: rgba(228, 4, 36, 1);
  font-weight: 900;
  font-family: "Montserrat";
  margin-top: 0vw;
  margin-bottom: 1.683vw;
}
p.prop_til {
  color: rgba(87, 86, 86, 1);
  font-size: 1.161vw;
  font-weight: 900;
  font-family: "Montserrat";
  margin: 0vw;
  text-transform: uppercase;
}
p.prop_ubi {
  color: rgba(54, 54, 54, 1);
  font-size: 0.696vw;
  font-weight: 400;
  font-family: "Montserrat";
  margin: 0vw;
  margin-top: 0.116vw;
  margin-bottom: 0.406vw;
}
.icons_bar {
  display: flex;
}
.icons_bar .pv_bar_prop {
  display: flex;
  height: 0.938vw;
  align-items: center;
  margin-top: 0.729vw;
  margin-bottom: 0.729vw;
}
.icons_bar .pv_bar_prop img {
  height: 0.938vw;
  width: auto;
  margin-right: 0.104vw;
}
.icons_bar .pv_bar_prop p {
  margin: 0vw;
  font-size: 0.696vw;
  font-family: "Inter";
  font-weight: 700;
  color: rgba(87, 86, 86, 1);
}
.icons_bar .pv_bar_prop p.mr1 {
  margin-right: 0.677vw;
}
.icons_bar .pv_bar_prop p.mr5 {
  margin-right: 1.771vw;
}

.pv_etiquetas {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.67vw;
}
p.ctn_eti {
  margin: 0vw;
  width: auto;
  height: 2.147vw;
  background-color: rgba(242, 242, 242, 1);
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.638vw 1.161vw;
  font-size: 0.696vw;
  font-weight: 400;
  font-family: "Montserrat";
  color: rgba(87, 86, 86, 1);
  margin-right: 0.58vw;
  margin-top: 0.2vw;
  border-radius: 0.2vw;
}

.pv_det {
  font-size: 0.696vw;
  color: rgba(54, 54, 54, 1);
  font-family: "Montserrat";
  margin-bottom: 4.759vw;
}
.pv_det p {
  margin-bottom: 0.3vw;
  margin-top: 0.3vw;
}

.pv_foo {
  display: flex;
  align-items: center;
  margin-top: 2.554vw;
  margin-bottom: 2.554vw;
}
.ft_ag {
  overflow: hidden;
  width: 6.326vw;
  height: 6.326vw;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.161vw;
}
.ft_ag img {
  height: 6.326vw;
}

p.name_clb {
  font-family: "Montserrat";
  font-size: 0.813vw;
  margin: 0vw 0;
  font-weight: 700;
  margin-bottom: 0.29vw;
  color: rgba(87, 86, 86, 1);
}
p.sub_clb {
  font-family: "Montserrat";
  font-size: 0.696vw;
  margin: 0vw;
  font-weight: 400;
  color: rgba(87, 86, 86, 1);
}
.info_clb {
  margin-right: 3.366vw;
}
p.pv_contactar {
  background-color: rgba(228, 4, 36, 1);
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 0.696vw;
  color: white;
  width: 7.371vw;
  height: 2.728vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.987vw;
  border-radius: 1.161vw;
  cursor: pointer;
}

img.pv_icon_ctc {
  width: 2.728vw;
  height: 2.728vw;
  margin-right: 0.987vw;
  cursor: pointer;
}

.bx_tipo2 {
  display: flex;
  justify-content: right;
  position: absolute;
  margin-top: 3vw;
  z-index: 900;
  margin-left: 34.9vw;
}
.ctn_tipo2 {
  display: flex;
  justify-content: right;
  align-items: center;
  background-image: url("../assets/propiedades/banderagd.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 9.983vw;
  height: 2.612vw;
}
p.prop_tipo2 {
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.983vw;
  height: 2.612vw;
  text-transform: uppercase;
  font-size: 1.451vw;
  font-weight: 700;
  font-family: "Montserrat";
}

img.back_img {
  width: 2.612vw;
  height: 2.612vw;
  cursor: pointer;
  margin-bottom: 0.522vw;
}

@media (max-width: 768px) {
  .back_img {
    display: none;
  }
  #propiedad_view {
    display: block;
    width: 76.329vw;
  }
  .pv_slider,
  .pv_info {
    width: 100%;
  }

  img.pv_volver {
    display: block;
    width: 19.082vw;
    height: 4.106vw;
    margin-bottom: 6.28vw;
  }
  .bx_pv_info {
    width: 100%;
    margin-left: 0vw;
  }

  p.prop_pre {
    font-size: 7.246vw;
    margin-bottom: 6.763vw;
  }
  p.prop_pre span {
    font-size: 4.831vw;
    margin-bottom: 6.763vw;
  }

  p.prop_til {
    font-size: 5.314vw;
    margin-bottom: 0.483vw;
  }

  p.prop_ubi {
    font-size: 3.865vw;
    margin-bottom: 3.382vw;
  }
  .icons_bar .pv_bar_prop {
    height: auto;
    flex-wrap: wrap;
  }

  .icons_bar .pv_bar_prop {
    margin-bottom: 6.877vw;
    margin-top: 4.831vw;
  }
  .icons_bar .pv_bar_prop img {
    height: 6.891vw;
    margin-right: 0.894vw;
    margin-bottom: 3.012vw;
  }
  .icons_bar .pv_bar_prop p {
    font-size: 3.865vw;
    margin-bottom: 3.012vw;
  }
  .icons_bar .pv_bar_prop p.mr1 {
    margin-right: 17.15vw;
  }

  p.ctn_eti {
    height: 10.145vw;
    padding: 2.657vw 4.831vw;
    font-size: 3.865vw;
    margin-bottom: 2.415vw;
    border-radius: 1.208vw;
  }
  .pv_det {
    font-size: 3.865vw;
    margin-bottom: 12.077vw;
  }
  .ft_ag {
    height: 29.71vw;
    width: 29.71vw;
    margin-right: 4.106vw;
  }
  .ft_ag img {
    height: 29.71vw;
  }
  .pv_foo {
    flex-wrap: wrap;
    justify-content: center;
  }
  p.name_clb {
    font-size: 3.865vw;
  }
  p.sub_clb {
    font-size: 3.382vw;
  }
  p.pv_contactar {
    width: 53.14vw;
    height: 14.251vw;
    font-size: 3.865vw;
    border-radius: 4.831vw;
    margin-right: 10vw;
    margin-left: 10vw;
    margin-top: 8.454vw;
  }
  img.pv_icon_ctc {
    height: 15.853vw;
    width: 15.853vw;
    margin-right: 2.334vw;
    margin-left: 2.334vw;
  }

  .bx_tipo2 {
    margin-top: 3vw;
    margin-left: 62vw;
  }
  .ctn_tipo2 {
    width: 14.976vw;
    height: 5.072vw;
    background-size: 127%;
  }
  p.prop_tipo2 {
    width: 14.976vw;
    height: 5.072vw;
    font-size: 2.415vw;
  }
}
</style>
