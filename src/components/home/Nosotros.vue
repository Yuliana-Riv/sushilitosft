<template>
  <div class="Nosotros">
    <div class="pd">
      <section>
        <p class="titulo"><span>QUIENES</span> SOMOS</p>
        <img src="../../assets/nos1p.png" alt="img" class="pc img1" />
        <img src="../../assets/nos1m.png" alt="img" class="mo img1" />
      </section>
      <section class="txtc">
        <p class="txt1">
          Somos un restaurante de sushi y comida japonesa ubicados en
          <span>Ciudad Obregón</span>, dedicados a brindarte el mejor servicio y
          calidad en nuestros platillos y bebidas.
        </p>
        <p class="txt1">
          Gracias a nuestro moderno concepto y la aceptación de la comunidad
          hemos logrado crecer y abrir 4 sucursales.
        </p>
        <a href="" class="btn">
          <p>leer más</p>
        </a>
      </section>
      <section class="dflx">
        <img src="../../assets/nos2p.png" alt="img" class="pc img2" />
        <img src="../../assets/nos2m.png" alt="img" class="mo img2" />
        <img src="../../assets/nos3p.png" alt="img" class="pc img3" />
        <img src="../../assets/nos3m.png" alt="img" class="mo img3" />
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.Nosotros {
  background-color: #e8e7e0;
}
.Nosotros .pd {
  padding: 22.222vw 0;
}
.Nosotros p {
  margin: 0;
}
.Nosotros .mo.img1 {
  display: block;
  width: 75.121vw;
}
.Nosotros .pc.img1 {
  display: none;
}
.Nosotros .mo.img2 {
  display: block;
  width: 39.614vw;
  margin: 0 1.932vw 0 8.454vw;
}
.Nosotros .pc.img2 {
  display: none;
}
.Nosotros .mo.img3 {
  display: block;
  width: 50vw;
  margin: 0;
}
.Nosotros .pc.img3 {
  display: none;
}
.Nosotros p.titulo {
  font-family: "SolfeggioBold";
  font-style: normal;
  font-weight: 700;
  font-size: 13.285vw;
  line-height: 90.5%;
  color: #2d3125;
  padding: 0 0 10.386vw 10.386vw;
}
.Nosotros p.titulo span {
  color: #a16d34;
}
.Nosotros .txtc {
  margin: 15.217vw 0;
}
.Nosotros p.txt1 {
  width: 74.879vw;
  margin: 0 0 9vw 17.633vw;
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 5.314vw;
  line-height: 9.662vw;
  color: #2d3125;
  text-align: right;
}
.Nosotros a.btn {
  width: fit-content;
  display: flex;
  letter-spacing: 0.2em;
  margin: 0 7.488vw 0 auto;
  background-image: url("../../assets/flecha2.svg");
  background-size: 14.976vw;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;
  padding-bottom: 5vw;
}
.Nosotros a.btn p {
  font-family: "Raktor";
  font-style: normal;
  font-weight: 700;
  font-size: 5.314vw;
  line-height: 6.763vw;
  color: #a16d34;
}
@media (min-width: 768px) {
  .Nosotros .mo.img1 {
    display: none;
  }
  .Nosotros .pc.img1 {
    display: block;
    width: 13.698vw;
  }
  .Nosotros .mo.img2 {
    display: none;
  }
  .Nosotros .pc.img2 {
    display: block;
    width: 20.938vw;
    height: fit-content;
  }
  .Nosotros .mo.img3 {
    display: none;
  }
  .Nosotros .pc.img3 {
    display: block;
    width: 11.406vw;
    height: fit-content;
    padding: 2.24vw 0 0 2.24vw;
  }
  .Nosotros p.titulo {
    font-size: 2.865vw;
    line-height: 90.5%;
    padding: 4.844vw 0 4.531vw 0;
  }
  .Nosotros .pd {
    padding: 4.375vw 0;
    width: fit-content;
    margin: auto;
    display: flex;
  }
  .Nosotros p.txt1 {
    font-size: 0.729vw;
    line-height: 1.458vw;
    margin: 0 0 1.458vw 0;
    width: 18.542vw;
  }
  .Nosotros a.btn p {
    font-size: 0.729vw;
    line-height: 1.458vw;
  }
  .Nosotros .txtc {
    margin: 16.302vw 0 0;
    position: relative;
    left: -3.49vw;
  }
  .Nosotros a.btn {
    width: 8.594vw;
    margin: 0 0 0 auto;
    padding-bottom: 0;
    background-size: 3vw;
    background-position-y: center;
  }
}
</style>
