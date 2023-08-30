<template>
        <div class="menu">
            <Navigator/>   

            <div class="div1">
            <div class="div1_1">
            <p class="tit1">NUESTRO</p>
            <P class="tit1_1">MENÚ</P>
            </div>

            <div class="div1_2_1">

            <div class="div1_2">
                <p class="tit2">selecciona tu sucursal:</p>
                <select  class="select" name="" id="" >
                    <option value="">SUCURSAL</option>
                </select>
            </div>

            <div class="div1_3">
                <p class="tit2">puedes buscar tu ingrediente favorito:</p>
                <div class="div1_4">
                    <textarea class="ta1" name="" id="" cols="30" rows="10"></textarea>
                    <button class="btnta"></button>
                </div>
            </div>
        </div>

        <div class="galeria">

            <button class="gal1">
                <img class="img111" src="../assets/image1.png" alt="">
                <p class="titgalerias_selec">entradas</p>
            </button>
            <button class="gal2">
                <img src="../assets/image2.png" alt="">
                <p class="titgaleria">rollos</p>
            </button>
            <button class="gal1">
                <img src="../assets/image3.png" alt="">
                <p class="titgaleria">rollos horneados</p>

            </button>
            <button class="gal2">
                <img src="../assets/image4.png" alt="">
                <p class="titgaleria">sopas</p>

            </button>
            <button class="gal1">
                <img src="../assets/image5.png" alt="">
                <p class="titgaleria">platillos</p>

            </button>
            <button class="gal2">
                <img src="../assets/imagekids.png" alt="">
                <p class="titgaleria">menú kids</p>

            </button>
            <button class="gal1">
                <img src="../assets/image6.png" alt="">
                <p class="titgaleria">postres</p>

            </button>
            <button class="gal2">
                <img src="../assets/image7.png" alt="">
                <p class="titgaleria">bebidas</p>
s
            </button>

        </div>

            <hr class="hr1">

            <div class="div1_5">
                <p class="tit2des">desliza para ver el menú</p>
            </div>
        </div>



        <div class="div2">
            <div class="div2_1">
                <button class="btn1">entradas</button>
            </div>

            <div class="div2_2">
                <button class="btn2">rollos</button>
            </div>

            <div class="div2_3">
                <button class="btn3"></button>
            </div>
        </div>



        <div class="ent">
                <p class="tit3_0">entradas</p>

        <div class="div3">

            <div class="subcategoria">
                <div class="div3_1">
                    <p class="tit3">Producto</p>
                    <hr class="hr2">
                    <p class="price">$$$</p>
                </div>
                <div class="div3_1_2">
                    <p class="desc">Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy.</p>
                </div>
            </div>

            <div class="opciones">
                <div class="div3_2">
                    <p class="tit3">Producto</p>
                </div>
                <div class="div3_2_1">
                    <p class="desc">Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy.</p>
                </div>
                <div class="div3_2_2">
                    <p class="tit3">Producto</p>
                    <hr class="hr2">
                    <p class="price">$$$</p>
                </div>

                <div class="div3_2_3">
                    <p class="tit3">Producto</p>
                    <hr class="hr2">
                    <p class="price">$$$</p>
                </div>

            </div>

            <div class="nodesc">
                <p class="tit3">Producto</p>
                <hr class="hr2">
                <p class="price">$$$</p>
            </div>
        </div>
    </div>
    <Footer/>


        </div>
</template>

<script>

import Navigator from '../components/fixed/Navigator.vue' 
import Footer from '../components/Footer.vue';

export default {
  name:'MENU',
  components: {
    Navigator, 
    Footer    

  }   
}
</script>

<style scoped>

.select{
    width: 82.1256038647343VW;
    height: 18.59903381642512VW;
    border-color: #A16D34;
    color: #A16D34;
    font-size: 9.66183574879227VW;
    font-family: "SolfeggioBold";
    background:none;
    padding-left: 3.6231884057971016VW;
}
.menu{
    background-color: #e8e7e0;

}

.div1_1{
    padding-top: 51.93236714975845VW;
}

.tit1{
    font-size: 13.285024154589372VW;
    font-family: "SolfeggioBold";
    font-weight: 700;
    color: #A16D34;
    margin: 0;
}

.tit1_1{
    font-size: 13.285024154589372VW;
    font-family: "SolfeggioBold";
    font-weight: 700;
    color: #2D3125;
    margin: 0;
}

.tit2{
    color: #A16D34;
    font-size: 6.038647342995169VW;
    font-family: "--roboto";
    font-style: italic;
}

.tit2des{
    color: #A16D34;
    font-size: 6.038647342995169VW;
    font-family: "--roboto";
    font-style: italic;
}

.div1_4{
    width:82.1256038647343VW;
    height: 18.59903381642512VW;
    display: flex;
    border: 1px solid #A16D34;
}

.ta1{
    width: 80%;
    height: 18.59903381642512VW;
    background: none;
    border: none;

}

.btnta{
    width: 20%;
    height: 18.59903381642512VW;
    border: none;
    background: none;
    background-image: url(../assets/buscar.png);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
}

.hr1{
    width: 81.40096618357488VW;
    border:1px solid #A16D34;
    margin-top: 10.38647342995169VW;
}

.div2{
    width: 100vw;
    height: 17.874396135265698VW;
    display: flex;
    background-color: #DCD3CA;
}

.div1{
    
    padding-left: 8.937198067632849VW;
    padding-right: 8.937198067632849VW;
}

.btn1{
    margin-top: 4.951690821256038VW;
    margin-left: 8.937198067632849VW;
    margin-right: 9.66183574879227VW;
    background: none;
    border: none;
    color: #00322C;
    font-family: "--roboto";
    text-decoration: underline;
    font-size: 4.3478260869565215VW;
    letter-spacing: 0.3em;
    font-weight: 700;
}

.btn2{
    margin-top: 4.951690821256038VW;
    margin-right: 15.942028985507244VW;
    background: none;
    border: none;
    color: #D0985D;
    font-size: 4.3478260869565215VW;
    letter-spacing: 0.3em;
    font-family: "--roboto";
    font-weight: 700;

}

.btn3{
    margin-top: 3.6231884057971016VW;
    height: 10.275362318840579VW;
    width: 5.5603864734299515VW;
    background: none;
    background-image: url(../assets/deslizar.png);
    background-repeat: no-repeat;
    border: none;
}

.tit3{
    width: 46.85990338164252VW;
    color: #A31F25;
    font-size: 5.314009661835748VW;
    font-family: "--roboto";
    font-weight: 600;
    margin: 0;
}

.hr2{
    width: 24.396135265700483VW;
    height: 1px;
}
.price{
    width: 20.053140096618357VW;
    color: #3D6C40;
    font-size: 6.280193236714976VW;
    font-family: "--roboto";
    font-style: italic;
    font-weight: 700;
    text-align: right;
    margin: 0;
}

.desc{
    color: #171A13;
    font-family: "--roboto";
    letter-spacing: 0.08em;
    font-weight: 300;
    font-size: 4.3478260869565215VW;
    margin: 0;
}

.div3{
    padding-left: 8.937198067632849VW;
    padding-right: 8.937198067632849VW;
}

.div3_1{
    display: flex;
    margin-top: 2.46875VW;
    margin-bottom: 2.46875VW;
}

.div3_2{
    margin-top: 2.46875VW;
    margin-bottom: 2.46875VW;
}

.div3_2_1{
    margin-bottom: 4.3478260869565215VW;
}

.div3_2_2{
    display: flex;
}

.div3_2_3{
    display: flex;
}

.nodesc{
    display: flex;
}

.subcategoria{
    padding-bottom: 7.246376811594203VW;
    padding-top: 5.314009661835748VW;

}

.opciones{
    padding-bottom:14.251207729468598VW;
}

.galeria{
    display: none;
}

.tit3_0{
    display: none;
}

@media (min-width: 1024px) {

    .div1_2_1{
        display: flex;
    }

    .div1_1{
        padding-top: 17.291666666666668VW;
        display: flex;
    }
    .tit1{
        font-size: 2.864583333333333VW;

    }
    .tit1_1{
        font-size: 2.864583333333333VW;

    }

    .div1_2{
        padding-right: 2.604166666666667VW;
    }

    .tit2{
        font-size: 0.7291666666666666VW;
        font-weight: 400;
    }

    .select{
        width: 17.708333333333336VW;
        height: 2.7604166666666665VW;
        font-size: 1.3020833333333335VW;
        padding-left: 0.8854166666666666VW;
    }

    .div1_4{
        width: 17.708333333333336VW;
    height: 2.7604166666666665VW;
    }
    .ta1{
        width: 17.708333333333336VW;
    height: 2.7604166666666665VW;
    }

    .btnta{
        height:initial;
    }

    .hr1{
        display: none;
    }

    .galeria{
        padding-top: 2.34375VW;
        display: flex;
    }

    .gal1{
        width: 8.389583333333334VW;
        height: 18.869270833333335VW;
        border: none;
        background:none;
        margin-right: 1.2458333333333333VW;
        padding-top: 2.1875VW;

    }

    .gal2{
        width: 8.389583333333334VW;
        height: 18.869270833333335VW;
        border: none;
        background: none;
        margin-right: 1.2458333333333333VW;

    }
    
    .titgalerias_selec{
        font-size:0.8333333333333334VW;
        letter-spacing: 0.3em;
        color:#00322C ;
        font-family: "--roboto";
        text-align: right;
        font-weight: 700;
        text-decoration-line: underline;
    }

    .titgaleria{
        font-size:0.8333333333333334VW;
        letter-spacing: 0.3em;
        color:#D0985D ;
        font-family: "--roboto";
        text-align: right;
        font-weight: 700;
    }

    .div1{
        padding-left: 11.927083333333334VW;
    }

    .div2{
        display: none;
    }

    .div3{
        display: flex;
        padding: 0;
    }

    .div3_2_1{
        margin-bottom: 0.46875VW;
    }

    .div3_1{
        margin: 0;
        margin-bottom: 0.7552083333333334VW;
    }

    .div3_2{
        margin: 0;
        margin-bottom: 0.7552083333333334VW;
    }

    .subcategoria{
        width: 21.25VW;
        height: 9.375VW;
        padding-top: 0vw;
        padding-right: 6.041666666666667VW;

    }
    .opciones{
        width: 21.25VW;
        height: 10.3125VW;
        padding-right: 6.041666666666667VW;

    }
    .nodesc{
        width: 21.25VW;
    }

    .tit3{
        width: 10.104166666666666VW;
        font-size: 0.8333333333333334VW;
    }

    .hr2{
        width: 5.260416666666667VW;
        margin: 0;
        margin-top: 0.35vw;


    }
    .price{
        width: 4.323958333333334VW;
        font-size: 0.9375VW;
    }

    .desc{
        font-size: 0.7291666666666666VW;
    }

    .ent{
        padding-top: 3.2046875000000004VW;
        padding-bottom: 2.2395833333333335VW;
        padding-left: 12.708333333333332VW;
    }

    .tit3_0{
        display: block;
        font-size: 1.0416666666666665VW;
        color: #00322C;
        letter-spacing: 0.3em;
        text-decoration-line: underline;
        font-family: "--roboto";
        font-weight: 700;
        padding-bottom: 2.7864583333333335VW;
        padding-top: 3.2046875000000004VW;


    }

    .tit2des{
        display: none;
    }

    
}
</style>
