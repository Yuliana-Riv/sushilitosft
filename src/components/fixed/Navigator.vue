<template>
  <div id="Navigator" :class="{'upcero':(( $route.name == 'Home')&&(scrollP == 0)), 'active': act == true}">
    <div class="nav-b">
      <div class="nav-c">
        <div class="sc1">
          <a href="/" class="logo">
            <img :src="( $route.name == 'Home')&&(scrollP == 0) ? require('../../assets/navigator/logo.svg'):require('../../assets/navigator/logona.svg')" alt="logo" />
          </a>
          <img
            src="../../assets/navigator/Bars.svg"
            alt="bars"
            class="bars pointer"
            @click="act = true"
          />
        </div>
        <div class="close-b"
          @click="act = false"
          :class="{ active: act == true }">
          <div class="menu-conts" :class="{ active: act == true }" @click.stop>
            <img
              src="../../assets/navigator/close.svg"
              alt="cross"
              class="bars pointer"
              @click="act = false"
            />
            <div class="m-items">
              <a href="/" :class="{ active: hop == 'buscador' }"
                >quienes somos</a
              >
              <a href="/" :class="{ active: hop == 'nosotros' }"
                >nuestro menú</a
              >
              <a href="/" :class="{ active: hop == 'agentes' }">sucursales</a>
              <a href="/facturacion" :class="{ active: hop == 'servicios' }"
                >facturación</a
              >

              <a href="/" :class="{ active: hop == 'contacto' }">contacto</a>
              <div class="sm-c">
                <a
                  v-for="(sm, i) in social_media"
                  :key="i"
                  :href="sm.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../assets/navigator/FB.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'FACEBOOK'"
                  />
                  <img
                    src="../../assets/navigator/IG.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'INSTAGRAM'"
                  />
                  <img
                    src="../../assets/navigator/TW.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'TWITTER'"
                  />
                  <img
                    src="../../assets/navigator/TT.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'TIKTOK'"
                  />
                  <img
                    src="../../assets/navigator/LN.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'LINKEDIN'"
                  />
                  <img
                    src="../../assets/navigator/YT.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'YOUTUBE'"
                  />
                  <img
                    src="../../assets/navigator/WA.svg"
                    alt=""
                    class="sm-l"
                    v-if="sm.social_media == 'WHATSAPP'"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      act: false,
      scrollP: localStorage.getItem("scroll"),
    };
  },
  created() {
    let nav = localStorage.getItem("ruta");
    this.setHistoryOptionMain(nav);
    this.getAllInfoSM("social_media");
  },
  computed: {
    hop() {
      return this.$store.getters["main/getHistoryOption"];
    },
    social_media() {
      return this.$store.getters["social_media/data"];
    },
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),
    ...mapActions("social_media", ["getAllInfoSM"]),

    scroll(event) {
      let number = event.target.documentElement.scrollTop;
      let offset = number * 1;
      localStorage.setItem("scroll", offset);
      this.scrollP = localStorage.getItem("scroll");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style>
#Navigator {
  width: 100vw;
  height: 46.367vw;
  z-index: 1000;
  overflow: hidden;
  position: fixed;
  transition: 0.5s;
}
#Navigator.active {
  height: 100vh;
}
.nav-b {
  width: 100vw;
  height: fit-content;
}
.nav-c .m-items a {
  font-family: "Roboto Serif";

  font-style: normal;
  color: #d0985d;
  font-weight: 600;
  text-decoration-color: transparent;
  transition: 0.5s;
}
.nav-c .m-items a:hover {
  color: #e40424;
}
@media (max-width: 768px) {
  .nav-c .close-b {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    background: transparent;
    transition: 0.5s;
  }
  .nav-c .close-b.active {
    pointer-events: all;
    background: #0000007a;
  }
  .menu-conts {
    width: 61.836vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: -100vw;
    transition: 0.5s;
    background: white;
    padding: 10.386vw 7.729vw 11.836vw;
  }
  .menu-conts.active {
    right: 0;
  }
  .nav-c .sc1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    padding: 8.454vw 7.971vw; 
  }
  .nav-c .m-items {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .nav-c .sc1 .bars {
    width: 14.01vw;
  }
  .nav-c a.logo img {
width: 21.981vw;
  }

  .nav-c .bars {
    margin-left: auto;
    display: flex;
    width: 10.628vw;
  }
  .nav-c .menu-conts .bars {
    margin-bottom: 13.043vw;
  }
  .nav-c .m-items a {
    margin-bottom: 7.488vw;
    font-size: 6.522vw;
    line-height: 9.662vw;
  }
  .nav-c .sm-c {
    width: 25.121vw;
    display: flex;
    justify-content: space-between;
    height: fit-content;
  }
  .nav-c .sm-c a {
    margin-bottom: 0;
  }
  .nav-c .sm-c a .sm-l {
    width: 10.386vw;
    height: 10.386vw;
  }
}

@media (min-width: 768px) {
  .nav-b {
    background-color: rgba(0, 0, 0, 0);
  }
  #Navigator {
    height: fit-content;
  }
  .nav-c {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    padding: 1.094vw 6.771vw;
    transition: .5s;
    background: #171A13;
  }
  .upcero .nav-c { 
    padding: 4.896vw 5.104vw;
    background: transparent;
  }

  .nav-c .bars {
    display: none;
  }
  
  .upcero .nav-c a.logo img {
    width: 6.094vw; 
  }.nav-c a.logo img{
    width: 4.323vw;
  }
  .nav-c .m-items {
    display: flex; 
    translate: .5s
    ;
  }
  .upcero .nav-c .m-items { 
    align-items: flex-end;
    height: fit-content;
    flex-direction: column;
  }
  .nav-c .m-items a {
    margin-right: 1.458vw;
    font-size: 0.677vw;
    line-height: 0.781vw;
    font-weight: 700;
    letter-spacing: 0.3em;
    margin-bottom: 0;
    transition: .5s;
  }
  .upcero  .nav-c .m-items a {
    margin-bottom: 1.042vw;
  }
  .nav-c .m-items a.active {
    color: #DCD3CA !important;
  }
  .nav-c .sm-c {
    display: flex;
    justify-content: space-between;
    /*width: 2.292vw;*/
    width: fit-content;
  }
  .nav-c .sm-c a .sm-l {
    width: 0.938vw;
    height: 0.938vw;
  }
  .nav-c .sm-c a {
    margin-right: 0;
  }
}
</style>
