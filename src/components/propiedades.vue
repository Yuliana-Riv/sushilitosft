<template>
  <div id="propiedades">
    <!-- Aqui la seccion de propiedades. -->

    <div>
      <div v-if="!propiedadItem.id" class="cnt_prop">
        <div class="pcnav">
          <div class="nav_filtros">
            <div class="dflx">
              <div class="prop_buscador">
                <input
                  type="text"
                  v-model="buscador"
                  :placeholder="'Buscar por ciudad o colonia'"
                />
                <img
                  src="../assets/propiedades/buscar.svg"
                  alt="icon buscador"
                />
              </div>
            </div>
            <div class="prop_select" :class="{ hgt: mostrar_t }">
              <div class="cnt_sel" @click="(mostrar_t = !mostrar_t), (mostrar_p = false)">
                <p class="act">{{ tipo }}</p>
                <img
                  v-if="!mostrar_t"
                 
                  src="../assets/propiedades/abajo.svg"
                  alt="icono flecha mostrar"
                />
                <img
                  v-else 
                  src="../assets/propiedades/arriba.svg"
                  alt="icono flecha mostrar"
                />
              </div>
              <div v-if="mostrar_t">
                <div v-for="(opt, key) in options_tipo" :key="key">
                  <div v-if="opt != tipo" class="cnt_sel_opt">
                    <p @click="tipo = opt">{{ opt }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="prop_select" :class="{ hgt: mostrar_p }">
              <div class="cnt_sel" @click="(mostrar_p = !mostrar_p), (mostrar_t = false)">
                <p class="act">{{ propiedad }}</p>
                <img
                  v-if="!mostrar_p"
                  src="../assets/propiedades/abajo.svg"
                  alt="icono flecha mostrar"
                />
                <img
                  v-else 
                  src="../assets/propiedades/arriba.svg"
                  alt="icono flecha mostrar"
                />
              </div>
              <div v-if="mostrar_p">
                <div v-for="(opt, key) in options" :key="key">
                  <div v-if="opt != propiedad" class="cnt_sel_opt">
                    <p @click="propiedad = opt">{{ opt }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="prop_precio">
              <input
                v-model="preciomin"
                type="number"
                id="cochera"
                name="cochera"
                min="0"
                step="any"
                :placeholder="'Precio mínimo'"
              />
            </div>
            <p class="g1">-</p>
            <div class="prop_precio">
              <input
                v-model="precio"
                type="number"
                id="cochera"
                name="cochera"
                min="0"
                step="any"
                :placeholder="'Precio máximo'"
              />
            </div>
          </div>
        </div>

        <div class="mvnav">
          <div class="nav_filtros">
            <div class="dflx algc">
              <div class="prop_buscador">
                <input
                  type="text"
                  v-model="buscador"
                  :placeholder="'Buscar por ciudad o colonia'"
                />
                <img
                  src="../assets/propiedades/buscar.svg"
                  alt="icon buscador"
                />
              </div>
              <img
                @click="mostrar_filtros = !mostrar_filtros"
                class="iplus"
                src="../assets/propiedades/plus.svg"
                alt=""
              />
            </div>
            <div
              v-if="mostrar_filtros"
              class="prop_select"
              :class="{ hgt: mostrar_t }"
            >
              <div class="cnt_sel">
                <p class="act">{{ tipo }}</p>
                <img
                  v-if="!mostrar_t"
                  @click="(mostrar_t = !mostrar_t), (mostrar_p = false)"
                  src="../assets/propiedades/abajo.svg"
                  alt="icono flecha mostrar"
                />
                <img
                  v-else
                  @click="(mostrar_t = !mostrar_t), (mostrar_p = false)"
                  src="../assets/propiedades/arriba.svg"
                  alt="icono flecha mostrar"
                />
              </div>
              <div v-if="mostrar_t" class="cnt_sel_opt">
                <p v-if="tipo == 'Rentar'" @click="tipo = 'Comprar'">Comprar</p>
                <p v-else @click="tipo = 'Rentar'">Rentar</p>
              </div>
            </div>
            <div
              v-if="mostrar_filtros"
              class="prop_select"
              :class="{ hgt: mostrar_p }"
            >
              <div class="cnt_sel">
                <p class="act">{{ propiedad }}</p>
                <img
                  v-if="!mostrar_p"
                  @click="(mostrar_p = !mostrar_p), (mostrar_t = false)"
                  src="../assets/propiedades/abajo.svg"
                  alt="icono flecha mostrar"
                />
                <img
                  v-else
                  @click="(mostrar_p = !mostrar_p), (mostrar_t = false)"
                  src="../assets/propiedades/arriba.svg"
                  alt="icono flecha mostrar"
                />
              </div>
              <div v-if="mostrar_p">
                <div v-for="(opt, key) in options" :key="key">
                  <div v-if="opt != propiedad" class="cnt_sel_opt">
                    <p @click="propiedad = opt">{{ opt }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="mostrar_filtros" class="prop_precio">
              <input
                v-model="preciomin"
                type="number"
                id="cochera"
                name="cochera"
                min="0"
                step="any"
                :placeholder="'Precio mínimo'"
              />
              <input
                v-model="precio"
                type="number"
                id="cochera"
                name="cochera"
                min="0"
                step="any"
                :placeholder="'Precio máximo'"
              />
            </div>
          </div>
        </div>

        <div class="dash_prop" :class="{ hgt: vermas }">
          <div v-for="(item, index) in propiedadesRandom" :key="index">
            <div class="box_prop" @click="setAddedPrd(item)">
              <div class="portada_prop">
                <!-- <img src="../assets/propiedades/propiedad_default.png" alt="foto propiedad">-->

                <img
                  v-if="item.propiedad == 'casa'"
                  :src="url + 'casas-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'terreno'"
                  :src="url + 'terrenos-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'local'"
                  :src="url + 'locales-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'oficina'"
                  :src="url + 'oficinas-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'bodega'"
                  :src="url + 'bodega-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'otros'"
                  :src="url + 'otros-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'nave'"
                  :src="url + 'nave-img/' + item.portada"
                  alt="foto propiedad"
                />
                <img
                  v-if="item.propiedad == 'industrial'"
                  :src="url + 'industrial-img/' + item.portada"
                  alt="foto propiedad"
                />
              </div>

              <div class="bx_tipo">
                <div class="ctn_tipo">
                  <p class="prop_tipo">{{ item.tipo }}</p>
                </div>
              </div>

              <div class="box_ctr">
                <!-- CASA -->
                <div v-if="item.propiedad == 'casa'" class="bar_prop">
                  <img
                    v-if="item.cuartos"
                    src="../assets/propiedades/cama.svg"
                    alt="icono cama"
                  />
                  <p v-if="item.cuartos" class="mr1">{{ item.cuartos }}</p>
                  <img
                    v-if="item.banos"
                    src="../assets/propiedades/bano.svg"
                    alt="icono baño"
                  />
                  <p v-if="item.banos" class="mr1">{{ item.banos }}</p>
                  <img
                    v-if="item.cochera"
                    src="../assets/propiedades/carro.svg"
                    alt="icono carro"
                  />
                  <p v-if="item.cochera" class="mr5">{{ item.cochera }}</p>
                  <img
                    v-if="item.superficie_casa"
                    src="../assets/propiedades/casa.svg"
                    alt="icono casa"
                  />
                  <p v-if="item.superficie_casa" class="mr1">
                    {{ item.superficie_casa }}m2
                  </p>
                  <img
                    v-if="item.superficie"
                    src="../assets/propiedades/terreno.svg"
                    alt="icono terreno"
                  />
                  <p v-if="item.superficie" class="mr1">
                    {{ item.superficie }}m2
                  </p>
                </div>

                <!-- TERRENO -->
                <div v-if="item.propiedad == 'terreno'" class="bar_prop">
                  <img
                    v-if="item.superficie"
                    src="../assets/propiedades/terreno.svg"
                    alt="icono terreno"
                  />
                  <p v-if="item.superficie" class="mr1">
                    {{ item.superficie }}m2
                  </p>
                </div>

                <!-- LOCAL -->

                <div v-if="item.propiedad == 'local'" class="bar_prop">
                  <img
                    v-if="item.superficie"
                    src="../assets/propiedades/terreno.svg"
                    alt="icono terreno"
                  />
                  <p v-if="item.superficie" class="mr1">
                    {{ item.superficie }}m2
                  </p>
                </div>

                <!-- OFICINA -->

                <div v-if="item.propiedad == 'oficina'" class="bar_prop">
                  <img
                    v-if="item.superficie"
                    src="../assets/propiedades/terreno.svg"
                    alt="icono terreno"
                  />
                  <p v-if="item.superficie" class="mr1">
                    {{ item.superficie }}m2
                  </p>
                </div>
              </div>
              <div class="box_ctr">
                <div class="info_prop">
                  <div class="bx_info">
                    <p class="ppre" v-if="item.precio !== 0">${{ item.precio | formatCurrency }} MXN</p>
                    <p class="ppre" v-else>Contacta a tu asesor</p>
                    <p class="ptit">{{ item.titulo }}</p>
                    <p class="pubi">{{ item.ubicacion }}</p>
                  </div>
                  <div class="bx_btn">
                    <img
                     
                      src="../assets/propiedades/mas.svg"
                      alt="icono mas"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="vermas" v-if="propiedadesRandom.length > 10" @click="vermas = !vermas">
          <span v-if="!vermas">Ver más</span> <span v-else>Ver menos</span>
        </p>
      </div>

      <div class="box_ctr" v-else>
        <PropiedadView />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { url } from "../global/index";
import PropiedadView from "./propiedadView.vue";
export default {
  name: "propiedades",
  components: {
    PropiedadView,
  },
  data() {
    return {
      buscador: "",
      tipo: "Todo", // Comprar
      options_tipo: ["Renta", "Venta", "Todo"],
      propiedad: "Todo", // Oficina, Local, Terreno , Casa,
      preciomin: "",
      precio: "",
      mostrar_t: false,
      mostrar_p: false,
      options: ["Oficina", "Local", "Terreno", "Casa", "Todo"],
      vermas: false,
      mostrar_filtros: false,
      url: url,
    };
  },
  async created() {
    await this.getAllInfoTrr("terrenos");
    await this.getAllInfoOfn("oficinas");
    await this.getAllInfoLcl("locales");
    await this.getAllInfoCss("casas");
    await this.getAllInfoNv("nave");
    await this.getAllInfoInd("industrial");
    await this.getAllInfoOtr("otros");
    await this.getAllInfoBod("bodega");
  },
  computed: {
    propiedadItem() {
      const item = this.$store.getters["propiedad/getAdded"];
      if (!item.id) return "";
      return item;
    },
    propiedadesRandom() {
      let data = [];
      if (Array.isArray(this.propiedades)) data = this.propiedades;
      const len = data.length;
      let added = [];
      let newRandomArr = [];
      for (var i = 0; i < len; i++) {
        let num = Math.floor(Math.random() * len);
        let encontrado = false;
        do {
          if (added.includes(num)) encontrado = true;
          if (encontrado) num = Math.floor(Math.random() * len);
        } while (encontrado);

        newRandomArr.push(data[num]);
      }
      return this.propiedades;
    },
    propiedades() {
      let data = [];

      let terrenos = this.$store.getters["terrenos/data"];
      let ta = [];
      for (let i = 0; i < terrenos.length; i++) {
        if (terrenos[i].estatus == "ACTIVO") {
          ta.push(terrenos[i]);
        }
      }
      terrenos = ta;
      let casas = this.$store.getters["casas/data"];
      let ca = [];
      for (let j = 0; j < casas.length; j++) {
        if (casas[j].estatus == "ACTIVO") {
          ca.push(casas[j]);
        }
      }
      casas = ca;
      let oficinas = this.$store.getters["oficinas/data"];
      let oa = [];
      for (let k = 0; k < oficinas.length; k++) {
        if (oficinas[k].estatus == "ACTIVO") {
          oa.push(oficinas[k]);
        }
      }
      oficinas = oa;
      let locales = this.$store.getters["locales/data"];
      let la = [];
      for (let l = 0; l < locales.length; l++) {
        if (locales[l].estatus == "ACTIVO") {
          la.push(locales[l]);
        }
      }
      locales = la;
      let naves = this.$store.getters["nave/data"];
      let nv = [];
      for (let l = 0; l < naves.length; l++) {
        if (naves[l].estatus == "ACTIVO") {
          nv.push(naves[l]);
        }
      }
      naves = nv;
      let industriales = this.$store.getters["industrial/data"];
      let it = [];
      for (let l = 0; l < industriales.length; l++) {
        if (industriales[l].estatus == "ACTIVO") {
          it.push(industriales[l]);
        }
      }
      industriales = it;
      let otros = this.$store.getters["industrial/data"];
      let ot = [];
      for (let l = 0; l < otros.length; l++) {
        if (otros[l].estatus == "ACTIVO") {
          ot.push(otros[l]);
        }
      }
      otros = ot;
      let bodegas = this.$store.getters["bodega/data"];
      let bg = [];
      for (let l = 0; l < bodegas.length; l++) {
        if (bodegas[l].estatus == "ACTIVO") {
          bg.push(bodegas[l]);
        }
      }
      bodegas = bg;

      if (
        Array.isArray(casas) &&
        (this.propiedad == "Casa" || this.propiedad == "Todo")
      ) {
        for (const item of casas) {
          data.push({
            ...item,
            propiedad: "casa",
          });
        }
      }
      if (
        Array.isArray(terrenos) &&
        (this.propiedad == "Terreno" || this.propiedad == "Todo")
      ) {
        for (const item of terrenos) {
          data.push({
            ...item,
            propiedad: "terreno",
          });
        }
      }
      if (
        Array.isArray(oficinas) &&
        (this.propiedad == "Oficina" || this.propiedad == "Todo")
      ) {
        for (const item of oficinas) {
          data.push({
            ...item,
            propiedad: "oficina",
          });
        }
      }
      if (
        Array.isArray(locales) &&
        (this.propiedad == "Local" || this.propiedad == "Todo")
      ) {
        for (const item of locales) {
          data.push({
            ...item,
            propiedad: "local",
          });
        }
      }
      if (
        Array.isArray(naves) &&
        (this.propiedad == "Nave" || this.propiedad == "Todo")
      ) {
        for (const item of naves) {
          data.push({
            ...item,
            propiedad: "nave",
          });
        }
      }
      if (
        Array.isArray(industriales) &&
        (this.propiedad == "Industrial" || this.propiedad == "Todo")
      ) {
        for (const item of industriales) {
          data.push({
            ...item,
            propiedad: "industrial",
          });
        }
      }
      if (
        Array.isArray(otros) &&
        (this.propiedad == "Otros" || this.propiedad == "Todo")
      ) {
        for (const item of otros) {
          data.push({
            ...item,
            propiedad: "otros",
          });
        }
      }
      if (
        Array.isArray(bodegas) &&
        (this.propiedad == "Bodega" || this.propiedad == "Todo")
      ) {
        for (const item of bodegas) {
          data.push({
            ...item,
            propiedad: "bodega",
          });
        }
      }

      if (this.buscador) {
        let filt = data.filter((item) =>
          this.includesItem(this.buscador, item.titulo)
        );
        data = filt;
      }

      if (this.preciomin && !isNaN(this.preciomin)) {
        let filt = data.filter((item) => item.precio >= this.preciomin);
        data = filt;
      }/**/

      if (this.precio && !isNaN(this.precio) ) { 
        let filt = data.filter((item) => (item.precio <= this.precio));
        data = filt;
      }

      if (this.tipo == "Renta" || this.tipo == "Venta") {
        let tipo = this.tipo.toLocaleLowerCase();

        let filt = data.filter((item) => item.tipo == tipo);
        data = filt;
      }

      return data;
    },
    terrenos() {
      let data = this.$store.getters["terrenos/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    casas() {
      let data = this.$store.getters["casas/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    oficinas() {
      let data = this.$store.getters["oficinas/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    locales() {
      let data = this.$store.getters["locales/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    nave() {
      let data = this.$store.getters["nave/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    industrial() {
      let data = this.$store.getters["industrial/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    otros() {
      let data = this.$store.getters["otros/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
    bodega() {
      let data = this.$store.getters["bodega/data"];

      if (!Array.isArray(data)) return [];

      let ta = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].estatus == "ACTIVO") {
          ta.push(data[i]);
        }
      }
      data = ta;

      return data;
    },
  },
  methods: {
    ...mapActions("terrenos", ["getAllInfoTrr"]),
    ...mapActions("oficinas", ["getAllInfoOfn"]),
    ...mapActions("locales", ["getAllInfoLcl"]),
    ...mapActions("casas", ["getAllInfoCss"]),
    ...mapActions("nave", ["getAllInfoNv"]),
    ...mapActions("industrial", ["getAllInfoInd"]),
    ...mapActions("otros", ["getAllInfoOtr"]),
    ...mapActions("bodega", ["getAllInfoBod"]),
    ...mapActions("propiedad", ["setAddedPrd"]),
    includesItem(search, name) {
      name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (search == "") {
        return true;
      }
      name = name.toLowerCase();
      search = search.toLowerCase();
      if (search == "") {
        return false;
      }
      return name.includes(search);
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
<style scoped>
#propiedades {
  height: auto;
  padding-top: 10.4vw;

  display: flex;
  justify-content: center;
}
.bx_tipo {
  display: flex;
  justify-content: right;

  position: absolute;
  margin-top: -7.76vw;
  margin-left: 13.4vw;
}
.ctn_tipo {
  display: flex;
  justify-content: right;
  align-items: center;
  background-image: url("../assets/propiedades/bandera.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 3.229vw;
  height: 1.094vw;
}
p.prop_tipo {
  color: white;
  padding-right: 0.417vw;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 3.229vw;
  height: 1.094vw;
  text-transform: uppercase;
  font-size: 0.521vw;
  font-weight: 700;
  font-family: "Montserrat";
}
.mvnav {
  display: none;
}
img.iplus {
  display: none;
}

.cnt_prop {
  background-color: white;

  width: 89.74vw;
}
.prop_sel_cnt {
  width: 89.74vw;
}
.nav_filtros {
  height: auto;
  display: flex;

  margin-top: 0.2vw;
}
.prop_buscador {
  border: 0.052vw solid rgba(54, 54, 54, 1);
  display: flex;
  align-items: center;
  border-radius: 0.26vw;
  height: 2.448vw;
  width: 14.063vw;
  justify-content: space-around;
  margin-right: 0.885vw;
}
.prop_buscador input {
  width: 70%;
  border: none;
  font-family: "Montserrat";
  color: rgba(54, 54, 54, 1);
  font-size: 0.625vw;
  font-weight: 400;
}
.prop_buscador input::placeholder {
  font-style: italic;
}
.prop_buscador img {
  width: 0.915vw;
}

.prop_precio {
  border: 0.052vw solid rgba(54, 54, 54, 1);
  display: flex;
  align-items: center;
  border-radius: 0.26vw;
  height: 2.448vw;
  width: 9.167vw;
}
.prop_precio input {
  width: 90%;
  border: none;
  font-family: "Montserrat";
  color: rgba(54, 54, 54, 1);
  font-size: 0.625vw;
  font-weight: 400;
}
.prop_precio input::placeholder {
  font-style: italic;
}
.prop_select {
  border: 0.052vw solid rgba(54, 54, 54, 1);

  border-radius: 0.26vw;
  height: 2.448vw;
  width: 6.615vw;
  margin-right: 0.885vw;

  display: grid;
  align-items: center;
}
.cnt_sel {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 2.448vw;
  cursor: pointer;
}

.hgt {
  height: auto !important;
}
.hgt_act {
  height: 2.448vw !important;
}
.prop_select p {
  width: 50%;
  font-family: "Montserrat";
  font-size: 0.625vw;
  font-weight: 700;
  color: rgba(54, 54, 54, 1);
}
.prop_select p.act {
  color: rgba(228, 4, 36, 1);
}
.prop_select img {
  width: 0.833vw;
  cursor: pointer;
}
.cnt_sel_opt {
  cursor: pointer;
  height: 2.448vw;
  border-top: 0.052vw solid rgba(54, 54, 54, 1);
  display: flex;
  align-items: center;
}
.cnt_sel_opt p {
  padding-left: 0.6vw;
}
.cnt_sel_opt p:hover {
  color: rgba(228, 4, 36, 1);
}
.dash_prop {
  margin-top: 2.813vw;
  display: flex;
  flex-wrap: wrap;
  /*  justify-content: space-between; */
  height: 29vw;
  overflow: hidden;
  transition: all 300ms;
  position: relative;
}

.box_prop {
  margin-bottom: 1.146vw;
  margin-right: 1.4vw;
  border-radius: 0.5vw;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  width: 16.458vw;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.box_prop img {
  width: 100%;
}
.portada_prop {
  height: 8.177vw;
  overflow: hidden;
  border-radius: 0.5vw 0.5vw 0vw 0vw;
}
.portada_prop img{
  object-fit: cover;
}
.bar_prop {
  display: flex;
  align-items: center;
  width: 14.688vw;
  height: 0.729vw;
  margin-top: 0.573vw;
  margin-bottom: 0.573vw;
}
.bar_prop img {
  height: 0.729vw;
  width: auto;
}
.bar_prop p {
  margin: 0vw;
  font-weight: 700;
  font-family: "Inter";
  font-size: 0.521vw;
  color: rgba(87, 86, 86, 1);
}

p.mr5 {
  margin-right: 2.604vw;
}
p.mr1 {
  margin-right: 0.781vw;
}

.info_prop {
  width: 14.688vw;
  display: flex;
  margin-bottom: 0.469vw;
}
.bx_info {
  width: 13.76vw;
}
.bx_info p {
  margin: 0vw;
}

p.ppre {
  color: rgba(228, 4, 36, 1);
  font-weight: 900;
  font-family: "Montserrat";
  font-size: 1.042vw;
  margin-bottom: 0.208vw;
}
p.ptit {
  color: rgba(87, 86, 86, 1);
  font-weight: 900;
  font-family: "Montserrat";
  font-size: 0.625vw;
  margin-bottom: 0.208vw;
}
p.pubi {
  color: rgba(54, 54, 54, 1);
  font-weight: 400;
  font-size: 0.521vw;
}
.bx_btn {
  display: flex;
  justify-content: right;
  align-items: end;
}
.bx_btn img {
  cursor: pointer;
  width: 1.042vw;
}
p.vermas {
  text-align: center;
  color: rgba(228, 4, 36, 1);
  font-weight: 900;
  font-size: 0.677vw;
  text-decoration: underline;
  cursor: pointer;
}
p.g1 {
    font-size: 2vw;
    line-height: 2.6vw;
    margin: 0 0.7vw;
}
@media (max-width: 768px) {
  #propiedades {
    padding-top: 47.4vw;
  }

  .mvnav {
    display: block;
  }
  .pcnav {
    display: none;
  }
  img.iplus {
    display: block;
    width: 12.319vw;
    margin-top: -2vw;
    margin-left: 4.106vw;
  }
  .cnt_prop {
    width: 76.329vw;
  }
  .nav_filtros {
    display: block;
  }
  .prop_buscador {
    width: 59.903vw;
    height: 13.285vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
  }
  .prop_buscador input {
    font-size: 2.899vw;
  }
  .prop_precio {
    width: 59.903vw;
    height: 13.285vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
  }
  .prop_precio input {
    font-size: 2.899vw;
    padding-left: 4vw;
  }
  .cnt_sel,
  .prop_select,
  .cnt_sel_opt {
    height: 13.285vw;
  }
  .prop_select img[data-v-1cdf1d94] {
    width: 4.833vw;
  }
  .cnt_sel_opt p {
    padding-left: 4.7vw;
  }
  .prop_select {
    width: 40.615vw;
    margin-bottom: 2vw;
    border-radius: 1.5vw;
  }
  .prop_select p {
    font-size: 2.899vw;
  }
  .prop_buscador img {
    width: 17.56px;
  }
  .dash_prop {
    height: 200vw;
  }
  .box_prop {
    margin-right: 0vw;
    margin-bottom: 5.072vw;
    width: 76.329vw;
  }
  .portada_prop {
    height: 37.923vw;
    border-radius: 2vw 2vw 0vw 0vw;
  }
  .bar_prop {
    width: 69.565vw;
    margin-top: 2.657vw;
    margin-bottom: 2.657vw;
  }
  .bar_prop p {
    font-size: 2.415vw;
  }
  .bar_prop p.mr1 {
    margin-right: 3.623vw;
  }
  .bar_prop p.mr5 {
    margin-right: 12.077vw;
  }
  .bar_prop img {
    height: 3.382vw;
    margin-right: 0.725vw;
  }
  .info_prop {
    width: 69.565vw;
    margin-bottom: 2.174vw;
  }
  .bx_info {
    width: 65.179vw;
    margin-bottom: 0.966vw;
  }
  p.ppre {
    font-size: 4.831vw;
  }
  p.ptit,
  p.pubi {
    font-size: 2.415vw;
  }

  .bx_btn img {
    width: 4.831vw;
  }

  p.vermas {
    font-size: 4.348vw;
    margin-top: 10.145vw;
  }
  .bar_prop {
    height: 3.382vw;
  }

  .bx_tipo {
    margin-top: -35.76vw;
    margin-left: 62.22vw;
  }
  .ctn_tipo {
    width: 14.976vw;
    height: 5.072vw;
  }
  p.prop_tipo {
    padding-right: 1.932vw;
    width: 14.976vw;
    height: 5.072vw;
    font-size: 2.415vw;
  }
}
</style>
