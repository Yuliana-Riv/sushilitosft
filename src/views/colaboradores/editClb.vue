<template >
  <div id="EditClb">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.name,
            added.lastname,
           
            added.email,
            added.phone,
            pass,
            passc,
            added.wlink
          )
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="added.name"
              type="text"
              id="name"
              name="name"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="lastname" class="lastname">Apellido/s</label>
            <input
              v-model="added.lastname"
              type="text"
              id="lastname"
              name="lastname"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
       
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="phone" class="phone">Teléfono</label>
            <input
              v-model="added.phone"
              type="text"
              id="phone"
              name="phone"
              minlength="10"
              maxlength="10"
              size="10"
              pattern="\d*"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="email" class="email">E-mail</label>
            <input
              v-model="added.email"
              type="email"
              id="email"
              name="email"
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="wlink" class="wlink">Whatsapp Link</label>
            <input
              v-model="added.wlink"
              type="text"
              id="wlink"
              name="wlink"
           
              required
            />
          </div>
         
        </div>
        
        <p class="chpass">*Solo si deseas cambiar la contraseña.</p>
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="pass" class="pass">Contraseña</label>
            <input
              v-model="pass"
              type="password"
              id="pass"
              name="pass"
              minlength="8"
              class="in5"
            />
          </div>
          <div class="boxform">
            <label for="passc" class="passc">Confirmar Contraseña</label>
            <input
              v-model="passc"
              type="password"
              id="passc"
              name="passc"
              minlength="8"
              class="in5"
            />
          </div>
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
    </div>

    <hr class="hrhd" />

    <div class="form-img">
      <div class="grup-form dflx">
        <div class="boxform">
          <label>Imagen</label>
          <div class="dflx">
            <label class="filelabel" for="uploadimg">
              <span>Seleccionar Archivo</span></label
            >
            <label class="filelabelname tbl_item" for="uploadimg">
              {{ archivo }}</label
            >
          </div>

          <input
            @change="previewFiles"
            type="file"
            id="uploadimg"
            name="uploadimg"
            required
            class="fileinput"
          />
        </div>
      </div>

      <div class="dflx">
        <div @click="submitImg(file1)" class="btn_añadir2 dflx">
          <p>AGREGAR <span> IMAGEN</span></p>
          <img src="../../assets/default/upload.png" alt="" />
        </div>
      </div>

      <div v-if="status2 != ''" class="status_messages">
        <div v-if="status2 == 'success'" class="msg msg_success">
          <p>{{ message2 }}</p>
        </div>
        <div v-if="status2 == 'error'" class="msg msg_error">
          <p>{{ message2 }}</p>
        </div>
      </div>
    </div>

    <div class="div-user">
  <img class="logo" v-if="statusimg" :src="srcImg(added.image)" alt="">
</div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Colaborador actualizado</h3>
          <img src="../../assets/default/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import {url} from '../../global/index'; 
export default {
  name: "EditClb",

  data() {
    return {
      status: "",
      message: "",
      status2: "",
      message2: "",
      active: false,
      pass: "",
      passc: "",
      archivo: "No se eligió archivo",
   statusimg:false,
      //MODAL
      file1: null,
      viewModal: false,
    };
  },
  async created() {
    let payload = {
      id: this.added.id,
      option: "colaborador",
    };
    this.getInfoByIdClb(payload);

       const result = await this.status_img(this.added.image)  
  },
  computed: {
    added() {
      return this.$store.getters["colaborador/getAdded"];
    },
    data() {
      return this.$store.getters["colaborador/data"];
    },
  },
  methods: {
    ...mapActions("colaborador", ["setAddedClb"]),
    ...mapActions("colaborador", ["setHistoryOptionClb"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("colaborador", ["getInfoByIdClb"]),
    submit: async function (name, lastname, email, phone, pass, passc, wlink) {
      this.status = "";
      this.message = "";
      if (pass === passc) {
       

        let result = await this.$store.dispatch("colaborador/editItemClb", {
          option: "colaborador",
          item: { id: this.added.id, name, lastname, email, phone, pass, passc, wlink},
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.showModal();
        }
      } else {
        this.status = "error";
        this.message = "Las contraseñas no coinciden.";
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },
    submitImg: async function (image) {
      this.status = "";
      this.msg = "";

      if (image != null) {
        if (image.size > 5000000) {
          this.status2 = "error";
          this.message2 = "La imagen excede el tamaño maximo permitido de 1MB.";
          this.delStatus();
        } else {
          //Creamos el formData
          var data = new FormData();
          //Añadimos la imagen seleccionada
          data.append("image", image);
          //Añadimos el método PUT dentro del formData
          // Como lo hacíamos desde un formulario simple _(no ajax)_
          data.append("_method", "PUT");
          //Enviamos la petición
          let result = await this.$store.dispatch("main/editImage", {
            id: this.added.id,
            item: data,
            option: "colaborador",
          });
        //  console.log(result);

          if (result.status == "error") {
            this.status2 = "error";
            this.message2 = result.message;
            this.delStatus();
          } else {
            // success
            this.showModal();
          }
        }
      } else {
        this.status2 = "error";
        this.message2 = "Imagen no subida.";
        this.delStatus();
      }
    },

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedClb("");
      this.setHistoryOptionClb("Default");
    },
    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },

     srcImg:   function (img){
      console.log(img)
         if(!img || img =='') {
                this.statusimg =false
                return ''
            }
                let src = `${url}/colaborador-img/${img}`
                
    
                return src
        },

        status_img:async  function (img){
       if(!img || img =='') {
                this.statusimg =false
                return ''
            }

      this.statusimg =false;
                 let payload ={
                    option:'colaborador',
                    image:img
                }
                let response  =''

                try{
                     response =  await this.$store.dispatch("main/getStatusImage", payload);
                  
                      if(!response?.data?.status){
                       this.statusimg =true
                      }else{
                        response = ''
                      }
                }catch(err){
                    //console.log(err)
                }

                return response
               
    },
  },
};
</script>
<style scoped>
#EditClb label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditClb input,
#EditClb select {
  height: 2.5vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
}


</style>