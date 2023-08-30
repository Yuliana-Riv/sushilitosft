<template>
  <div id="AddPho">
    <div class="form-content">
      <form @submit.prevent="submit(added.phone, added.type, added.link)">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="titulo" class="titulo">Teléfono </label>
            <input
              v-model="added.phone"
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
            <label for="titulo" class="titulo">Tipo </label>
            <div class="dflx">
              <div
                class="selop"
                :class="{ active: added.type == 'OFICINA' }"
                @click="added.type = 'OFICINA'"
              >
                Número Oficina
              </div>
              <div
                class="selop"
                :class="{ active: added.type == 'CELULAR' }"
                @click="added.type = 'CELULAR'"
              >
                Número Celular
              </div>
              <div
                class="selop"
                :class="{ active: added.type == 'WHATSAPP' }"
                @click="added.type = 'WHATSAPP'"
              >
                Número WhatsApp
              </div>
            </div>
          </div>
        </div>
        <div class="grup-form dflx" v-if="added.type == 'WHATSAPP'">
          <div class="boxform">
            <label for="titulo" class="titulo">Link </label>
            <input
              v-model="added.link"
              type="text"
              id="titulo"
              name="titulo"
              class="wd-lrg"
              required
            />
          </div>
        </div>

        <!-- <div class="grup-form dflx">
        
        <div class="boxform">
          <label for="descripcion" class="descripcion">Descripción</label>
          <textarea
            v-model="descripcion"
            class="format_ta"
            id="descripcion"
            name="descripcion"
          />
        </div>
     
        
      </div> -->

        <!-- <div class="grup-form dflx">
          <div class="boxform">
            <label for="iframe" class="iframe">Mapa iframe (opcional) </label>
            <input
              v-model="iframe"
              type="text"
              id="iframe"
              name="iframe"
              class="wd-lrg"
            />
          </div>
         
          
        </div> -->

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
            <h3>Teléfono editado</h3>
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
  name: "AddPho",
  components: {
    VueEditor,
  },
  data() {
    return {
      status: "",
      message: "",
      phone: "",
      type: "OFICINA",
      link: "",
      //MODAL
      files: [],
      viewModal: false,

      search_value: "",
    };
  },
  computed: {
    added() {
      return this.$store.getters["phone/getAdded"];
    },
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    ...mapActions("phone", ["setAddedPho"]),
    ...mapActions("phone", ["setHistoryOptionPho"]),
    ...mapActions("colaborador", ["getAllInfoClb"]),
    ...mapActions("phone", ["getInfoByIdPho"]),
    previewFiles() {
      this.files = this.$refs.myFiles.files;
    },
    addEtiqueta(value) {
      if (value) {
        let newarr = [];
        for (const item of this.etiquetas) {
          newarr.push(item);
        }
        newarr.push(value);
        this.etiquetas = newarr;
        this.etiqueta = "";
      }
    },
    delEtiqueta(index) {
      let newarr = [];
      for (var i = 0; i < this.etiquetas.length; i++) {
        if (i != index) newarr.push(this.etiquetas[i]);
      }
      this.etiquetas = newarr;
    },
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
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
    submit: async function (phone, type, link) {
      this.status = "";
      this.message = "";
      let linkC;

      if (type == 'WHATSAPP') {
        linkC = link;
      }
      else if (type == 'OFICINA')
      {
        linkC = 'tel:+'+phone;
      }
      else if (type == 'CELULAR')
      {
        linkC = 'tel:+52'+phone;
      }
      

      let result = await this.$store.dispatch("phone/editItemPho", {
        option: "phone",
        item: {
          id: this.added.id,
          phone,
          type,
          link: linkC, 
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

      this.id_colaborador = "";
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
      this.setAddedPho("");
    },
    toEdit: function () {
      this.setHistoryOptionPho("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
 
  },
};
</script>
<style scoped>
#AddPho label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddPho input,
#AddPho select {
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
