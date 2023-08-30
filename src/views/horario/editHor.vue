<template>
  <div id="AddHor">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.start_day,
            added.end_day,
            sh_hour,
            sh_minutes,
            fh_hour,
            fh_minutes
          )
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="ubicacion" class="ubicacion">Día de inicio </label>
            <input
              v-model="added.start_day"
              type="text"
              id="ubicacion"
              name="ubicacion"
            />
          </div>
          <div class="boxform">
            <label for="precio" class="precio">Día de fin (opcional) </label>
            <input
              v-model="added.end_day"
              type="text"
              id="ubicacion"
              name="ubicacion"
            />
          </div>
        </div>
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="superficie" class="superficie">Horario de inicio (Actual: {{ added.start_hour }})</label>
            <div class="dflx">
              <input
                v-model="sh_hour"
                type="number"
                id="superficie"
                name="superficie"
                placeholder="Hora"
                class="width3"
              />
              <input
                v-model="sh_minutes"
                type="number"
                id="superficie"
                name="superficie"
                placeholder="Minutos"
                class="width3"
              />
            </div>
          </div>
          <div class="boxform">
            <label for="superficie_casa" class="superficie_casa"
              >Horario final (Actual: {{ added.end_hour }})</label
            >
            <div class="dflx">
              <input
                v-model="fh_hour"
                type="number"
                id="superficie_casa"
                name="superficie_casa"
                placeholder="Hora"
                class="width3"
              />
              <input
                v-model="fh_minutes"
                type="number"
                id="superficie_casa"
                name="superficie_casa"
                placeholder="Minutos"
                class="width3"
              />
            </div>
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
import { url } from "../../global/index";
import { VueEditor } from "vue2-editor";

export default {
  name: "EditHor",
  components: {
    VueEditor,
  },
  data() {
    return {
      status: "",
      message: "",
      sh_hour: "",
      sh_minutes: "",
      fh_hour: "",
      fh_minutes: "",
      viewModal: false,
    };
  },

  async created() {
    await this.getAllInfoHor("horario");
  },
  computed: {
    added() {
      return this.$store.getters["horario/getAdded"];
    },
    horario() {
      let data = this.$store.getters["horario/data"];

      if (!Array.isArray(data)) return [];
      if (this.identity.role == "horario")
        data = data.filter((item) => item.id == this.identity.sub);

      if (this.search_value != "") {
        let filt = data.filter((item) => {
          const fullname = item.name + " " + item.lastname;
          return this.includesItem(this.search_value, fullname);
        });
        data = filt;
      }

      return data;
    },
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
    data() {
      return this.$store.getters["horario/data"];
    },
  },
  methods: {
    ...mapActions("horario", ["setAddedHor"]),
    ...mapActions("horario", ["getAllInfoHor"]),
    ...mapActions("horario", ["getInfoByIdHor"]),

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("horario", ["getInfoByIdHor"]),
    submit: async function (
      start_day,
      end_day,
      sh_hour,
      sh_minutes,
      fh_hour,
      fh_minutes
    ) {
      this.status = "";
      this.message = "";
      let eday;
      end_day !== "" ? (eday = end_day) : (eday = "N/A");

      let result = await this.$store.dispatch("horario/editItemHor", {
        option: "horario",
        item: {
          id: this.added.id,
          start_day,
          end_day: eday,
          start_hour: sh_hour + ":" + sh_minutes,
          end_hour: fh_hour + ":" + fh_minutes,
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

    previewFiles() {
      this.files = this.$refs.myFiles.files;
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

    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },
};
</script>

<style scoped>
#AddHor label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddHor input,
#AddHor select {
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
.width3 {
  width: 5.7vw !important;
  margin-right: 1vw !important;
}
</style>
