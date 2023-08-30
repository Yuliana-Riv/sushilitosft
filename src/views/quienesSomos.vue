<template>
    <section class="somos__fondo">
        <Navigator />
        <div class="somos__titulo">
            <h2>Quienes <span>somos</span></h2>
        </div>

        <div class="contenido__1">
            <div class="parrafo__1">
                <p><span>Sushilito’s</span> es un restaurante de Sushi y comida japonesa ubicados en Ciudad Obregón; con un
                    concepto diferente y un menú lleno de rollos y platillos que no encontrarás en otro lugar. <br><br>

                    Dedicados siempre a brindarte el mejor servicio, ambiente y sobre todo la mejor calidad en bebidas y
                    alimentos.</p>
            </div>

            <div class="p1__img1">
                <img src="../assets/team.png" alt="">
            </div>
            <div class="p1__img2">
                <img src="../assets/bebida.png" alt="">
            </div>
            <div class="p1__img3">
                <img src="../assets/esparragos.png" alt="">
            </div>


            <div class="parrafo__2">
                <p>Actualmente hemos logrado crecer en la ciudad y abrir 4 sucursales incluido en ellas un restaurante bar;
                    todo esto gracias a la aceptación de la comunidad y nuestros esfuerzos por siempre estar innovando en el
                    mercado. <br><br>

                    <span>Nuestro objetivo principal</span> es que nuestros clientes puedan disfrutar su estancia en
                    nuestros restaurantes, tratando siempre de estar atentos a cada detalle.
                </p>
            </div>
        </div>

        <div class="separador">
            <div></div>
        </div>

        <div class="contenido__2">
            <div>
                <img src="../assets/enchilados.png" alt="">
            </div>

            <div class="vision">
                <h4>visión</h4>
                <div>
                    <p>Fortalecer cada una de las sucursales existentes y posicionarnos como líderes en la región, así como
                        ser reconocidos por calidad, sabor y rapidez. Lograr una expansión fuera de la ciudad y posicionar
                        la marca Sushilito´s de Obregón a nivel Noroeste.</p>
                </div>
            </div>

            <div class="mision">
                <h4>misión</h4>
                <div>
                    <p>Satisfacer el paladar de nuestros clientes a través de la elaboración del mejor sushi conservando
                        nuestro estilo mexicano, así mismo garantizar el 100% en la calidad, rapidez y excelente atención al
                        cliente tanto en la entrega en piso como en la entrega a domicilio. </p>
                </div>
            </div>

            <div>
                <img src="../assets/toronja.png" alt="">
            </div>
        </div>

        <div class="separador desaparecer">
            <div></div>
        </div>

        <div class="contenido__3">
            <div>
                <h2>Nuestro <span>personal</span></h2>
            </div>
            <div class="carrusel__fondo">
                <div class="carrusel" ref="carrusel">
                    <img v-for="(s, i) in arr" :key="i" :src="s.image" alt="">
                </div>
                <div class="flechas">
                    <img src="../assets/flecha_izquierda.png" alt="" id="izquierda" @click="izquierdaFun" :class = "{'v1': v1==true}">
                    <img src="../assets/flecha_derecha.png" alt="" id="derecha" @click="derechaFun" :class = "{'v1': v1==true}">
                </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/Footer.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "Quienes somos",
    data() {
        return {
            status: "error",
            message: "",
            arr: [
                {
                    image: require('../assets/personal.png')
                }, {
                    image: require('../assets/personal_1.png')
                }, {
                    image: require('../assets/personal_2.png')
                }, {
                    image: require('../assets/personal_3.png')
                }, {
                    image: require('../assets/personal_3.png')
                }, {
                    image: require('../assets/personal_2.png')
                }, {
                    image: require('../assets/personal_1.png')
                }, {
                    image: require('../assets/personal.png')
                }, {
                    image: require('../assets/personal.png')
                }, {
                    image: require('../assets/personal_3.png')
                }, {
                    image: require('../assets/personal_2.png')
                }, {
                    image: require('../assets/personal_1.png')
                }, {
                    image: require('../assets/personal.png')
                }, {
                    image: require('../assets/personal.png')
                }
            ],
            v1: false,
        };
    },
    components: {
        Navigator,
        Footer,
    },

    methods: {

        derechaFun() {
            console.log('Me muevo a la derecha!')
                const carrusel = this.$refs.carrusel;
                let gap = window.innerWidth/300
                let fotos = 4
                if (window.innerWidth < 768) {
                    gap = 2;
                    fotos = 1;
                }
                carrusel.scrollLeft += (carrusel.offsetWidth/fotos + gap );
                console.log(carrusel.scrollLeft)
                this.v1 = true;
                setTimeout(() => this.v1 = false, 500);
        }, 

        izquierdaFun() {
            console.log('Me muevo a la izquierda!')
            const carrusel = this.$refs.carrusel;
                let gap = window.innerWidth/300
                let fotos = 4
                if (window.innerWidth < 768) {
                    gap = 2.5;
                    fotos = 1;
                }
                carrusel.scrollLeft -= (carrusel.offsetWidth/fotos + gap );
                console.log(carrusel.scrollLeft)
                this.v1 = true;
                setTimeout(() => this.v1 = false, 500);
            }
    }
};


</script>

<style scoped>
h2,
h4,
p {
    margin: 0;
}

.somos__fondo {
    background-color: #DCD3CA;
}

.somos__titulo h2 {
    font-family: "SolfeggioBold";
    font-style: normal;
    font-weight: 700;
    color: #D0985D;
    text-transform: uppercase;
}

.contenido__1 p {
    font-family: 'Roboto Serif';
    font-style: normal;
    font-weight: 400;
    color: #2D3125;
}

.parrafo__1 span {
    font-style: italic;
    font-weight: 700;
    color: #D0985D;

}

.parrafo__2 span {
    font-style: italic;
    font-weight: 700;
    color: #2D3125;
}

.separador div {
    width: 100%;
    height: 0;
    border: 0.5px solid #A16D34;
}

.contenido__2 h4 {
    font-family: 'Roboto Serif';
    font-style: normal;
    font-weight: 700;
    color: #A16D34;
}

.contenido__2 p {
    font-family: 'Roboto Serif';
    font-style: normal;
    font-weight: 400;
    color: #2D3125;
}

.contenido__3 h2 {
    font-family: "SolfeggioBold";
    font-style: normal;
    font-weight: 700;
    color: #D0985D;
    text-transform: uppercase;
}

.contenido__3 span {
    color: #00322C;
}

.carrusel {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none; 
    scrollbar-width: none;
}

.v1 {
    pointer-events: none;
}
.carrusel img {
    pointer-events: none;
}

.carrusel::-webkit-scrollbar {
    display: none;
}

.contenido__3 .flechas img {
    cursor: pointer;
}

/* Celular */
@media (max-width: 767px) {

    .somos__titulo {
        margin: auto 19.067633VW;
        text-align: center;
        padding: 57.48792270531401VW 0 15.458937198067632VW;
    }

    .somos__titulo h2 {
        font-size: 13.285024154589372VW;
        line-height: 90.5%;
    }

    .somos__titulo span {
        color: #2D3125;
    }

    .parrafo__1 {
        margin: 0 18.347826VW 8.454106280193237VW;
    }

    .contenido__1 p {
        font-size: 4.3478260869565215VW;
        line-height: 178%;
        text-align: center;
    }

    .p1__img1 {
        width: 100vw;
        display: flex;
    }

    .p1__img1 img {
        width: 100vw;
        height: 80.91787439613528VW;
    }

    .p1__img2 {
        display: inline;
        width: 50vw;
        height: 51.93236714975845VW;
    }

    .p1__img2 img {
        width: 50vw;
        height: 51.93236714975845VW;
        content: url(../assets/bebida-cel.png);
    }

    .p1__img3 {
        display: inline;
        width: 50vw;
        height: 51.93236714975845VW;
    }

    .p1__img3 img {
        width: 50vw;
        height: 51.93236714975845VW;
        content: url(../assets/esparragos-cel.png);
    }

    .parrafo__2 {
        margin: 8.454106280193237VW 18.77826VW 12.560386473429952VW;
    }

    .separador {
        margin: 0 15.821256038647343VW 12.560386473429952VW;
    }

    .contenido__2 div img {
        display: none;
    }

    .contenido__2 h4 {
        text-align: center;
        font-size: 4.3478260869565215VW;
        line-height: 156%;
    }

    .vision div {
        margin: 0 11.352657004830919VW 12.80193236714976VW;
    }

    .contenido__2 p {
        font-size: 4.3478260869565215VW;
        line-height: 178%;
        text-align: center;
    }

    .mision div {
        margin: 0 11.352657004830919VW 12.80193236714976VW;
    }

    .contenido__3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contenido__3 h2 {
        font-size: 8.454106280193237VW;
        line-height: 90.5%;
    }

    .contenido__3 .flechas {
        display: flex;
        justify-content: center;
        margin-top: 7.004830917874397VW;
        margin-bottom: 25.120772946859905VW;
    }

    .contenido__3 .flechas img {
        width: 3.6231884057971016VW;
        height: 8.454106280193237VW;
    }

    .contenido__3 .flechas img:first-of-type {
        margin-right: 13.043478260869565VW;
    }

    .carrusel {
        margin-top: 9.178743961352657VW;
        width: 76.270048VW;
        column-gap: 1px;
    }

    .carrusel img {
        width: 76.57004830917874VW;
        height: 76.32850241545893VW;
    }
}

/* PC */
@media (min-width: 768px) {

    .somos__titulo {
        padding: 11.979166666666668VW 0 2.2916666666666665VW;
        margin: 0 0 0 15.104166666666666VW;
    }

    .somos__titulo h2 {
        font-size: 2.864583333333333VW;
        line-height: 90.5%;
    }

    .somos__titulo span {
        color: #00322C;
    }

    .contenido__1 {
        margin: 0 15.130208333333334VW 2.8125VW;
        position: relative;
        width: 69.73958333333333VW;
        height: 24.6875VW;
    }

    .parrafo__1 {
        position: absolute;
        width: 18.541667VW;
        left: 0;
        text-align: end;

    }

    .parrafo__1 p {
        font-size: 0.7291666666666667VW;
        line-height: 1.358333VW;
    }

    .parrafo__2 {
        position: absolute;
        width: 18.541667VW;
        bottom: 0;
        right: 0;
    }

    .parrafo__2 p {
        font-size: 0.7291666666666667VW;
        line-height: 1.358333VW;
    }

    .p1__img1 {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 28.958333333333336VW;
    }

    .p1__img1 img {
        width: 28.958333333333336VW;
        height: 24.6875VW;
    }

    .p1__img2 {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
    }

    .p1__img2 img {
        width: 18.541667VW;
        height: 11.197916666666668VW;
    }

    .p1__img3 {
        position: absolute;
        right: 0;
        display: flex;
    }

    .p1__img3 img {
        width: 18.541667VW;
        height: 9.479166666666666VW;
    }

    .separador {
        margin: 0 12.135416666666666VW 2.7604166666666665VW;
    }

    .contenido__2 {
        position: relative;
        margin: 0 15.156249999999998VW 5.572916666666667VW;
        width: 69.6875VW;
        height: 19.53125VW;
    }

    .contenido__2 img {
        position: absolute;
        width: 18.541666666666668VW;
        height: 19.53125VW;
    }

    .contenido__2 div:last-of-type img {
        top: 0;
        right: 0;
    }

    .vision {
        position: absolute;
        left: 20.3125VW;
        top: 1.0416666666666665VW;
    }

    .vision h4,
    .mision h4 {
        font-size: 0.625VW;
        line-height: 1.658333VW;
    }

    .vision div,
    .mision div {
        width: 29vw;
    }

    .vision p,
    .mision p {
        font-size: 0.525VW;
        line-height: 1.658333VW;
        letter-spacing: 0.01em;
    }

    .mision {
        position: absolute;
        left: 20.3125VW;
        top: 9.133333VW;
    }

    .desaparecer {
        display: none;
    }

    .carrusel__fondo {
        position: relative;
        margin-bottom: 10.46875VW;
    }
    .contenido__3>div:first-of-type {
        margin: auto auto 1.7187500000000002VW 15.104166666666666VW;
    }

    .contenido__3 h2 {
        font-size: 1.8229166666666667VW;
        line-height: 90.5%;
    }

    .contenido__3 .flechas {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 11.875VW;
    }

    .contenido__3 .flechas img {
        width: 0.78125VW;
        height: 1.8229166666666667VW;
    }

    .contenido__3 .flechas img:first-of-type {
        margin-bottom: 2.083333333333333VW;
    }

    .carrusel {
        display: flex;
        margin: 0 15.104166666666666VW;
        column-gap: 1.3020833333333335VW;
        width: 69.9700vw;
        height: 16.3vw;
    }

    .carrusel img {
        width: 16.510416666666668VW;
        height: 16.458333333333332VW;
    }
}</style>