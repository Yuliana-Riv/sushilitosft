<template>
    <section>
        <div class="domicilio__fondo">
            <a href="#">
                <img src="../../assets/BG_1.png" alt="Envio a domicilio">
            </a>

            <a href="#">
                <img src="../../assets/BG_2.png" alt="Ordena y recoge">
            </a>
            
            <a href="#">
                <img src="../../assets/BG_3.png" alt="Encuentranos en Rappi">
            </a>
        </div>

        <div class="domicilio__fondo__2">
            <div class="domicilio__text">
                <h2>Únete a nuestra comunidad</h2>

                <p>Síguenos en redes sociales y entérate de novedades, promociones y nuevos productos.</p>
            </div>

            <div class="domicilio__imagenes">
                <img src="../../assets/Comida_1.png" alt="">
                <img src="../../assets/Comida_2.png" alt="">
                <img src="../../assets/Comida_3.png" alt="">
                <img src="../../assets/Comida_4.png" alt="">
            </div>

            <div>
                <a target='_blank' class="domicilio__insta" href="https://www.instagram.com/sushilitosdeobregon/">
                        <img src="../../assets/Insta.png" alt="">
                        <p>@sushilitosdeobregon</p>
                </a>
            </div>
        </div>

    </section>
</template>

<script>
export default {
  name: "sucursales",
  data() {
    return {
      status: "error",
      message: "",
    };
  },
  components: {

  },
};
</script>
<style scoped>
    
    h2,
    p {
        margin: 0;
    }
    .domicilio__fondo {
        display: flex;
    }

    a {
        display: inherit;
    }

    .domicilio__fondo__2 {
        display: flex;
        flex-direction: column;
    }

    .domicilio__text {
        display: flex;
        flex-direction: column;
    }

    .domicilio__text h2 {
        font-family: "SolfeggioExtraBold";
        font-style: normal;
        font-weight: 800;
        line-height: 90.5%;
        text-align: center;
        text-transform: uppercase;
        color: #D0985D;
        margin: 0 auto;
    }

    .domicilio__text p {
        color: Beige;
        font: var(--roboto);
        font-weight: 400;
        text-align: center;
    }

    .domicilio__imagenes {
        display: grid;
    }

    .domicilio__insta {
        background-color: #A31F25;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .domicilio__insta p {
        font-family: var(--roboto);
        font-style: normal;
        font-weight: 400;
        line-height: 111.5%;
        color: #DCD3CA;
    }

    @media (max-width: 767px) {
        .domicilio__fondo {
            flex-direction: column;
        }

        .domicilio__fondo img {
            width: 100vw;
            height: 44.927536231884055VW;
        }

        .domicilio__fondo__2 {
            background-image: url(../../assets/BG_nuestra_comunidad_cel.png);
            background-size: 100vw 100vh;
        }
        .domicilio__text h2 {
            font-size: 9.66183574879227VW;
            width: 63vw;
            margin: 22.463768115942027VW auto 2.4154589371980677VW;
        }

        .domicilio__text p {
            margin: 0 26vw 15.942028985507244VW;
            line-height: 6.763285024154589VW;
            font-size: 5.314009661835748VW;
        }

        .domicilio__imagenes {
            margin: 0 6.521739130434782VW 15.942028985507244VW;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        .domicilio__imagenes img {
            width: 42.99516908212561VW;
            height: 42.99516908212561VW;
        }

        .domicilio__insta {
            width: 86.23188405797102VW;
            height: 17.632850241545896VW;
            margin: 0 6.884057971014493VW 17.14975845410628VW;
        }

        .domicilio__insta img {
            width: 6.763285024154589VW;
            height: 6.763285024154589VW;
            margin-right: 5.314009661835748VW;
        }

        .domicilio__insta p {
            font-size: 4.830917874396135VW;
            line-height: 5.314009661835748VW;
        }

    }

    @media (min-width: 768px) {
        .domicilio__fondo img {
            width: 33.33333333333333VW;
            height: 14.374999999999998VW;
        }

        .domicilio__fondo__2 {
            background-image: url(../../assets/BG_nuestra_comunidad_pc.png);
            background-size: 100vw 100vh;
        }

        .domicilio__text h2 {
            font-size: 2.083333333333333VW;
            width: 34vw;
            margin: 8.541666666666666VW 34.479166666666664VW 1.0416666666666665VW;
        }

        .domicilio__text p {
            margin-bottom: 3.125VW;
            line-height: 1.4583333333333333VW;
            font-size: 0.625VW;
        }

        .domicilio__imagenes {
            margin: 0 26.770833333333332VW 4.6875VW;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 1.9546875000000001VW;
        }

        .domicilio__imagenes img {
            width: 10.15625VW;
            height: 10.15625VW;
        }

        .domicilio__insta {
            width: 18.59375VW;
            height: 3.802083333333333VW;
            margin: 0 40.703125VW 8.541666666666666VW;
        }

        .domicilio__insta img {
            width: 1.4583333333333333VW;
            height: 1.4583333333333333VW;
            margin-right: 1.1458333333333333VW;
        }

        .domicilio__insta p {
            font-size: 1.0416666666666665VW;
            line-height: 1.1458333333333333VW;
        }
    }
</style>