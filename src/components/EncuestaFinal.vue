<template>
    <div>
        <Navigator/>

    <div class="encuesta_final">

        <div class="titulo">
        <p class="tit1">ENCUESTA DE</p>
        <P class="tit2">SATISFACCIÓN</P>
        </div>

        <div class="parrafos">

            <p class="txt1">¡Gracias por tomarte el tiempo de responder nuestra encuesta!</p>

            <p class="txt2">El ganador del sorteo será notificado vía telefónica y anunciado 
               vía nuestras redes sociales.</p>

        </div>

        

    </div>
    <Footer/>

</div>
</template>

<script>
import Navigator from '../components/fixed/Navigator.vue' 
import Footer from '../components/Footer.vue';

export default {
    setup() {
        
    },

    components:{
        Navigator,
        Footer
    }
}
</script>

<style scoped>

.encuesta_final{
    background-color: #e8e7e0;
    padding-left: 8.937198067632849VW;
    padding-right: 8.937198067632849VW;
    padding-bottom: 31.88405797101449VW;
}
.titulo{
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

.txt1{
    color: #A16D34;
    font-size: 6.038647342995169VW;
    font-family:"--roboto" ;
    padding-left: 8.937198067632849VW;
    padding-right: 8.937198067632849VW;
    font-style: italic;
    font-weight: 700;
    text-align: center;

}

.txt2{
    color: #A16D34;
    font-size: 6.038647342995169VW;
    font-family:"--roboto" ;
    font-style: italic;
    font-weight: 500;
    text-align: center;

}

@media (min-width: 1024px) {

    .encuesta_final{
        padding-top: 16.770833333333332VW;
        padding-left: 11.927083333333334VW;
    }


    .titulo{
        padding-top: 0vw;
        padding-bottom: 2.34375VW;
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

    .txt1{
        font-size: 1.3020833333333335VW;
        text-align: left;
        padding-left: 0vw;

    }

    .txt2{
        font-size: 1.3020833333333335VW;
        text-align: left;


    }
    
}
</style>