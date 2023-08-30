<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      colores: "",
    };
  },

  async created() {
    await this.getAllInfoClr("profile");

    this.colores = this.profiles;
    this.actualizarColores();
  },
  watch: {
    profiles() {
      this.actualizarColores();
    },
  },
  computed: {
    profiles() {
      return this.$store.getters["profile/data"];
    },
  },
  methods: {
    ...mapActions("colors", ["getAllInfoClr"]),
    ...mapActions("profile", ["getAllInfoPrf"]),
    scroll(event) {
      let number = event.target.documentElement.scrollTop;
      let offset = number * 1;
      localStorage.setItem("scroll", offset);
      this.scrollP = localStorage.getItem("scroll");
    },
    actualizarColores() {
      const arr = this.$store.getters["colors/data"];

      if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
          if (i == 0) {
            document.documentElement.style.setProperty(
              "--color-1",
              arr[i].code
            );
          } else if (i == 1) {
            document.documentElement.style.setProperty(
              "--color-2",
              arr[i].code
            );
          } else if (i == 2) {
            document.documentElement.style.setProperty(
              "--color-3",
              arr[i].code
            );
          } else if (i == 3) {
            document.documentElement.style.setProperty(
              "--color-4",
              arr[i].code
            );
          } else if (i == 4) {
            document.documentElement.style.setProperty(
              "--color-5",
              arr[i].code
            );
          } else if (i == 5) {
            document.documentElement.style.setProperty(
              "--color-6",
              arr[i].code
            );
          } else if (i == 6) {
            document.documentElement.style.setProperty(
              "--color-7",
              arr[i].code
            );
          }
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};

</script>

<style>
@import "./css/default.css";

@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&family=Sora:wght@100;200;300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
@font-face {
  font-family: "SolfeggioBlack" /*900*/;
  src: url("./assets/fonts/solfeggioBlack.OTF");
  font-display: swap;
}
  
  @font-face {
    font-family: "SolfeggioBold"; /*700 */
    src: url("./assets/fonts/solfeggioBold.OTF");
    font-display: swap;
  }
  
  @font-face {
    font-family: "SolfeggioExtraBold"; /*800 */
    src: url("./assets/fonts/solfeggioExtraBold.OTF");
    font-display: swap;
  }
  
  @font-face {
    font-family: "SolfeggioLight"; /*300 */
    src: url("./assets/fonts/solfeggioLight.OTF");
    font-display: swap;
  }
  
  @font-face {
    font-family: "SolfeggioMedium"; /*500 */
    src: url("./assets/fonts/solfeggioMedium.OTF");
    font-display: swap;
  }
  
  @font-face {
    font-family: "SolfeggioRegular"; /*400*/
    src: url("./assets/fonts/solfeggioRegular.OTF");
    font-display: swap;
  }


  html{
    scroll-behavior: smooth;
  }

  :root{
    /** No eliminar los 7 colores */
    --color-1: #E21F1D;
    --color-2:  #242424;
    --color-3: #A7A7A7;
    --color-4: #F5F5F5;
    --color-5:  #FFFFFF;
    --color-6:  #D9D9D9;
    --color-7:  #FFFFFF;
    
    --Sans: 'Source Sans Pro', sans-serif;
    --Open_Sans: 'Open Sans', sans-serif;
    --Sora: 'Sora', sans-serif;
    --Mukta: 'Mukta', sans-serif;
    --dmsans:'DM Sans', sans-serif;
    --montserrat:'Montserrat', sans-serif;
    --inter: 'Inter', sans-serif;
    --roboto: 'Roboto', sans-serif;
  }

html {
  scroll-behavior: smooth;
}

:root {
  /** No eliminar los 7 colores */
  --color-1: #e21f1d;
  --color-2: #242424;
  --color-3: #a7a7a7;
  --color-4: #f5f5f5;
  --color-5: #ffffff;
  --color-6: #d9d9d9;
  --color-7: #ffffff;

  --Sans: "Source Sans Pro", sans-serif;
  --Open_Sans: "Open Sans", sans-serif;
  --Sora: "Sora", sans-serif;
  --Mukta: "Mukta", sans-serif;
  --dmsans: "DM Sans", sans-serif;
  --montserrat: "Montserrat", sans-serif;
  --inter: "Inter", sans-serif;
  --Roboto: 'Roboto Serif', serif;

  --fs-idseccionpc: 0.625vw;

  /* Tipografias */
  --font-titulo1: "Outfit";
  --font-titulo2: "Outfit";
  --font-parrafo: "Outfit";
  --font-parrafo2: "Outfit";
}

a {
  text-decoration: none;
  color: inherit;
}
.algc {
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0vw;
  overflow: hidden;
}

body {
  margin: 0vw;
}

html {
  scroll-behavior: smooth;
}

input:focus-visible {
  outline: none !important;
}

input,
textarea,
select {
  padding-left: 0.5vw;
  outline: none;
}

.dflx {
  display: flex;
}

.pointer {
  cursor: pointer;
}

.jcsb {
  justify-content: space-between;
}

.box_ctr {
  display: flex;
  justify-content: center;
}
.box_rh {
  display: flex;
  justify-content: right;
}

.box_ctr_alg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.crs_ptr {
  cursor: pointer;
}

</style>
