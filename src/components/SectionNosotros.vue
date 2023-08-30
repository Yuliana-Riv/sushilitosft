<template>
    <div class="about">

        <div id="nosotros" class="filanosotros">
        <!-- Indicador seccion -->
        <div class="idsecc">
          <h5>01.</h5>
          <hr/>
          <h5>NOSOTROS</h5>
        </div>
        <!-- Bloque Quienes somos -->
        <div class="bloqueqs">
          
          <div class="col2-qs">
            <h2 class="tl1">SOMA Inmobiliaria</h2>
            <p class="txt">
              Más de 13 años de experiencia en el mercado inmobiliario. 
              Somos una empresa 100% sonorense dedicada a brindar asesoría 
              técnica y legal, gestión, mediación, promoción y comercialización 
              de cualquier tipo de propiedad o proyecto inmobiliario.
            </p>
            <section>

              <p class="txt1">
                Contamos con el respaldo de un excelente equipo de agentes
                inmobiiliarios. Profesionales cuyo mayor comrpomiso es
                encontrar soluciones específicas y a la medida de cada
                necesidad.
              </p>

              <p class="txt1">
                Estamos para acompañar al cliente durante todo el proceso 
                de compra, renta o venta de sus inmuebles. 
              </p>
              
            </section>
            <section>
              <div class="col1-qs">
            <!--   <img src="../assets/btnvideo.svg" alt="btn" class="btnvi" />
            <img class="imgqs1pc" src="../assets/imgqspc.jpg" alt="" /> -->

            <!-- Aquí va la foto de la gente jejejew> -->
              </div>    
            </section>
          </div>
        </div>
      </div>


    </div>
</template>

<style scoped>

.about{
  background-image: url(../assets/fondonosmo.png);
}
.filanosotros {
  background: url(../assets/nosotros_mo.png) ;
  background-repeat: no-repeat;
  margin-top: 0;
  padding-bottom: 80.353vw;
  background-position: bottom;
}

.col2-qs {
    padding-left: 13vw;
    padding-right: 13vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }

.txt{
  font-family:"Montserrat";
  text-align: left;
  font-weight: bold;
  color: #575656;
  line-height: 115.5%;
  width:73vw;
}

.tl1{
  font-family:"Montserrat";
  text-align: left;
  color:#E40424;
  font-weight:900;
  font-size: 8.454106280193237vw;
  margin-top:18.84057971014493vw;

}

.txt1{
  font-family: "Montserrat";
  color: #575656;
  line-height: 115.5%;

}
/*
.idsecc {
  display: flex;
  width: 40%;
  margin: 0 auto 0;
  padding-top: 14.492753623188406vw;
}

.idsecc h5 {
  font-size:2.657004830917874vw;
  font-family:"Montserrat";
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

.idsecc {
  display: flex;
  width: 40%;
  margin: 0 auto 0;
  padding-top: 14.492753623188406vw;
}*/

.idsecc {
  display: flex;
  width: 40%;
  margin: auto;
  padding-top: 14.492753623188406vw;
}

.sectionsucursales .idsecc h5 {
    color: gray;
}.sectionsucursales .idsecc hr {
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


  .about{
    background-image: url(../assets/fondonospc.png);
  }
  .filanosotros {
  background: url(../assets/nosotros_pc.png) ;
  background-repeat: no-repeat;
  background-size: 45.46875vw 40.520833333333336vw;
  margin-top: 0;
  background-position-x: 5.15625vw;
  background-position-y: bottom;
  width:100vw;
  height: 27.15625vw;
  padding-bottom: 21.2vw;
  }

  .bloqueqs {
    padding-top: 8.125vw;
    padding-bottom: 7.292vw;
    display: flex;
    /* background-image: url("../assets/huevitos.png");
    background-size: 32.917vw;
    background-repeat: no-repeat;
    background-position-x: 60.625vw;
    background-position-y: 29.375vw;*/
  }

  .filanosotros .idsecc {
    display: flex;
    padding-top: 5vw;
    padding-left: 0vw;
  }

.txt{
  font-family:"Montserrat";
  text-align: left;
  font-weight: bold;
  color: #575656;
  line-height: 115.5%;
  font-size: 1.0416666666666665vw;
  width:35vw;

}

.tl1{
  font-family:"Montserrat";
  text-align: left;
  color:#E40424;
  font-weight:900;
  font-size: 2.604166666666667vw;
}


.txt1{

  width:32vw;
  font-family: "Montserrat";
  color: #575656;
  line-height: 115.5%;
  font-size: 1.0416666666666665vw;

}

.idsecc {
  display: flex;
  width: 20.2vw;
  margin: 0 auto 0;
  margin-left:44.479166666666664vw;
  padding-top: 5vw;
}

.idsecc h5 {
  font-size:0.6770833333333334vw;
  font-family:"Montserrat";
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
  margin:1.6666666666666667vw;
  border-bottom: 0.078vw solid black;

  
}


.bloqueqs{
    display: flex;
}

.col1-qs{
    width: 48.958vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.col2-qs {
    padding-left: 55.260416666666664vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }


.tl1{
  margin-top: 0vw;
}

.idsecc {
    display: flex;
    width: 13%;
    margin: auto;
    padding-top: 6.5vw;
  }
  .idsecc h5 {
    font-size:  0.625vw;
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