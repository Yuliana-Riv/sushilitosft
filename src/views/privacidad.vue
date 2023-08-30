<template>
    <section>
    <Navigator/>

        <div class="privacidad">
            <div class="privacidad__titulo">
                <h2>Políticas de <span class="privacidad__color">privacidad</span></h2>
            </div>

            <div class="privacidad__parrafo">
                <p>https://www.sushilitos.com.mx</p>
                <p>direcciongeneral@sushilitos.com <br>
JJP SUSHILITO DE OBREGON <br>
SO170213QH9 <br>
QUINTANA ROO 1001 COLONIA CUAUHTEMOC CIUDAD OBREGON, SONORA C.P. 85110</p>
<p>Aviso de privacidad integral <br>
Sushilito de Obregón mejor conocido como Sushilito, con domicilio en Quintana Roo #1001 Colonia Cuauhtemoc Ciudad obregón, Sonora C.P. 85110 y portal de internet www.sushilitos.com.mx, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br>
¿Para qué fines utilizaremos sus datos personales? <br>
Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: <br>
Respuesta a mensajes del formulario de contacto, Prestación de cualquier servicio solicitado <br>
¿Qué datos personales utilizaremos para estos fines? <br>
Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: <br>
Datos de identificación y contacto</p>
<p>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento? <br>
Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a direcciongeneral@sushilitos.com y deberá contener: <br>
Nombre completo del titular. <br>
Domicilio. <br>
Teléfono. <br>
Correo electrónico usado en este sitio web. <br>
Copia de una identificación oficial adjunta. <br>
Asunto «Derechos ARCO»</p>
<p>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros. <br>
¿En cuántos días le daremos respuesta a su solicitud? <br>
20 días <br>
d) ¿Por qué medio le comunicaremos la respuesta a su solicitud? <br>
direcciongeneral@sushilitos.com</p>
<p>El uso de tecnologías de rastreo en nuestro portal de internet <br>
Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: <br>
Identificadores, nombre de usuario y contraseñas de sesión <br>
Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.</p>
<p>¿Cómo puede conocer los cambios en este aviso de privacidad? <br>
El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web www.sushilitos.com.mx.</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

            </div>
        </div>
    <Footer/>

    </section>

</template>

<script>

import Navigator from '../components/fixed/Navigator.vue' 
import Footer from '../components/Footer.vue';
export default {
  name: "facturacion",
  data() {
    return {
      status: "error",
      message: "",
    };
  },
  components: {
Navigator, 
Footer
  },
};
</script>

<style scoped>
h2,
p {
    margin: 0;
}

.privacidad {
    background-image: url(../assets/bg-crema.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
}

.privacidad__titulo h2 {
    font-family: 'Solfeggio';
    font-style: normal;
    font-weight: 700;
    color: #A16D34;
    text-transform: uppercase;
}

.privacidad__color {
    color: #00322C;
}

.privacidad__parrafo p {
    color: #2D3125;
    font-family: var(--roboto);
    font-style: normal;
    font-weight: 400;
}

@media (max-width: 767px) {
    .privacidad__titulo {
        margin: 0 auto 9.66183574879227VW;
        padding-top: 21.980676328502415VW;
        text-align: center;
    }

    .privacidad__titulo h2 {
        font-size: 10.869565217391305VW;
        line-height: 11.83574879227053VW;
    }

    .privacidad__parrafo {
        margin: 0 9.420289855072465VW;
        padding-bottom: 33.81642512077295VW;
    }

    .privacidad__parrafo p {
        font-size: 4.3478260869565215VW;
        line-height: 7.729468599033816VW;
    }
}

@media (min-width: 768px) {
    .privacidad__titulo {
        margin: 0 auto 7.135416666666666VW;
        padding-top: 10.3125VW;
        display: flex;
    }

    .privacidad__titulo h2 {
        margin: 0 auto;
        font-size: 2.864583333333333VW;
        line-height: 2.604166666666667VW;
    }

    .privacidad__parrafo {
        margin: 0 21.197916666666668VW;
        padding-bottom: 8.489583333333334VW;
    }

    .privacidad__parrafo p {
        font-size: 0.7291666666666666VW;
        line-height: 1.4583333333333333VW
    }
}
</style>