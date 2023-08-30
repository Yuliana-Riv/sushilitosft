<template >
  <div>
    <Navigator />
    <section>
        <div class="content_err">
          <div class="divimg">
            <img class="img_err" src="../assets/error/error_404.png" alt="">
          </div>
          <div class="errinfo">
            <h2>Algo <span>salió mal</span> </h2>
            <p>No hemos logrado encontrar el contenido que buscas. <br>
            <span>Utiliza el siguiente enlace para encontrar <a href="/">el camino de regreso.</a></span></p>
          </div>
        </div>
    </section>
    <Footer />
  </div>
</template>
<script>

import Navigator from '../components/fixed/Navigator.vue'
import Footer from '../components/Footer.vue';
export default {
  name: "Error404",
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
section {
  background-color: #DCD3CA;
}

h2,
p {
  margin: 0;
}

.content_err {
  display: flex;
}

.divimg img {
  width: 100%;
  height: 100%;
}

.errinfo h2 {
  font-family: 'SolfeggioBold';
  font-style: normal;
  font-weight: 700;
  color: #2D3125;
  text-transform: uppercase;
}

.errinfo h2 span {
  color: #D0985D;
}

.errinfo a {
    text-decoration: underline;
    color: #3D6C40;
  }

.errinfo p {
  font-family: var(--roboto);
  color: #2D3125;
}

@media (max-width: 767px) {
  .content_err {
    flex-direction: column;
    padding-top: 32.125603864734295VW;
    padding-bottom: 51.144928VW;
  }

  .divimg {
    width: 100vw;
    height: 88.40579710144928VW;
  }

  .divimg img {
    object-fit: contain;
  }

  .errinfo {
    position: absolute;
    top: 93.657005VW;
    left: 13.768115942028986VW;
  }

  .errinfo h2 {
    font-size: 8.454106280193237VW;
    line-height: 90.5%;
  }

  .errinfo h2 span::before {
    content: "\A";
    white-space: pre;
  }

  .errinfo p {
    margin-top: 12.077294685990339VW;
    font-size: 4.830917874396135VW;
    line-height: 115.5%;
  }

  .errinfo p span::before {
    content: "\A";
    white-space: pre;
  }

  .errinfo a {
    text-underline-offset: 1.2077294685990339VW;
  }

}

@media (min-width: 768px) {
  .content_err {
    padding-top: 7.864583333333333VW;
    padding-bottom: 2.34375VW;
  }

  .divimg {
    width: 57.86458333333333VW;
    height: 46.041666666666664VW;
  }

  .errinfo {
    text-align: center;
    position: absolute;
    top: 26.916667VW;
    left: 55.677083333333336VW;
  }

  .errinfo h2 {
    font-size: 3.802083333333333VW;
    line-height: 90.5%;
  }

  .errinfo p {
    margin-top: 4.583333333333333VW;
    font-size: 1.0416666666666665VW;
    line-height: 2.203125VW;
  }

  .errinfo a {
    text-underline-offset: 0.15625VW;
  }
}
</style>