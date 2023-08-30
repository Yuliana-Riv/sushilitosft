<template>
    <div class="menu">
        <div class="p0">
        <div class="p1">
            <p class="tit1">NUESTRO</p>
            <p class="tit2">MENÚ</p>
        </div>
        <div class="p2">
            <button class="btn1">ver más</button>
        </div>
    </div>
        <div class="p3">
            <div class="p4">
                <img class="img0" src="../../assets/entradasmb.png" alt="">
                <p class="tit3">entradas</p>
            </div>

            <div class="pc1">
                <img src="../../assets/entradaspc.png" alt="">
                <p class="ti1">entradas</p>
            </div>

            <div class="p5">
                <p class="tit4">sopas</p>
                <img class="img2" src="../../assets/sopasmb.png" alt="">
            </div>

            <div class="pc2">
                <img src="../../assets/sopaspc.png" alt="">
                <p class="ti2">sopas</p>
            </div>


            <div class="p6">
                <img src="../../assets/rollosmb.png" alt="">
                <p class="tit5">rollos</p>
            </div>

            <div class="pc3">
                <img src="../../assets/rollospc.png" alt="">
                <p class="ti3">rollos</p>
            </div>


            <div class="p7">
                <p class="tit6">rollos horneados</p>
                <img src="../../assets/rolloshorneadosmb.png" alt="">
            </div>

            <div class="pc4">
                <img src="../../assets/rolloshorneadospc.png" alt="">
                <p class="ti4">rollos horneados</p>
            </div>


        </div>
    </div>
</template>

<style scoped>

.menu{
    width:100vw ;
    height: 383.816425120773VW;
    background-color: #e8e7e0;
    padding-top: 22.22222222222222VW;
    padding-left: 9.178743961352657VW;
}
.p1{
}
.tit1{
    color: #A16D34;
    font-family: "SolfeggioBold";
    font-size: 13.285024154589372VW;
    margin: 0;
    line-height: 12.021739130434783VW;
}
.tit2{
    color: #2D3125;
    font-family: "SolfeggioBold";
    font-size: 13.285024154589372VW;
    margin: 0;
    line-height: 12.021739130434783VW;
}

.p2{
    padding-top: 4.280193236714976VW;
}
.btn1{
    width: 30.434782608695656VW;
    height: 13.352657004830919VW;
    border:none;
    background-color: #e8e7e0;
    background-image: url(../../assets/vermasmb.png);
    background-repeat: no-repeat;
    color: #A16D34;
    font-size: 5.314009661835748VW;
    line-height: 6.763285024154589VW;
    letter-spacing: 0.2em;
    background-position-x: left;
    background-position-y: 11vw;
    padding: 0;
    text-align: left;
    padding-top: 0vw;
}
.p3{
padding-top: 11.83574879227053VW;
}
.p4{
    width: 64.4927536231884VW;
    height: 66.90821256038647VW;
    display: flex;
}
.tit3{
    text-decoration-line: underline;
    font-size: 5.314009661835748vw;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0;
    font-family: "Roboto";
    letter-spacing: 0.3em;
    color: #00322C;
    font-weight: 700;
    line-height: 6.280193236714976VW;
    padding-right: 1.6908212560386473VW;
}

.p5{
    width: 66.66666666666666VW;
    height: 66.90821256038647VW;
    display: flex;
    padding-left: 15.458937198067632VW;
    padding-top: 6.521739130434782VW;

}
.tit4{
    text-decoration-line: underline;
    font-size: 5.314009661835748vw;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0;
    font-family: "Roboto";
    letter-spacing: 0.3em;
    color: #00322C;
    font-weight: 700;
    line-height: 6.280193236714976VW;
    padding-left: 3.864734299516908VW;
}

.p6{
    height: 66.90821256038647VW;
    display: flex;
    padding-top: 6.280193236714976VW;
}
.tit5{
    text-decoration-line: underline;
    font-size: 5.314009661835748vw;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0;
    font-family: "Roboto";
    letter-spacing: 0.3em;
    color: #00322C;
    font-weight: 700;
    line-height: 6.280193236714976VW;
    padding-right: 3.6231884057971016VW;
}
.p7{
    height: 66.90821256038647VW;
    display: flex;  
    padding-left: 16.115942028985508VW;
    padding-top: 6.038647342995169VW;
}
.tit6{
    text-decoration-line: underline;
    font-size: 5.314009661835748vw;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0;
    font-family: "Roboto";
    letter-spacing: 0.3em;
    color: #00322C;
    font-weight: 700;
    line-height: 6.280193236714976VW;
    padding-left: 3.864734299516908VW;
}

.pc1{
    display: none;
}
.pc2{
    display: none;
}
.pc3{
    display: none;
}
.pc4{
    display: none;
}

@media (min-width: 1024px) {

    .menu{
        padding-top: 6.197916666666667VW;
        padding-left: 11.979166666666668VW;
        height: 47.708333333333336VW;
    }
    .p0{
        display: flex;
    }

    .p1{
        display: flex;
    }

    .tit1{
        font-size: 2.864583333333333VW;
    }

    .tit2{
        font-size: 2.864583333333333VW;
    }

    .btn1{
    width: 8.177083333333334VW;
    height: 7vw;
    border:none;
    background-color: #e8e7e0;
    background-image: url(../../assets/vermasmb.png);
    background-repeat: no-repeat;
    color: #A16D34;
    line-height: 6.763285024154589VW;
    letter-spacing: 0.2em;
    background-position-x: right;
    background-position-y: center;
    padding: 0;
    text-align: left;
    padding-top: 0vw;
    font-size: 0.7291666666666666VW;
    }


    .p4{
        display: none;
    }

    .p5{
        display: none;
    }
    .p6{
        display: none;
    }
    .p7{
        display: none;
    }

    .p3{
        display: flex;
        padding-top: 0vw;
    }
    .p2{
        padding-top: 2.680193236714976VW;
        padding-left: 2.604166666666667VW;

    }

    .pc1{
        width: 18.229vw;
        display: block;
        padding-top: 3.4375000000000004VW;
        padding-right: 1.0416666666666665VW;
    }
    .pc1 img {
    width: 100%;
}
    .pc2{
        width: 18.229vw;
        display: block;
        padding-right: 1.1458333333333333VW;
    }
    .pc2 img {
    width: 100%;
}
    .pc3{
        width: 18.229vw;
        display: block;
        padding-top: 3.4375000000000004VW;
        padding-right: 1.0416666666666665VW;
    }
    .pc3 img {
    width: 100%;
}
    .pc4{
        width: 18.229vw;
        display: block;
    }
    .pc4 img {
    width: 100%;
}

    .ti1{
        font-size: 0.9375VW;
        text-align: right;
        color: #00322C;
        text-decoration: underline;
        font-family: "Roboto";
        letter-spacing: 0.3em;
        font-weight: 700;
        line-height: 1.09375VW;


    }
    .ti2{
        font-size: 0.9375VW;
        text-align: right;
        color: #D0985D;
        letter-spacing: 0.3em;
        font-weight: 400;


    }
    .ti3{
        font-size: 0.9375VW;
        text-align: right;
        color: #D0985D;
        letter-spacing: 0.3em;
        font-weight: 400;
    }
    .ti4{
        font-size: 0.9375VW;
        text-align: right;
        color: #D0985D;
        letter-spacing: 0.3em;
        font-weight: 400;
    }
    
}

</style>