<template>
  <div id="AddAdr">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            address, colonia, zip, city, state, country
          )
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="titulo" class="titulo">Dirección </label>
            <input
              v-model="address"
              type="text"
              id="titulo"
              name="titulo"
              class="wd-lrg"
              required
            />
          </div>
        </div>
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="ubicacion" class="ubicacion">Colonia </label>
            <input
              v-model="colonia"
              type="text"
              id="ubicacion"
              name="ubicacion"
            />
          </div>
          <div class="boxform">
            <label for="precio" class="precio">Código Postal </label>
            <input
              v-model="zip"
              type="number"
              id="precio"
              name="precio"
              min="1"
              step="any"
              required
            />
          </div>
        </div>
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="superficie" class="superficie"
              >Ciudad</label
            >
            <input
              v-model="city"
              type="text"
              id="superficie"
              name="superficie"
            />
          </div>
          <div class="boxform">
            <label for="superficie_casa" class="superficie_casa"
              >Estado</label
            >
            <input
              v-model="state"
              type="text"
              id="superficie_casa"
              name="superficie_casa"
            />
          </div>
          <div class="boxform">
            <label for="superficie_casa" class="superficie_casa"
              >País</label
            >
            <input
              v-model="country"
              type="text"
              id="superficie_casa"
              name="superficie_casa"
            />
          </div>
        </div> 
 
  
        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Guardar</button>
        </div>
      </form>

      <div v-if="viewModal" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Dirección agregada</h3>
            <img src="../../assets/default/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="Add()" class="otro">Aceptar</p>
            <p @click="toEdit()" class="editar">Editar</p>
            <p @click="back()" class="inicio">Inicio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { VueEditor } from "vue2-editor";
export default {
  name: "AddAdr",
  components: {
    VueEditor,
  },
  data() {
    return {
      status: "",
      message: "", 
      address: "",
      colonia: "",
      zip: "",
      city: "",
      state: "",
      country: "",
      //MODAL
      files: [],
      viewModal: false,

      search_value: "",
    };
  },
  async created() {
    await this.getAllInfoAdr("address");
  },
  computed: { 
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    ...mapActions("address", ["getAllInfoAdr"]),
    ...mapActions("address", ["setAddedAdr"]),
    ...mapActions("address", ["setHistoryOptionAdr"]), 
    ...mapActions("address", ["getInfoByIdAdr"]),
    previewFiles() {
      this.files = this.$refs.myFiles.files;
    }, 
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    }, 
    submit: async function (address, colonia, zip, city, state, country) {
      this.status = "";
      this.message = "";
 
        let result = await this.$store.dispatch("address/addItemAdr", {
          option: "address",
          item: {
            address,
            colonia,
            zip,
            city,
            state,
            country
          },
        });
 
        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success 
          this.showModal();
        }
    },
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },

    showModal: function () {
      this.viewModal = true;
    },

    Add: function () {
      this.status = "";
      this.message = "";

      this.id_address = "";
      this.titulo = "";
      this.estatus = "";
      this.renta = "no";
      this.tipo = "venta";
      this.descripcion = "";
      this.ubicacion = "";
      this.precio = "";
      this.superficie = "";
      this.iframe = "";
      this.detalles = "";
      this.etiquetas = [];
      this.cuartos = "";
      this.banos = "";
      this.cochera = "";
      this.superficie_casa = "";

      this.viewModal = false;
      this.setAddedAdr("");
    },
    toEdit: function () {
      this.setHistoryOptionAdr("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
 
  },
};
</script>
<style scoped>
#AddAdr label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddAdr input,
#AddAdr select {
  height: 2.5vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
}

#select-role {
  height: 2.5vw;
  width: 13.716667vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
  display: flex;
  align-items: center;
  background-image: url("../../assets/default/blueflecha.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 12.6vw;
}
#select-role.rounded {
  border-radius: 0vw 1.5vw 0vw 0vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0.052083vw solid var(--color-2);
  border-bottom: 0;
}
#select-ch:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: white;
  width: 12.3vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0;
  border-bottom: 0.052083vw solid var(--color-2);
}
</style>
