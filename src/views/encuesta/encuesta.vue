<template>
<div>

        <div> 
            <p class="tit1">GLOSARIO</p>

            <p class="tit2">P1.- ¿Es la primera vez que nos visitas?</p>
            <p class="tit2">P2.- ¿Cómo calificas el servicio del mesero?</p>
            <p class="tit2">P3.- ¿Cómo calificas el ambiente del restaurante?</p>
            <p class="tit2">P4.- ¿Cómo calificas la limpieza del lugar?</p>
            <p class="tit2">P5.- ¿Cómo calificas la rapidez del servicio  a la <br> hora de traer los platillos?</p>
            <p class="tit2">P6.- ¿Cómo calificas el sabor de los platillos?</p>
            <p class="tit2">P7.- ¿Te agradó la presentación del platillo?</p>
            <p class="tit2">P8.- En general, ¿cómo calificas la experiencia en nuestro restaurante?</p>
           
        </div>


    <div>
        <div class="tbl_usuarios">
        <div class="tbl_header dflx">
          <div class="tblh2 tblrad">
            <p>ID</p>
          </div>
          <div class="tblh">
            <p>No.TICKET</p>
          </div>
          <div class="tblh2">
            <p>P1</p>
          </div>
          <div class="tblh2">
            <p>P2</p>
          </div>
          <div class="tblh2">
            <p>P3</p>
          </div>
          <div class="tblh2">
            <p>P4</p>
          </div>
          <div class="tblh2">
            <p>P5</p>
          </div>
          <div class="tblh2">
            <p>P6</p>
          </div>
          <div class="tblh2">
            <p>P7</p>
          </div>
          <div class="tblh2">
            <p>P8</p>
          </div>
          <div class="tblh">
            <p>COMENTARIOS</p>
          </div>
          <div class="tblh">
            <p>EMAIL</p>
          </div>
          <div class="tblh">
            <p>TELÉFONO</p>
          </div>
          <div class="tblh">
            <p>BORRAR</p>
          </div>
          
          
        </div>

        <div tbl_content>
          <div>
            <div class="tbl_items dflx"
            v-for="encuesta in encuestas"
              :key="encuesta"
              >
              <div class="tbl_item2">
                <p>{{ encuesta.id }}</p>
              </div> 
              <div class="tbl_item">
                <p>{{ encuesta.num_ticket }}</p>
              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p1 }}</p>
              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p2 }}</p>

              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p3 }}</p>
              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p4 }}</p>

              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p5 }}</p>

              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p6 }}</p>

              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p7 }}</p>

              </div>
              <div class="tbl_item2">
                <p>{{ encuesta.p8 }}</p>

              </div>
              <div class="tbl_item">
                <p>{{ encuesta.p9 }}</p>

              </div>
              <div class="tbl_item">
                <p>{{ encuesta.p10 }}</p>

              </div> 
              <div class="tbl_item">
                <p>{{ encuesta.p11 }}</p>

              </div>
              
              <div class="icon_eliminar">
                                <img  @click="showModal(item.id)" src="../../assets/default/i_eliminar.png" alt="icono eliminar" >
                            </div>

            </div>
            
          </div>
          
        </div>

        
      </div>

      <div>
        
        <div>
        </div>
      </div>
    </div>


    <div v-if="viewModal" class="modal_view">
           
           <div id="modal_delete">
               <div class="body">
                    <img src="../../assets/default/alert.png" alt="icono alerta">
           <h3 >¿Estás seguro de  <span>eliminar <br> este usuario?</span></h3>
               </div>
          
           <div class="modal_del_btns dflx">
               <p @click="eliminar()">Aceptar</p>   <p  @click="closeModal()" >Cancelar</p>
           </div>
         </div>
       </div> 


</div>
</template>

<script>
import { mapActions } from "vuex";

export default {

    data(){
        encuestas
    },

    created(){
        this.getAllInfoenc("encuesta")
    },

    computed:{
        encuestas(){
            let data= this.$store.getters["encuesta/data"];
            return data

        }

    
    },
    methods:{
        ...mapActions("encuesta", ["getAllInfoenc"]),

        eliminar: async function(){
            let id = this.itemDel
            this.status='';
            this.message='';

             let result = await this.$store.dispatch("encuesta/delete", {option: 'encuesta', id:id});
           
            if(result.status=='error'){
            this.message = result.message;
            this.status='error'
            this.delStatus()
           
            }else{
                this.status='';
                this.message='';
                this.wait()
            }
         },
          closeSelect(){
      document.getElementById("select-ch").checked = false;
      this.active = false;
    },

    }

}
</script>

<style scoped>
.tbl_usuarios {
  margin-top: 1.9791666666666665vw;
}

.tbl_items {
  border-bottom: 1px solid var(--color-3);
}

.tbl_item {
  overflow: auto;
}
.tblh {
  width: 10.78125vw;
  height: 2.5vw;
  background: var(--color-2);
  border-right: 1px solid var(--color-5);
}
.tblh2 {
  width: 2.5vw;
  height: 2.5vw;
  background: var(--color-2);
  border-right: 1px solid var(--color-5);
}
.tblh p {
  padding-left: 1.3541666666666667vw;
  color: var(--color-5);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
}
.tblh2 p {
  padding-top: 0.5vw;
  padding-left: 0.3vw;
  color: var(--color-5);
  font-size: 0.46875vw;
  font-weight: 700;
}

.icon_editar,
.icon_eliminar {
  width: 2.5vw;
  height: 2.5vw;
}

.icon_editar img,
.icon_eliminar img {
  width: 0.8333333333333334vw;
  height: 0.8333333333333334vw;
  padding-top: 0.9vw;
  padding-left: 0.9vw;
  cursor: pointer;
}
.tblrad {
  border-radius: 1.5vw 0vw 0vw 1.5vw;
}

.tblh2r {
  border-radius: 0vw 0.5vw 0.5vw 0vw;
}

.tbl_item {
  width:10.48125vw;
}
.tbl_item p {
  padding-left: 1.3541666666666667vw;
}

.mlf {
  margin-left: 43vw !important;
}

.tbl_item2{
    width:2.5vw;
}

.tit1{
    font-family: "SolfeggioBold";
    font-size: 2vw;
    }

    .tit2{
        font-family: "--roboto";
        font-size: 1vw;
        color: #A16D34;

    }

</style>