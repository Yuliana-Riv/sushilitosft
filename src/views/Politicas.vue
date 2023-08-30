<template>
  <div class="politicas">
    <Navigator />
    <div class="banner">
      <p class="tit1">Política de Privacidad</p>
    </div>

    <div class="contenido">
      <p class="txt1">
        HUUPA Coffee, empresa legalmente constituida de conformidad con las
        leyes mexicanas con domicilio fiscal en  C. Pino Suárez 90, Centro,
        83000, en la ciudad de Hermosillo, Sonora, es responsable de recabar sus
        datos personales, del uso que se le dé a los mismos y de su protección.
        FINES DE USO DE INFORMACIÓN RECABADA Los datos personales que recabamos
        de usted, los utilizaremos para las siguientes finalidades que son
        necesarias para el servicio que solicita: •Informar sobre promociones,
        actividades y/o eventos • Evaluar calidad en el servicio. De manera
        adicional, utilizaremos su información personal para las siguientes
        finalidades secundarias que no son necesarias para el servicio
        solicitado, pero que nos permiten y facilitan brindarle una mejor
        atención: • Mercadotecnia y/o publicidad. Los datos que podemos recabar
        para los fines mencionados en el presente Aviso de Privacidad Integral
        son los siguientes: • Nombre. • Correo electrónico. • Dirección. •
        Teléfono. Sus datos podrán ser proporcionados a terceros única y
        exclusivamente a fabricantes y/o proveedores, con los que HUUPA Coffee
        mantiene una relación lícita y ética de negocios, para efectos de
        Marketing siempre con las limitaciones señaladas en la Ley Federal de
        Protección de Datos Personales en Posesión de Particulares. Todos sus
        datos personales son tratados con estricta confidencialidad de acuerdo a
        la legislación aplicable y vigente en el país, por ello le informamos
        que usted tiene en todo momento los derechos para el Acceso,
        Rectificación, Cancelación u Oposición al tratamiento que le damos a sus
        datos personales (Derechos ARCO), los cuales usted o su representante
        legal podrán hacer valer elaborando la “Solicitud Ejercicio de los
        Derechos ARCO” y enviarla escaneada dirigida a nuestra área de
        Protección de Datos al correo electrónico contacto@huupa.coffee o por
        escrito en cualquiera de nuestras sucursales. Es importante que
        considere los siguientes puntos al momento de enviar o entregar su
        solicitud: • Indicar su nombre, domicilio y correo electrónico para
        poder comunicarle la respuesta a su solicitud. • Indicar los datos
        personales respecto de los que se busca ejercer alguno de los derechos.
        • Anexar cualquier documento o información que facilite la localización
        de sus datos personales. • Anexar copia del documento que acredite su
        identidad (credencial de elector, cédula profesional o pasaporte
        vigente). CAMBIOS AL AVISO DE PRIVACIDAD HUUPA Coffee se reserva el
        derecho de modificar en cualquier momento y sin previo aviso el presente
        aviso de privacidad por actualizaciones legislativas, jurisprudenciales,
        políticas internas, nuevos requisitos para la venta de productos en
        nuestra Tienda Online y/o cualquier otra causa. En tal caso, las
        modificaciones estarán disponibles en nuestra página de internet
        www.huupa.xyz, por lo que le recomendamos verificar periódicamente en
        caso de que existan cambios.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import { url } from "../global/index";
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "TERMINOS",
  components: {
    Navigator,
    Footer,
  },
  metaInfo() {
    return {
      title: "Política de Privacidad",
      titleTemplate: "%s | Soma Inmobiliaria",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "Soma Inmobiliaria.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
};
</script>

<style scoped>
.terminos {
  display: block;
}

.banner {
  display: block;
  width: 100vw;
  height: 79.95169082125604vw;
  background-image: url("../../src/assets/slidemo.png");
}

.tit1 {
  display: block;
  color: #e40424;
  font-size: 8.454106280193237vw;
  text-align: center;
  margin: auto;
  padding-top: 48.06763285024155vw;
  padding-left: 24.396135265700483vw;
  padding-right: 24.396135265700483vw;
  padding-bottom: 14.975845410628018vw;
  font-family: "Montserrat";
  font-weight: 700;
}

.contenido {
  display: block;
}

.txt1 {
  display: block;
  font-size: 5.314009661835748vw;
  color: #909090;
  margin: auto;
  padding-left: 12.318840579710146vw;
  padding-right: 12.318840579710146vw;
  padding-top: 14.975845410628018vw;
  padding-bottom: 14.975845410628018vw;
  font-weight: 400;
  font-family: "Montserrat";
}

@media (min-width: 768px) {
  .terminos {
    display: block;
  }

  .banner {
    display: block;
    width: 100vw;
    height: 25.364583333333336vw;
    background-image: url("../../src/assets/slidepc.png");
  }

  .tit1 {
    display: block;
    color: #e40424;
    font-size: 2.604166666666667vw;
    margin: auto;
    padding-top: 18.59375vw;
    padding-left: 30.84375vw;
    padding-right: 30.84375vw;
    padding-bottom: 4.427083333333334vw;
    font-family: "Montserrat";
    text-align: center;
    font-weight: 700;
  }

  .contenido {
    display: block;
  }

  .txt1 {
    display: block;
    font-size: 1.0416666666666665vw;
    color: #909090;
    margin: auto;
    padding-left: 9.166666666666666vw;
    padding-right: 9.166666666666666vw;
    padding-top: 5.833333333333333vw;
    padding-bottom: 5.15625vw;
    font-weight: 400;
    font-family: "Montserrat";
  }
}
</style>
