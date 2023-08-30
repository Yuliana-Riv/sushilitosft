<template>
    <section>
        <Navigator />
        <div class="sucursales__fondo">
            <h2>sucursales</h2>
        </div>
        <div>
            <div class="sucursales__elem" v-for="(e, c) in data" :key="c">
                <div class="elemento__dir">
                    <div class="elemento__matriz">
                        <h3>{{e.tipo}}<br>
                            <span>{{ e.nombre }}</span>
                        </h3>
                    </div>

                    <div class="elemento__addr">
                        <address>{{ e.direccion }}</address>
                    </div>

                    <div class="elemento__numero">
                        <div class="elemento__numfondo" v-for="(t, j) in e.telefonos">
                            <p>Tel. <a :href="'tel:' + t.numero">{{ t.numero }}</a></p>
                        </div>
                    </div>
                </div>
                <div class="elemento__img">
                    <img :src="srcImg(e.image)" alt="sucursal">
                </div>
                <div class="elemento__iframe" v-html="e.mapa">
            
                </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
import { mapActions } from "vuex";
import { url } from '../global/index';
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Sucursales",
    data() {
        return {
            status: "error",
            message: "",
        };
    },
    components: {
        Navigator,
        Footer,
    }, created() { this.getAllInfoSuc("sucursales") },
    computed: {
        data() {
            return this.$store.getters["sucursales/data"]
        }
    },
    methods: {
        ...mapActions("sucursales", ["getAllInfoSuc"]),
        srcImg: function (img) {
            console.log(img)
            let src = `${url}/get-sucursales-image/${img}`

            return src
        },
    },
};
</script>

<style scoped>
section {
    background-color: #DCD3CA;
}

h1,
h2,
h3,
h4,
p {
    margin: 0;
}

.sucursales__fondo {
    text-align: center;
}

.sucursales__fondo h2 {
    font-family: "SolfeggioBold";
    font-style: normal;
    font-weight: 700;
    color: #00322C;
    text-transform: uppercase;
}

.elemento__matriz,
.elemento__addr {
    text-align: center;
}

.elemento__matriz h3 {
    font-family: "SolfeggioRegular";
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    color: #D0985D;
}

.elemento__matriz h3 span {
    color: #A31F25;
    font-family: "SolfeggioBold";
    font-weight: 700;
}

.elemento__addr address {
    color: #00322C;
    font-family: 'Roboto Serif';
    font-style: normal;
    font-weight: 400;
}

.elemento__numero {
    display: flex;
}

.elemento__numfondo {
    border: 1px solid #00322C;
    width: fit-content;
}

.elemento__numero p {
    font-family: var(--roboto);
    font-weight: 400;
}

/* MQ Celular */
@media (max-width: 767px) {
    .sucursales__fondo {
        padding: 58.212560386473434VW 0 19.565217391304348VW;
    }

    .sucursales__fondo h2 {
        font-size: 10.869565217391305VW;
        line-height: 11.83574879227053VW;
    }

    .sucursales__elem {
        display: flex;
        flex-direction: column;
        padding-bottom: 28.3743961352657VW;
    }

    .elemento__matriz {
        padding-top: 7.246376811594203VW;
    }

    .elemento__matriz h3 {
        font-size: 5.797101449275362VW;
        line-height: 7.729468599033816VW;
    }

    .elemento__matriz h3 span {
        font-size: 8.454106280193237VW;
        line-height: 7.729468599033816VW;
    }

    .elemento__dir {
        order: 3;

    }

    .elemento__addr {
        padding: 6.038647342995169VW 16.908212560386474VW;
        width: 67vw;
    }

    .elemento__addr address {
        font-size: 4.3478260869565215VW;
        line-height: 5.091787439613526VW;
    }

    .elemento__numero {
        flex-direction: column;
        row-gap: 7.7729468599033815VW;
        place-items: center;
    }

    .elemento__numero p {
        padding: 3.5024154589371985VW 7.85024154589372VW;
        font-size: 5.314009661835748VW;
        line-height: 6.222222222222222VW;
    }

    .elemento__img {
        order: 1;
        width: 77.53623188405797VW;
        height: 40.09661835748793VW;
        margin-left: 11.231884057971014VW;
    }

    .elemento__img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .elemento__iframe {
        order: 2;
        width: 77.53623188405797VW;
        margin-left: 11.231884057971014VW;
    }
}

/* MQ Computadora */
@media (min-width: 768px) {
    .sucursales__fondo {
        padding: 16.770833333333332VW 0 5.416666666666667VW;
    }

    .sucursales__fondo h2 {
        font-size: 2.864583333333333VW;
        line-height: 90.5%;
    }

    .sucursales__elem {
        display: flex;
        align-items: center;
    }

    /* En caso de que se agruegue una o más sucursales*/
    .sucursales__elem:nth-of-type(odd) {
        flex-direction: row;
        margin: 0 13.385416666666666VW 5.3125VW 17.135416666666668VW;
    }

    .sucursales__elem:nth-of-type(even) {
        flex-direction: row-reverse;
        margin: 0 17.135416666666668VW 5.3125VW 13.385416666666666VW;
    }

    .sucursales__elem:last-of-type {
        padding-bottom: 11.770833333333334VW !important;
    }

    .elemento__matriz {
        padding-top: 1.59375VW;
    }

    .elemento__matriz h3 {
        font-size: 1.25VW;
        line-height: 1.6666666666666667VW;
    }

    .elemento__matriz h3 span {
        font-size: 1.8229166666666667VW;
        line-height: 1.6666666666666667VW;
    }

    .elemento__dir {
        width: 16.979166666666668VW;
    }

    .sucursales__elem:nth-of-type(odd) .elemento__dir {
        padding: 2.467708VW 3.6979166666666665VW 3.567708333333333VW 0;
    }

    .sucursales__elem:nth-of-type(even) .elemento__dir {
        padding: 2.467708VW 0 3.567708333333333VW 3.6979166666666665VW;
    }

    .elemento__addr {
        padding: 1.3020833333333335VW 1.5VW;
        width: 14vw;
    }

    .elemento__addr address {
        font-size: 0.7291666666666666VW;
        line-height: 0.8333333333333334VW;
    }

    .elemento__numero {
        column-gap: 1.25VW;
        row-gap: 1.0416666666666665VW;
        padding-bottom: 0.8vw;
        flex-wrap: wrap;
        justify-content: center;
    }

    .elemento__numero p {
        padding: 0.49479166666666663VW 1.015625VW;
        font-size: 0.7291666666666666VW;
        line-height: 0.8536458333333333VW;
    }

    .elemento__img {
        width: 24.375VW;
        height: 19.270833333333336VW;
    }

    .elemento__img img {
        width: 100%;
        height: 100%;
    }

    .elemento__iframe {
        width: 24.375VW;
        height: 19.270833333333336VW;
    }
}</style>