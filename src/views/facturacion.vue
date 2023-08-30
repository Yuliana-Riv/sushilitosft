<template>
  <div>
    <Navigator />
    <section>
      <div class="facturacion">
        <h2>Facturación</h2>
      </div>

      <div class="sucursales">
        <a
          target="_blank"
          href="https://www.nationalsoft-cloud.com/Facturacion/MenuCliente/17672"
        >
          <div class="su__btn">
            <h3>
              Sucursal<br />
              <span class="rojo">Guerrero</span>
            </h3>
            <p>Factura <span>aquí</span></p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.nationalsoft-cloud.com/Facturacion/MenuCliente/17623"
        >
          <div class="su__btn">
            <h3>
              Sucursal<br />
              <span class="rojo">Morelos</span>
            </h3>
            <p>Factura <span>aquí</span></p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.nationalsoft-cloud.com/Facturacion/MenuCliente/17773"
        >
          <div class="su__btn">
            <h3>
              Sucursal<br />
              <span class="rojo">Casablanca</span>
            </h3>
            <p>Factura <span>aquí</span></p>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.nationalsoft-cloud.com/Facturacion/MenuCliente/17896"
        >
          <div class="su__btn">
            <h3>
              Sucursal<br />
              <span class="rojo">Tabasco</span>
            </h3>
            <p>Factura <span>aquí</span></p>
          </div>
        </a>
      </div>

      <div class="fact__parrafo">
        <p>
          Una vez emitido el ticket, se cuenta con 72 horas para solicitar la
          factura correspondiente. <br />
          Es necesario guardar su ticket para posibles aclaraciones.
          <br /><br />

          Si tiene algún problema para facturar, nos puede contactar con las
          siguientes opciones: <br />
          Morelos.
          <a href="mailto:facturacion.morelos@sushilitos.com"
            >facturacion.morelos@sushilitos.com</a
          >
         <span class="eliminar"> |</span> Tel. <a href="tel:6444135078">6444135078</a><br />
          Guerrero.
          <a href="mailto:facturacion.guerrero@sushilitos.com"
            >facturacion.guerrero@sushilitos.com</a
          >
          <span class="eliminar"> |</span> Tel. <a href="tel:6444135077">6444135077</a><br />
          Casablanca.
          <a href="mailto:facturacion.casablanca@sushilitos.com"
            >facturacion.casablanca@sushilitos.com</a
          >
          <span class="eliminar"> |</span> Tel. <a href="tel:6444313111">6444313111</a><br />
          Tabasco.
          <a href="mailto:facturacion.tabasco@sushilitos.com"
            >facturacion.tabasco@sushilitos.com</a
          >
          <span class="eliminar"> |</span> Tel. <a href="tel:6444171830">6444171830</a><br />
        </p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "facturacion",
  components: {
    Navigator,
    Footer,
  },
  data() {
    return {
      status: "error",
      message: "",
    };
  }, 
};
</script>

<style scoped>
h3,
h2,
p {
  margin: 0;
}

section {
  background-image: url(../assets/bg-crema.png);
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.facturacion h2 {
  font-family: "SolfeggioBold";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.su__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #a16d34;
}

.sucursales .su__btn h3 {
  font-family: "SolfeggioBold";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  color: #a16d34;
}

.sucursales .su__btn p {
  font-family: "Roboto Serif";
  font-style: italic;
  font-weight: 400;
}

.fact__parrafo p {
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 400;
  color: #2d3125;
}

.fact__parrafo p a:nth-of-type(odd) {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .facturacion {
    margin: 57.729468599033815VW auto 10.628019323671497vw;
  }

  .facturacion h2 {
    color: #a16d34;
    font-size: 10.869565217391305vw;
    line-height: 90.5%;
  }

  .sucursales a {
    display: flex;
    width: 82.1256038647343vw;
    height: 41.78743961352657vw;
    margin: 0 auto 7.246376811594203vw;
  }

  .sucursales a:last-of-type {
    margin-bottom: 15.458937198067632vw;
  }

  .su__btn {
    width: 82.1256038647343vw;
    height: 41.78743961352657vw;
  }

  .su__btn h3 {
    font-size: 6.038647342995169vw;
    line-height: 5.463768115942029vw;
    margin: 11.352657004830919vw auto 1.932367149758454vw;
  }

  .rojo {
    color: #a31f25;
    font-size: 9.66183574879227vw;
    line-height: 8.743961352657005vw;
  }

  .su__btn p {
    color: #a16d34;
    font-size: 4.830917874396135vw;
    line-height: 5.657004830917875vw;
  }

  .su__btn p span {
    font-weight: 700;
  }

  .fact__parrafo {
    margin: 0 9.057971014492754vw 15.217391304347828vw;
    text-align: center;
  }

  .fact__parrafo p {
    font-size: 4.3478260869565215vw;
    line-height: 6.763285024154589vw;
  }

  .eliminar {
    display: none;
  }

  .fact__parrafo p a:nth-of-type(odd)::before,
  .fact__parrafo p a:nth-of-type(odd)::after,
  .fact__parrafo p a:nth-of-type(even)::after {
      content: "\A";
      white-space: pre;
  }

  .fact__parrafo p a:last-of-type::after {
    content: "";
  }
}

@media (min-width: 768px) {
  .facturacion {
    margin: 16.771vw auto 2.1354166666666665vw;
  }

  .facturacion h2 {
    color: #d0985d;
    font-size: 2.864583333333333vw;
    line-height: 2.5921875vw;
  }

  .sucursales {
    margin: 0 auto 4.0625vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 4.791666666666667vw;
    row-gap: 2.604166666666667vw;
  }

  .su__btn {
    width: 17.708333333333336vw;
    height: 9.010416666666666vw;
    transition: background-color 0.5s;
    position: relative;
  }

  .su__btn h3 {
    font-size: 1.3020833333333335vw;
    line-height: 1.178125vw;
    margin: 2.9166666666666665vw auto;
    display: block;
    opacity: 1;
    transition: opacity 0.5s;
  }

  .rojo {
    font-size: 2.083333333333333vw;
    line-height: 1.8854166666666667vw;
  }

  .su__btn p {
    display: block;
    font-size: 1.3020833333333335vw;
    line-height: 1.178125vw;
    margin: auto;
    color: #dcd3ca;
    text-transform: uppercase;
    font-style: normal !important;
    font-weight: 700 !important;
    font-family: "SolfeggioBold";
    position: absolute;
    top: 3.90625vw;
    opacity: 0;
    transition: opacity 0.5s;
  }

  /* EL EFECTO HOVER */

  .sucursales .su__btn p {
    font-family: "SolfeggioBold";
    font-weight: 700;
  }
  
  .su__btn:hover {
    background-color: #a31f25;
    border: invisible;
    transition: background-color 0.5s;
  }

  .su__btn:hover h3 {
    opacity: 0;
    transition: opacity 0.5s;
  }

  .su__btn:hover p {
    opacity: 1;
    transition: opacity 0.5s;
  }

  .fact__parrafo {
    margin: 0 auto 8.541666666666666vw;
    text-align: center;
  }

  .fact__parrafo p {
    font-size: 0.7291666666666666vw;
    line-height: 1.4583333333333333vw;
  }
}
</style>