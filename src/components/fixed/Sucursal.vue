<template>
<section class="sucursales">

    <div class="suc__hea">
        <h2 class="sucursales__titulo">Sucursales</h2>

        <div class="ver__mas">
            <a href="#">ver más</a>
            <a href="#">
                <img src="../../assets/flecha-derecha.png" alt="flecha vector">
            </a>
        </div>
    </div>

    <div class="sucursal__fondo">
        <div class="con__sucursal" v-for="(p, q) in data" :key="q">
            <div>
                <img :src="srcImg(p.image)" alt="sucursal">

                <div class="dir__text">
                    <h3 class="dir__tit">{{p.tipo}} <span>{{ p.nombre }}</span></h3>

                    <p class="dirr__p">{{p.direccion}}</p>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import { mapActions } from "vuex";
import { url } from '../../global/index';
export default {
  name: "sucursal",
  data() {
    return {
      status: "error",
      message: "",
    };
  },
  components: {
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
    .sucursales {
        background-color: #DCD3CA;
        display: flex;
        flex-direction: column;
    }

    .sucursales__titulo {
        margin: 21.497584541062803VW 0 1.6908212560386473VW 10.869565217391305VW;
        color: #2D3125;
        font-family: "SolfeggioBold";
        font-style: normal;
        font-weight: 700;
        font-size: 12.077294685990339VW;
        line-height: 90.5%;
        text-transform: uppercase;
    }

    .ver__mas {
        display: flex;
        flex-direction: column;
        margin-left: 10.869565217391305VW;
    }

    .ver__mas  a {
        display: block;
        font-family: var(--roboto);
        font-style: normal;
        font-weight: 700;
        font-size: 5.314009661835748VW;
        line-height: 6.763285024154589VW;
        color: #A16D34;
        width: fit-content;
        margin-bottom: 4.5893719806763285VW;
    }

    .ver__mas a:last-of-type {
        margin-bottom: 8.695652173913043VW;
    }

    .sucursal__fondo {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .con__sucursal {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 15.1913041739vw;
    }

    .con__sucursal img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .con__sucursal > div {
        position: relative;
        width: 81.15942028985508VW;
        height: 87.43961352657004VW;
    }

    .con__sucursal:last-of-type {
        padding-bottom: 34.5410628019vw;
    }

    .dir__text {
        background-color: black;
        width: 86.95652173913044VW;
        height: 34.54106280193236VW;
        position: absolute;
        z-index: 2;
        top: 59.198551VW;
        left: -2.898550724637681VW;
    }

    .dir__tit {
        font-family: "SolfeggioRegular";
        color: #D0985D;
        font-style: normal;
        font-weight: 400;
        font-size: 7.246376811594203VW;
        line-height: 5.797101449275362VW;
        text-align: center;
        margin: 6.280193236714976VW auto 5.314009661835748VW ;
        text-transform: uppercase;
    }

    .dir__tit span {
        font-family: "SolfeggioBold";
        color: #A31F25;
        font-style: normal;
        font-weight: 700;
        font-size: 8.454106280193237VW;
        line-height: 5.797101449275362VW;
        text-align: center;
    }

    .dirr__p {
        font-family: var(--roboto);
        color: #DCD3CA;
        font-style: normal;
        font-weight: 400;
        font-size: 5.314009661835748VW;
        line-height: 6.222222222222222VW;
        text-align: center;
        padding-bottom: 4.5893719806763285VW;
        margin: 0;
    }

    /* Media Querie */
    @media (min-width: 768px) {

        .suc__hea {
            display: flex;
        }

        .sucursales__titulo {
            margin: 8.4375VW 2.604166666666667VW 3.958333333333333VW 11.510416666666666VW;
            font-size: 2.864583333333333VW;
            text-transform: uppercase;
        }

        .ver__mas {
            flex-direction: row;
            margin-left: 0;
        }

        .ver__mas a {
            font-size: 0.7291666666666666VW;
            line-height: 1.4583333333333333VW;
            margin: 8.99VW 0.9895833333333333VW 0 0;
        }

        .ver__mas a:last-of-type {
            margin: 9.23vw 0 0 0;
        }

        .sucursal__fondo {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 5.78125VW;
            row-gap: 5.78125VW;
            margin: 0 12.9345vw;
            padding-bottom: 9.53125VW;
        }

        .con__sucursal {
            display: flex;
            margin: 0;
            width: 13.697916666666668VW;
            height: 18.854166666666668VW;
            padding-bottom: 0;
        }

        .con__sucursal img {
            width: 13.697916666666668VW;
            height: 18.854166666666668VW;
            padding-bottom: 0;
        }

        .con__sucursal:last-of-type {
            padding-bottom: 0;
        }

        .con__sucursal:first-of-type > div {
            position: relative;
        }

        .con__sucursal:last-of-type > div {
            position: relative;
        }

        .dir__text {
            width: 14.895833333333334VW;
            height: 5.364583333333333VW;
            z-index: 2;
            top: 12.708333333333332VW;
            left: 0;
        }

        .dir__tit {
            font-size: 0.7291666666666666VW;
            line-height: 1.25VW;
            text-align: start;
            margin: 0.9895833333333333VW 0 0.78125VW 1.40625VW;
        }

        .dir__tit span {
            font-size: 1.25VW;
            line-height: 1.25VW;
            text-align: start;
        }

        .dirr__p {
            font-size: 0.5208333333333333VW;
            line-height: 0.6098958333333334VW;
            text-align: start;
            padding-bottom: 0;
            margin: 0 0 0 1.40625VW;
            width: 9.21vw;
        }
    }

</style>