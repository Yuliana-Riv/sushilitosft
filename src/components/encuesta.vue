<template>
<div>
    <Navigator/>

    <div class="encuesta">

        <div class="div1">
            <p class="tit1">ENCUESTA DE</p>
            <p class="tit2">SATISFACCIÓN</p>
        </div>

        <form @submit.prevent="guardar(num_ticket,
        p1 , 
        p2 , 
        p3, 
        p4 , 
        p5, 
        p6 , 
        p7  , 
        p8, 
        p9 , 
        p10, 
        p11)" >
        <div class="div2">

            <p class="tit3">Número de ticket*</p>
            <textarea v-model="num_ticket" class="txa1" id="" cols="30" rows="10"></textarea>

            <div class="div21">

            <p class="tit3">¿Es la primera vez que nos visitas?*</p>
            <div class="div3">
                <div class="btnyes">
                    <button @click="p1='si'" class="btnsi" :class="{'activosino':p1=='si'}">Si</button>
                </div>
                <div>
                    <button @click="p1='no'" class="btnno" :class="{'activosino':p1=='no'}">No</button>
                </div>
            </div>
        </div>
        </div>

        <div class="div311">

            <div class="sino">

                <div class="space"></div>
                <div class="dlpc"> <img class="dislike" src="../assets/unlike.png" alt=""> </div>
                <div class="lpc"> <img class="likepc" src="../assets/like.png" alt=""> </div>
            </div>
            <div class="div31">
                <p class="tit3">¿Cómo calificas el servicio del mesero?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p2='1'" class="circle" :class="{'activo' :p2=='1'}" type="button">
                    <input @click="p2='2'" class="circle" :class="{'activo' :p2=='2'}" type="button">
                    <input @click="p2='3'" class="circle" :class="{'activo' :p2=='3'}" type="button">
                    <input @click="p2='4'" class="circle" :class="{'activo' :p2=='4'}" type="button">
                    <input @click="p2='5'" class="circle1" :class="{'activo' :p2=='5'}" type="button">


                </div>
            </div>

            <div class="div31">
                <p class="tit3">¿Cómo calificas el ambiente del restaurante?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p3='1'" class="circle" :class="{'activo' :p3=='1'}" type="button">
                    <input @click="p3='2'" class="circle" :class="{'activo' :p3=='2'}" type="button">
                    <input @click="p3='3'" class="circle" :class="{'activo' :p3=='3'}" type="button">
                    <input @click="p3='4'" class="circle" :class="{'activo' :p3=='4'}" type="button">
                    <input @click="p3='5'" class="circle1" :class="{'activo' :p3=='5'}" type="button">
                </div>
            </div>

            <div class="div31">
                <p class="tit3">¿Cómo calificas la limpieza del lugar?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p4='1'" class="circle" :class="{'activo' :p4=='1'}" type="button">
                    <input @click="p4='2'" class="circle" :class="{'activo' :p4=='2'}" type="button">
                    <input @click="p4='3'" class="circle" :class="{'activo' :p4=='3'}" type="button">
                    <input @click="p4='4'" class="circle" :class="{'activo' :p4=='4'}" type="button">
                    <input @click="p4='5'" class="circle1" :class="{'activo' :p4=='5'}" type="button">
                </div>
            </div>

            <div class="div31">
                <p class="tit3">¿Cómo calificas la rapidez del servicio  a la <br> hora de traer los platillos?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p5='1'" class="circle" :class="{'activo' :p5=='1'}" type="button">
                    <input @click="p5='2'" class="circle" :class="{'activo' :p5=='2'}" type="button">
                    <input @click="p5='3'" class="circle" :class="{'activo' :p5=='3'}" type="button">
                    <input @click="p5='4'" class="circle" :class="{'activo' :p5=='4'}" type="button">
                    <input @click="p5='5'" class="circle1" :class="{'activo' :p5=='5'}" type="button">
                </div>
            </div>

            <div class="div31">
                <p class="tit3">¿Cómo calificas el sabor de los platillos?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p6='1'" class="circle" :class="{'activo' :p6=='1'}" type="button">
                    <input @click="p6='2'" class="circle" :class="{'activo' :p6=='2'}" type="button">
                    <input @click="p6='3'" class="circle" :class="{'activo' :p6=='3'}" type="button">
                    <input @click="p6='4'" class="circle" :class="{'activo' :p6=='4'}" type="button">
                    <input @click="p6='5'" class="circle1" :class="{'activo' :p6=='5'}" type="button">
                </div>
            </div>

            <div class="div31">
                <p class="tit3">¿Te agradó la presentación del platillo?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p7='1'" class="circle" :class="{'activo' :p7=='1'}" type="button">
                    <input @click="p7='2'" class="circle" :class="{'activo' :p7=='2'}" type="button">
                    <input @click="p7='3'" class="circle" :class="{'activo' :p7=='3'}" type="button">
                    <input @click="p7='4'" class="circle" :class="{'activo' :p7=='4'}" type="button">
                    <input @click="p7='5'" class="circle1" :class="{'activo' :p7=='5'}" type="button">
                </div>
            </div>

            <div class="div31">
                <p class="tit3">En general, ¿cómo calificas la experiencia en <br> nuestro restaurante?*</p>
                <div class="scale">
                    <div class="unlike"></div>
                    <div class="like"></div>
                </div>
                <div class="calificacion">
                    <input @click="p8='1'" class="circle" :class="{'activo' :p8=='1'}" type="button">
                    <input @click="p8='2'" class="circle" :class="{'activo' :p8=='2'}" type="button">
                    <input @click="p8='3'" class="circle" :class="{'activo' :p8=='3'}" type="button">
                    <input @click="p8='4'" class="circle" :class="{'activo' :p8=='4'}" type="button">
                    <input @click="p8='5'" class="circle1" :class="{'activo' :p8=='5'}" type="button">
                </div>
            </div>

          
        </div>

        <div class="div4">
            <p class="tit3">Agradecemos tus comentarios y/o sugerencias*</p>
            <textarea v-model="p9" class="txa2" name="" id="" cols="30" rows="10"></textarea>

            <p class="tit3">Deja tu correo si te gustaría recibir novedades  y promociones (opcional)</p>
            <textarea v-model="p10" class="txa3" name="" id="" cols="30" rows="10"></textarea>

            <p class="tit3">Deja tu número telefónico si deseas participar en el sorteo semanal de una charola especial (opcional)</p>
            <textarea v-model="p11" class="txa4" name="" id="" cols="30" rows="10"></textarea>
        </div>

        <button type="submit" class="btnsend">Enviar</button>


        <div v-if="this.status == 'success'">
              <p class="cart_msg cart_success">{{ this.message }}</p>
            </div>
            <div v-if="this.status == 'error'">
              <p class="cart_msg cart_error">{{ this.message }}</p>
            </div>

    </form>
    </div>
    <Footer/>

</div>
</template>
<script>

import Navigator from '../components/fixed/Navigator.vue' 
import Footer from '../components/Footer.vue';

export default {
  
    data(){
        return{
            num_ticket:"",
        p1: "si", 
        p2 :"3", 
        p3:"3", 
        p4:"3" , 
        p5:"3", 
        p6 :"3", 
        p7  :"3", 
        p8:"3", 
        p9 :"", 
        p10:"", 
        p11:"", 
        message:"",
        status:""
        }
    },

    components:{
        Navigator,
        Footer
    },

    methods:{

        guardar:async function(num_ticket,
        p1 , 
        p2 , 
        p3, 
        p4 , 
        p5, 
        p6 , 
        p7  , 
        p8, 
        p9 , 
        p10, 
        p11){

            let result = await this.$store.dispatch("encuesta/addItemenc", {
          option: "encuesta",
          item: {num_ticket,
        p1 , 
        p2 , 
        p3, 
        p4 , 
        p5, 
        p6 , 
        p7  , 
        p8, 
        p9 , 
        p10, 
        p11},
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
         /* this.$router.push("/encuesta_final").catch((err) => {});*/
         window.location.href="http://localhost:8080/encuesta_final"
        }

        },

    }
}
</script>

<style scoped>

.encuesta{
    background-color: #e8e7e0;
    padding-left: 8.937198067632849VW;
    padding-right: 8.937198067632849VW;
    padding-bottom: 31.88405797101449VW;
}

.div1{
    padding-top: 58.212560386473434VW;
    padding-bottom: 12.560386473429952VW;
}

.tit1{
    font-size: 10.869565217391305VW;
    color: #A16D34;
    font-family: "SolfeggioBold";
    text-align: center;
    margin: 0;
}

.tit2{
    font-size: 10.869565217391305VW;
    color: #00322C;
    font-family: "SolfeggioBold";
    text-align: center;
    margin: 0;

}

.div2{

}

.tit3{
    color: #A16D34;
    font-size: 6.038647342995169VW;
    font-family: "--roboto";
    font-weight: 700;
    font-style: italic;
}

.div3{
    display: flex;
}
.btnyes{
 padding-right: 6.280193236714976VW;
}
.btnsi{
    width: 37.92270531400966VW;
    height: 18.59903381642512VW;
    transition: all 300ms;
}

.btnno{
    width: 37.92270531400966VW;
    height: 18.59903381642512VW;
}
.calificacion{
    display: flex;
}

.circle{
    width: 11.11111111111111VW;
    height: 10.869565217391305VW;
    border: 1px solid #A16D34;
    border-radius: 10vw;
    margin-right: 7.246376811594203VW;
}

.circle1{
    width: 11.11111111111111VW;
    height: 10.869565217391305VW;
    border: 1px solid #A16D34;
    border-radius: 10vw;
}

.txa1{
    width: 82.1256038647343VW;
    height: 18.59903381642512VW;
    border: 1px solid #A16D34;
    background: none;
}
.txa2{
    width: 82.1256038647343VW;
    height: 51.20772946859904VW;
    border: 1px solid #A16D34;
    background: none;
}

.txa3{
    width: 82.1256038647343VW;
    height:18.59903381642512VW;
    border: 1px solid #A16D34;
    background: none;
}

.txa4{
    width: 82.1256038647343VW;
    height:18.59903381642512VW;
    border: 1px solid #A16D34;
    background: none;
}

.div4{
    padding-bottom: 12.318840579710146VW;
}

.btnsend{
    width: 82.1256038647343VW;
    height: 19.32367149758454VW;
    background-color: #A31F25;
    border: none;
    color: #D0985D;
    font-family: "--roboto";
    font-size: 6.038647342995169VW;
    font-weight: 700;
    
}

.btnsend:hover{
    background-image: url(../assets/Cargando0.gif);
    background-repeat: no-repeat;
    background-color:#00322C ;
    font-size: 0vw;
    background-position-x: center;
    background-position-y: center;
    border-radius: 15vw;
}

.scale{
    display: flex;
    padding-bottom: 1.932367149758454VW;
}

.unlike{
    width: 7.487922705314009VW;
    height: 7.487922705314009VW;
background-image: url(../assets/unlike.png);
background-repeat: no-repeat;
margin-right: 66.52657004830918VW;

}
.like{
    width: 7.487922705314009VW;
    height: 7.487922705314009VW;
    background-repeat: no-repeat;
background-image: url(../assets/like.png);
}

.activo{
    background-color: #A31F25 !important;
    box-shadow: inset 0 0 0 0.9VW #e8e7e0;

}
.activosino{
    background-color: #A31F25 !important;
}

.sino{
    display: none;
}

@media (min-width: 1024px) {

    .encuesta{
        padding-bottom: 4.88405797101449VW;
        padding-left: 13.125VW;
    }

    .div1{
        padding-top: 10.3125VW;
        padding-bottom: 2.5520833333333335VW;
        display: flex;
    }

    .tit1{
        font-size: 2.864583333333333VW;
        text-align: left;
    }
    .tit2{
        font-size: 2.864583333333333VW;
        text-align: left;

    }

    .tit3{
        font-size: 1.3020833333333335VW;
        width: 35.989583333333336VW;
;
    }

    .txa1{
        width: 52.916666666666664VW;
        height: 4.010416666666667VW;
    }

    .btnyes{
        padding-right: 2.1151041666666663VW;

    }

    .btnsi{
        width: 12.770833333333334VW;
    height: 2.7604166666666665VW;
    border: 1px solid #A16D34;

    }
    .btnno{
        width: 12.770833333333334VW;
    height: 2.7604166666666665VW;
    border: 1px solid #A16D34;

    }

    .div3{
        padding-top: 0.7vw;
    }

    .like{
        display: none;
    }

    .unlike{
        display: none;
    }

    .div21{
        display: flex;
        width: 52.916666666666664VW;
        padding-top: 2.5520833333333335VW;
    }

    .circle{
        width: 2.1984375VW;
    height: 2.1505208333333337VW;
    margin-right: 1.3020833333333335VW;
    }
    .circle1{
        width: 2.1984375VW;
    height: 2.1505208333333337VW;
    }
    
    .div31{
        display: flex;
        height: 4.0208333333333335VW;
    }
    .div4{
        padding-bottom: 3.75VW;
        padding-top:6.510416666666667VW;
    }
    .txa2{
        width: 52.916666666666664VW;
        height: 10.478645833333333VW;
    }
    .txa3{
        width: 52.916666666666664VW;
        height: 4.010416666666667VW;
    }
    .txa4{
        width: 52.916666666666664VW;
        height: 4.010416666666667VW;
    }

    .btnsend{
        width: 17.708333333333336VW;
        height: 4.166666666666666VW;
        font-size: 1.3020833333333335VW;
    }

    .calificacion{
        margin-top: 1.3vw;
    }

    .div311{
        padding-top: 5.885416666666667VW;
    }

    .sino{
        display: flex;
    }

    .space{
        width: 36.25VW;
    }

    .dlpc{
        padding-right: 13.247916666666666VW;
    }

    .activo{
        box-shadow: inset 0 0 0 0.2VW #e8e7e0;

    }


}
</style>