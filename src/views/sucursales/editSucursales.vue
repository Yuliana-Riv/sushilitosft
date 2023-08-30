<template >
  <div id="AddUsr">
    <div class="form-content">
      <form @submit.prevent="submit(added.id, added.nombre, added.direccion, added.tipo, added.mapa, file1)
        ">
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input v-model="added.nombre" type="text" id="name" name="name" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}" required
              class="in1" />
          </div>
          <div class="boxform">
            <label for="lastname" class="lastname">Dirección</label>
            <input v-model="added.direccion" type="text" id="lastname" name="lastname"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}" required class="in1" />
          </div>
          <div class="boxform">
            <label for="role" class="role">Tipo </label>
            <div class="select-container">
              <input type="checkbox" name="select-ch" id="select-ch" v-model="active" :true-value="true"
                :false-value="false" />
              <label for="select-ch">
                <div id="select-role" :class="{ rounded: active }">
                  {{ added.tipo }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect()">
                <div class="option-btn" @click="tipo = 'matriz'">Matriz</div>
                <div class="option-btn" @click="tipo = 'sucursal'">Sucursal</div>

              </div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="mapa" class="phone">Mapa</label>
            <input v-model="added.mapa" type="text" id="mapa" name="mapa" required class="in1" />
          </div>
        </div>

        <div class="boxform">
          <!-- AQUI -->
          <label>Imagen</label>
          <div class="dflx">
            <label class="filelabel" for="uploadimg2">
              <span>Seleccionar Archivo</span></label>
            <label class="filelabelname tbl_item" for="uploadimg2">
              {{ archivo }}</label>
          </div>

          <input @change="previewFiles2" type="file" id="uploadimg2" name="uploadimg2" required class="fileinput" />
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Editar</button>
        </div>

        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
      </form>

      <div v-if="viewModal" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Usuario editado</h3>
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
export default {
  name: "AddUsr",
  data() {
    return {
      status: "",
      message: "",
      nombre: "",
      direccion: "",
      tipo: "Matriz",
      active: false,
      mapa: "",
      archivo: "No se eligió archivo",
      file1: null,
      numero: "",
      telefonos: [],

      //MODAL

      viewModal: false,
    };
  },
  computed:{
    added() {
      return this.$store.getters["sucursales/getAdded"];
    },
    // data() {
    //   return this.$store.getters["usuarios/data"];
    // },

  },
  methods: {
    ...mapActions("sucursales", ["setAddedSuc"]),
    ...mapActions("sucursales", ["setHistoryOptionSuc"]),
    ...mapActions("sucursales", ["setAddedSuc"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    previewFiles2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },


    agregarTel(numero) {
      this.telefonos.push(
        numero,
      );

    },

    submit: async function (id, nombre, direccion, tipo, mapa, image) {
      this.status = "";
      this.message = "";
      let data = [];

      if (image == null) {
        data = {
          id: id,
          nombre: nombre,
          direccion: direccion,
          tipo: tipo,
          mapa: mapa,
          
          /*image: image,
          image_mv: image_mv,*/
        };
      } else {
        data = new FormData();
        data.append("id", id);
        data.append("nombre", nombre);
        data.append("image", image);
        data.append("direccion", direccion);
        data.append("tipo", tipo);
        data.append("mapa", mapa);
        data.append("_method", "POST");
      }
      let result = await this.$store.dispatch("sucursales/editItemSuc", {
        option: "sucursales",
        item: data,
      });
      console.log(result)
      if (result.status == "error") {
        this.status = "error";
        this.message = result.message;
      } else {
        // success
        //this.setAddedSuc(result.added);

        this.message = result.message;
        this.showModal();
      }
    },

    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedSuc("");
      this.setHistoryOptionSuc("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.nombre = "";
      this.direccion = "";
      this.tipo = "matriz";

      this.mapa = "";
      this.viewModal = false;
      this.setAddedSuc("");
    },
    toEdit: function () {
      this.setHistoryOptionSuc("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    mostrarPass: function () {
      var tipo = document.getElementById("pass");
      if (tipo.type == "password") {
        tipo.type = "text";
        this.mostrar = false;
      } else {
        tipo.type = "password";
        this.mostrar = true;
      }
    },
  },
};
</script>
<style scoped>
.pass-cont {
  position: relative;
  align-items: center;
}

.bx_pss_img {
  position: absolute;
  right: 0;
}

#AddUsr label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddUsr input,
#AddUsr select {
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

#select-ch:checked~.options-cont {
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