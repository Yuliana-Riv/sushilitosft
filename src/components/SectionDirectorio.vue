<template>
  <div class="directorio">
    <div id="directorio" class="sectiondirectorio">
      <!-- Indicador seccion -->
      <div class="idsecc">
        <h5>03.</h5>
        <hr />
        <h5>Directorio</h5>
      </div>
      <h2 class="titdirectorio">Asesores Inmobiliarios en Hermosillo</h2>
      <p class="desc">
        Conoce y contacta a nuestros asesores profesionales. Están capacitados
        con todas las certificaciones y experiencia necesaria para asesorarte y
        gestionar tu proyecto inmobiliario de principio a fin.
      </p>
      <div class="servs-c dir-c">
        <section class="cdflx" v-for="(d, i) in data" :key="i">
          <!--<div class="serv-item" v-for="(v,i) in conductorA" :key="i">-->
          <img class="ase" :src="srcImg(d.image)" alt="serv" v-if="d.image !== null"/>
          <img class="ase" src="../assets/agente_pc.png" alt="serv" v-else/>
          <p class="tl8">{{ d.name + " " + d.lastname }}</p>
          <p class="agent">Asesor Profesional<!--{{ d.role }}--></p>

          <div class="img-icon">
            <div class="llam">
              <a :href="'tel:+52' + d.phone">
                <button class="btn-iconll"></button>
              </a>
            </div>
            <div class="wha">
              <a :href="d.wlink" target="_blank" rel="noopener noreferrer">
                <button class="btn-iconwha"></button>
              </a>
            </div>
          </div>

          <!--</div>-->
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { url, endpointCodes } from "../global/index";

export default {
  async created() {
    await this.getAllInfoClb("colaborador");
  },
  computed: {
    data() {
      let data = this.$store.getters["colaborador/data"];
      console.log(data)
      return data;
    },
  },
  methods: {
    ...mapActions("colaborador", ["getAllInfoClb"]), 
    srcImg: function (img) {
      let src = `${url}/colaborador-img/${img}`;
      return src;
    },
  },
};
</script>

<style scoped>
.idsecc {
  display: flex;
  width: 40%;
  margin: 0 auto 0;
  padding-top: 14.492753623188406vw;
}

.idsecc h5 {
  font-size: 2.657004830917874vw;
  font-family: "Montserrat";
  text-transform: uppercase;
  color: #575656;
  margin: 0;
}
.idsecc .hr {
  width: 14.975845410628018vw;
  margin-top: 1.4vw;
  height: 0.04vw;
  margin-left: 3vw;
  margin-right: 3vw;
  border-bottom: 0.078vw solid #575656;
}

.sectiondirectorio {
  background-color: #efefef;
}

.sectiondirectorio {
  background: #e5e5e5;
  width: 100%;
  height: fit-content;
}
.sectiondirectorio .servs-c {
  padding-bottom: 30.676vw;
}

.titdirectorio {
  text-align: center;
  color: #e40424;
  margin: 0;
  margin-top: 20.048309178743963vw;
  margin-bottom: 22.464vw;
  margin-left: 19.32367149758454vw;
  margin-right: 17.32367149758454vw;

  font-size: 8.454106280193237vw;
  font-family: "Montserrat";
  font-weight: 700;
}
.sectiondirectorio .serv-item {
  width: 65.821vw;
  margin: 0 auto 8.696vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sectiondirectorio .servs-c.dir-c {
  width: 91.546vw;
  margin: auto;
}
  .sectiondirectorio .servs-c.dir-c section{
    margin-bottom: 17.150vw;
  }
.sectiondirectorio .dir-c .serv-item {
  width: 91.546vw;
}
.sectiondirectorio .dir-c .serv-item img {
  width: 48.792vw;
}
.sectiondirectorio .dir-c .stl {
  width: 80%;
}

.sectiondirectorio .serv-item img {
  width: 100%;
}
.sectiondirectorio .tl {
  font-family: var(--font-titulo1);
  color: var(--co-t1serv);
  font-weight: 700;
  font-size: 4.831vw;
  line-height: 111%;
  text-align: center;
  margin: 4.348vw 0;
}
.sectiondirectorio .stl {
  font-weight: 300;
  font-size: 3.865vw;
  line-height: 4.831vw;
  color: var(--co-t2serv);
  text-align: center;
  width: 52.899vw;
  margin-bottom: 1.5104166666666667vw;
}

.desc {
  text-align: center;
  color: var(--co-t2serv);
  font-family: var(--Inter);
  font-size: var(--fs-t2servmv);
  line-height: 5.021739130434782vw;
  font-weight: 400;
  /*width: 85%;*/
  width: 83%;
  margin: auto;
  margin-top: 9.903381642512077vw;
  margin-bottom: 10.38647342995169vw;
}

.ase {
  width: 49.758vw;
  height: 49.758vw;
  border-radius: 60vw;
  margin-left: 20vw;
  object-fit: cover;
  object-position: top;
}

.btn-iconll {
  width: 18.63285vw;
  height: 18.63285vw;
  background-size: cover;
  background-image: url(../assets/llamar_mo.png);
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
}

.btn-iconwha {
  /*width: 24.0096618357vw;*/
  width: 18.63285vw;
  height: 18.63285vw;
  background-image: url(../assets/wapp_mo.png);
  background-size: cover;
  background-repeat: no-repeat;
  border: 0;
  margin-left: 6.3768115942028984vw;
  cursor: pointer;
  /*background-position-x: 6.3768115942028984vw*/
}

.tl8 {
  text-align: center;
  font-family: "Montserrat";
  font-size: 6.280193236714976vw;
  font-weight: 700;
  color: #363636;
}

.sectiondirectorio .stl {
  text-align: center;
}

.agent {
  font-family: "Montserrat";
  font-size: 4.3478260869565215vw;
  text-align: center;
}

.img-icon {
  width: 41.64251207729468vw;
  height: 17.632850241545896vw;
  margin: auto;
  display: flex;
}

::placeholder {
  font-family: "Montserrat";
  font-size: 4.830917874396135vw;
  font-style: italic;
  color: #ffffff;
  font-weight: 400;
}

.idsecc {
  display: flex;
  width: 40%;
  margin: auto;
  padding-top: 14.492753623188406vw;
}

.sectionsucursales .idsecc h5 {
  color: gray;
}
.sectionsucursales .idsecc hr {
  background: gray;
  border-color: gray;
}

.idsecc h5 {
  font-size: 2.657004830917874vw;
  font-family: "Montserrat";
  text-transform: uppercase;
  color: #363636;
  margin: 0;
}

.idsecc hr {
  width: 14.975845410628018vw;
  border: 0.078vw solid gray;
  margin-top: 1vw;
  background: #ffffff;
}

@media (min-width: 768px) {
  .idsecc {
    display: flex;
    width: 20.2vw;
    margin: 0 auto 0;
    margin-left: 44.479166666666664vw;
    padding-top: 5vw;
  }

  .idsecc h5 {
    font-size: 0.6770833333333334vw;
    font-family: "Montserrat";
    text-transform: uppercase;
    color: gray;
    margin: auto;
    margin-left: 0vw;
    margin-right: 0vw;
  }
  .idsecc .hr {
    width: 3.229166666666667vw;
    margin-top: 0.3vw;
    height: 0.04vw;
    margin: 1.6666666666666667vw;
    border-bottom: 0.078vw solid black;
  }

  .sectiondirectorio {
    background-color: #efefef;
    /*height: 54.01041666666667vw;*/
  height: fit-content;
  }

  .tl8 {
    font-family: "Montserrat";
    font-size: 0.8333333333333334vw;
    color: #363636;
    text-align: center;
    font-weight: 700;
  }

  .titdirectorio {
    color: #e40424;
    font-family: "Montserrat";
    text-align: center;
    font-size: 2.604166666666667vw;
    margin-bottom: 1vw;
    margin-top: 5.989583333333334vw;
  }

  .desc {
    font-size: 1.5416666666666665vw;
    line-height: 115%;
    margin: auto;
    width: 45.78125vw;
    font-family: "Montserrat";
    font-size: 1.0416666666666665vw;
    color: #575656;
    font-weight: 600;
    margin-top: 2.4479166666666665vw;
    margin-bottom: 4.166666666666666vw;
  }

  .cdflx {
    display: grid;
  }

  .ase {
    width: 10.729166666666666vw;
    height: 10.729166666666666vw;
    border-radius: 20vw;
    margin: auto;
    object-fit: cover;
    object-position: top;
  }

  .sectiondirectorio .tl {
    font-size: 1.3541666666666667vw;
    font-family: "Montserrat";
    margin-bottom: 1vw;
    margin-bottom: -1vw;
    text-align: center;
  }

  .sectiondirectorio .dir-c .stl {
    width: 20%;
    line-height: 1vw;
  }

  .sectiondirectorio .stl {
    font-size: 0.9895833333333333vw;
    font-family: "Montserrat";
    width: 20%;
  }

  .sectiondirectorio .servs-c.dir-c {
    width: 60.156vw;
    padding-bottom: 1vw;
    display: flex;
    justify-content: center;
    justify-content: space-between;
  }
  .sectiondirectorio .servs-c.dir-c section{
    margin-bottom: 0;
  }
  .img-icon {
    width: 8.979166666666668vw;
    margin: auto;
    display: flex;
  }

  .llam {
    width: 4.4895833333vw;
  }

  .wha {
    width: 4.4895833333vw;
  }

  .btn-iconll {
    width: 3.802083333333333vw;
    height: 3.802083333333333vw;
    background-image: url(../assets/llamar_pc.png);
    background-size: cover;
    margin: auto;
    border: 0cm;
  }

  .btn-iconwha {
    width: 3.802083333333333vw;
    height: 3.802083333333333vw;
    background-image: url(../assets/wapp_pc.png);
    background-size: cover;
    margin: auto;
    border: 0cm;
    background-position-x: center;
  }

  .agent {
    font-family: "Montserrat";
    font-size: 0.9375vw;
    text-align: center;
    font-weight: 300;
    color: #575656;
    margin: 0 0 2vw;
  }

  ::placeholder {
    color: #ffffff;
    font-size: 1.0416666666666665vw;
    font-style: italic;
  }

  .idsecc {
    display: flex;
    width: 13%;
    margin: auto;
    padding-top: 6.5vw;
  }
  .idsecc h5 {
    font-size: 0.625vw;
    margin: 0;
  }
  .idsecc hr {
    width: 3.229166666666667vw;
    background: gray;
    border: 0.078vw solid gray;
    margin-top: 0.35vw;
  }
}
</style>
