<template>
  <div id="contacto">
    <div class="flexic">
      <form
        class="formic"
        @submit.prevent="enviarMail(name, phone, email, mensaje)"
      >
        <div class="sectionformulario">
          <h2 class="tl3mo">Tu inmueble y tú están en buenas manos.</h2>
          <h2 class="tl3conmo">Contáctanos.</h2>
          <h2 class="tl3pc">Tu inmueble y tú están en buenas manos.</h2>
          <h2 class="tl3conpc">Contáctanos.</h2>
          <div class="bloqueform">
            <input
              class="inputbf inputname"
              type="text"
              placeholder="Nombre"
              v-model="name"
            />
            <input
              class="inputbf inputnumber"
              type="number"
              placeholder="Celular"
              v-model="phone"
            />
            <input
              class="inputbf inputemail"
              type="email"
              placeholder="Correo"
              v-model="email"
            />
            <!--<input
                class="inputbf inputsucursal"
                type="sucursal"
                placeholder="Sucursal"
                v-model="sucursal"
              />-->
            <textarea
              class="texa"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              v-model="mensaje"
            ></textarea>
            <div class="ad-btn">
              <div class="bloqueaviso">
                <div
                  class="inpcheck"
                  @click="aviso == true ? (aviso = false) : (aviso = true)"
                >
                  <div class="checked" v-if="aviso == true"></div>
                </div>
                <p class="txtaviso">
                  He leído el <a href="#">Aviso de Privacidad</a> antes de
                  enviar el formulario.
                </p>
              </div>

              <button type="submit" class="btnform">Enviar</button>
            </div>

            <div v-if="this.status == 'success'">
              <p class="cart_msg cart_success">{{ this.msg }}</p>
            </div>
            <div v-if="this.status == 'error'">
              <p class="cart_msg cart_error">{{ this.msg }}</p>
            </div>
          </div>
        </div>
      </form>
      <img src="../assets/contacto_mo.png" alt="" class="formimg mo" />
      <img src="../assets/formulario_pc.png" alt="" class="formimg pc" />
    </div>
  </div>
</template>

<script>
import { url } from "../global/index";
import Navigator from "../components/fixed/Navigator.vue";
import Propiedades from "../components/propiedades.vue"; 
import SectionServicios from "../components/SectionServicios.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HOME",
  components: {
    Navigator,
    Propiedades,
    Footer, 
    SectionServicios,
    Footer,
  },
  data() {
    return {
      url,
      name: "",
      phone: "",
      email: "",
      mensaje: "",
      status: "",
      msg: "",
      aviso: false,
    };
  },
  created() {},
  methods: {
    enviarMail: async function (name, phone, email, mensaje) {
      this.msg = "";
      this.status = "";

      if (this.aviso == false) {
        this.msg = "Acepta los términos y condiciones.";
        this.status = "error";
      } else if (name == undefined || name == "" || name == null) {
        this.msg = "El campo nombre no es valido.";
        this.status = "error";
      } else if (phone == undefined || phone == "" || phone == null) {
        this.msg = "El campo medio no es valido.";
        this.status = "error";
      } else if (email == undefined || email == "" || email == null) {
        this.msg = "El campo correo no es valido.";
        this.status = "error";
      } else if (mensaje == undefined || mensaje == "" || mensaje == null) {
        this.msg = "El campo comentarios no es valido.";
        this.status = "error";
      } else {
        let data = {
          name: name,
          phone: phone,
          email: email,
          mensaje: mensaje,
        };
        let response = await this.$store.dispatch(
          "admin/enviarMailContacto",
          data
        );
        console.log(response);
        if (response.status == "success") {
          this.status = "success";
          this.msg = "Mensaje enviado con exito.";
          this.name = "";
          (this.phone = ""), (this.email = ""), (this.mensaje = "");
          this.delStatus();
        } else {
          this.status = "error";
          this.msg =
            "Lo sentimos ha ocurrido un error al intentar entregar tu mensaje.";
        }
      }
    },
  },
};
</script>

<style scoped>
.flexic {
  background: linear-gradient(70deg, #9b0016, #e40424);
}

.inputbf {
  width: 100%;
  height: 14.975845410628018vw;
  margin-bottom: 5.381643vw;
  text-indent: 5%;
  font-size: 4vw;
  font-family: "Montserrat";
  color: white;
  border-radius: 2.4154589371980677vw;
  border: 0.21vw solid white;
  background-color: transparent;
  font-weight: 400;
  width: 74.15458937198068vw;
  margin-left: 11vw;
}

.texa {
  padding-top: 5.2vw;
  width: 100%;
  background-color: transparent;
  margin-bottom: 3.3816425120772946vw;
  border: 0.21vw solid white;
  text-indent: 5%;
  font-family: "Montserrat";
  font-size: 4vw;
  line-height: 4.676328502415459vw;
  color: white;
  height: 29.71vw;
  resize: none;
  border-radius: 2.4154589371980677vw;
  font-weight: 400;
  width: 74.15458937198068vw;
  margin-left: 11vw;
  padding-top: 4vw;
}

.btnform {
  background: #e40424;
  color: white;
  text-align: center;
  border: 0.21vw solid #e40424;
  font-size: 4vw;
  font-weight: 700;
  padding: 7.488vw 0 6.763vw;
  border-radius: 12vw;
  margin: 0;
  transition: 0.5s;
  width: 74.15458937198068vw;
  margin-left: 11vw;
  height: 19.082125603864732vw;
  margin-bottom: 13.526570048309178vw;
}

.btnform .txtbtn {
  margin-top: -1vw;
}

.tl3mo {
  font-family: "Montserrat";
  margin-left: 12.80193236714976vw;
  margin-right: 12.80193236714976vw;
  font-size: 8.454106280193237vw;
  color: #ffffff;
  margin-top: -6vw;
}

.tl3conmo {
  font-family: "Montserrat";
}

.tl3pc {
  display: none;
}

.tl3conpc {
  display: none;
}

.sectionformulario h2.tl3mo {
  text-align: left;
  font-family: "Montserrat";
  font-size: 8.454106280193237vw;
  color: white;
  font-weight: 700;
  width: 71vw;
  padding-top: 8vw;
}

.sectionformulario h2.tl3conmo {
  text-align: left;
  font-family: "Montserrat";
  font-size: 8.454106280193237vw;
  color: #44e9c8;
  font-weight: 700;
  width: 71vw;
  margin-top: -8vw;
  margin-left: 12.80193236714976vw;
  margin-right: 12.80193236714976vw;
}

.bloqueaviso {
  display: flex;
}

.bloqueaviso .inpcheck {
  width: 3.6231884057971016vw;
  height: 3.6231884057971016vw;
  margin-right: 2.5vw;
  border: 0.1vw solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12.80193236714976vw;
}
.bloqueaviso .inpcheck .checked {
  background: white;
  width: 3.3231884057971016vw;
  height: 3.3231884057971016vw;
}
.bloqueaviso .txtaviso {
  margin: 0;
  font-family: "Montserrat";
  font-size: 4vw;
  color: white;
  line-height: 7.5724637681159415vw;
  margin-bottom: 9.420289855072465vw;
  width: 70vw;
  margin-left: 2.80193236714976vw;
}
.txtaviso a {
  color: #44e9c8;
  text-decoration: none;
}

#btns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#btns > div {
  width: 50%;
}

.formimg.pc {
  display: none;
}

::placeholder {
  font-family: "Montserrat";
  font-size: 4.830917874396135vw;
  font-style: italic;
  color: #ffffff;
  font-weight: 400;
}

@media (min-width: 768px) {
  .flexic {
    background: linear-gradient(70deg, #9b0016, #e40424);
  }

  .inputbf {
    width: 2vw;
    height: 2.975845410628018vw;
    margin-bottom: 0.7291666666666666vw;
    text-indent: 5%;
    font-size: 1vw;
    font-family: "Montserrat";
    color: white;
    border-radius: 0.8vw;
    border: 0.1vw solid white;
    background-color: transparent;
    font-weight: 400;
    width: 29.010416666666668vw;
    margin-left: 0vw;
  }

  .texa {
    padding-top: 1.2vw;
    width: 50%;
    background-color: transparent;
    margin-bottom: 1.3816425120772946vw;
    border: 0.1vw solid white;
    text-indent: 5%;
    font-family: "Montserrat";
    font-size: 1vw;
    line-height: 4.676328502415459vw;
    color: white;
    height: 9.406249999999999vw;
    resize: none;
    border-radius: 0.8vw;
    font-weight: 400;
    width: 29.010416666666668vw;
    margin-left: 0vw;
    padding-top: 0vw;
  }

  .btnform {
    background: #e40424;
    color: white;
    text-align: center;
    border: 0.21vw solid #e40424;
    font-size: 1vw;
    line-height: 0vw;
    font-weight: 700;
    padding: 7.488vw 0 6.763vw;
    border-radius: 2vw;
    margin: 0;
    transition: 0.5s;
    width: 29.010416666666668vw;
    margin-left: 0vw;
    height: 0.082125603864732vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    margin-top: 1vw;
    margin-bottom: 6.5625vw;
  }

  .btnform .txtbtn {
    margin-top: -1vw;
  }

  .tl3mo {
  }

  .tl3conmo {
  }

  .tl3pc {
  }

  .tl3conpc {
  }

  .sectionformulario {
    margin-right: -45vw;
  }

  .sectionformulario h2.tl3mo {
    text-align: left;
    font-family: "Montserrat";
    font-size: 2vw;
    color: white;
    font-weight: 700;
    width: 25.979166666666668vw;
    margin-top: 0vw;
    padding-top: 8vw;
    padding-left: 1vw;
  }

  .sectionformulario h2.tl3conmo {
    text-align: left;
    font-family: "Montserrat";
    font-size: 2.454106280193237vw;
    color: #44e9c8;
    font-weight: 700;
    width: 71vw;
    padding-top: 6vw;
    padding-left: 1vw;
    margin-right: 12.80193236714976vw;
  }

  .bloqueaviso {
    display: flex;
  }

  .bloqueaviso .inpcheck {
    width: 3.731884057971016vw;
    height: 1.231884057971016vw;
    margin-right: 0.5vw;
    border: 0.1vw solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0vw;
  }
  .bloqueaviso .inpcheck .checked {
    background: white;
    width: 1.3231884057971016vw;
    height: 1.3231884057971016vw;
  }
  .bloqueaviso .txtaviso {
    margin: 0;
    font-family: "Montserrat";
    font-size: 0.82vw;
    color: white;
    line-height: 1.5724637681159415vw;
    width: 70vw;
    margin-left: 1.80193236714976vw;
  }
  .txtaviso a {
    color: #44e9c8;
    text-decoration: none;
  }

  .flexic {
    display: flex;
  }

  .flexic .formimg.mo {
    display: none;
  }
  .flexic .formimg.pc {
    display: flex;
    margin-right: 2.864583333333333vw;
    width: 52.604166666666664vw;
    height: 54.6vw;
  }

  .bloqueform {
    width: 29.010416666666668vw;
    margin: auto;
    margin-left: 13.90625vw;
  }

  .formic {
    width: 50.22916666666667vw;
  }

  ::placeholder {
    color: #ffffff;
    font-size: 1.0416666666666665vw;
    font-style: italic;
  }

}
@media (max-width: 768px){ 
  .flexic {
    display: flex;
    flex-direction: column;
  }
}
</style>
