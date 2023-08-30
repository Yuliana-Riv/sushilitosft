<template>
  <div id="SideMenu" class="dflx">
    <div class="box-1">
      <div class="logo">
        <img v-if="statusimg" :src="srcImg(logo.logo)" alt="" />
        <img v-else src="../assets/default/logo.png" alt="logo aplicación" />
      </div>
      <div class="msg-user">
        <p>
          ¡HOLA, <span>{{ identity.name | splitUp }}! </span>
        </p>
      </div>
      <div class="menu">
        <ul>
          <li
            :class="{ active: navOption == 'Dashboard' }"
            @click="activeMenu(0), setOption('Mi Página')"
          >
            <div class="text-menu">MI <span> PÁGINA</span></div>
            <div v-if="navOption == 'Mi Página'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          <li
            :class="{ active: navOption == 'Usuarios' }"
            @click="
              activeMenu(0),
                setOption('Usuarios'),
                setHistoryOptionUsr('Default')
            "
          >
            <div class="text-menu"><span>USUARIOS</span></div>
            <div v-if="navOption == 'Usuarios'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          <li
            :class="{ active: navOption == 'encuesta' }"
            @click="
              activeMenu(0),
                setOption('encuesta'),
                setHistoryOptionenc('Default')
            "
          >
            <div class="text-menu"><span>ENCUESTA</span></div>
            <div v-if="navOption == 'encuesta'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>


          <li
            :class="{ active: navOption == 'Personalizacion' }"
            @click="
              activeMenu(0),
                setOption('Personalizacion'),
                setHistoryOptionPrf('Default')
            "
          >
            <div class="text-menu"><span>PERSONALIZACIÓN</span></div>
            <div v-if="navOption == 'Personalizacion'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>
 

          <li
            :class="{ active: navOption == 'Banner' }"
            @click="
              activeMenu(0), setOption('Banner'), setHistoryOptionBnr('Default')
            "
          >
            <div class="text-menu"><span>BANNER</span></div>
            <div v-if="navOption == 'Banner'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          <li
            :class="{ active: navOption == 'suscripciones' }"
            @click="
              activeMenu(0),
                setOption('suscripciones'),
                setHistoryOptionSbs('Default')
            "
          >
            <div class="text-menu"><span>SUSCRIPCIONES</span></div>
            <div v-if="navOption == 'suscripciones'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          <li
            :class="{ active: navOption == 'MenuIG' }"
            @click="activeMenu(3), setOption('MenuIG')"
          >
            <div class="text-menu">INFORMACIÓN <span>GENERAL</span></div>
            <div
              v-if="navOption == 'MenuIG' || hidemenu3"
              class="icon-active-menu"
            >
              <div class="ico-2"></div>
            </div>
          </li> 
          <li
            class="submenu"
            :class="{ active: navOption == 'direccion' }"
            v-if="hidemenu3"
            @click="setOption('direccion'), setHistoryOptionAdr('Default')"
          >
            &#10625; DIRECCIONES
          </li>
          <li
            class="submenu"
            :class="{ active: navOption == 'telefono' }"
            v-if="hidemenu3"
            @click="setOption('telefono'), setHistoryOptionPho('Default')"
          >
            &#10625; TELÉFONO
          </li>
          <li
            class="submenu"
            :class="{ active: navOption == 'horario' }"
            v-if="hidemenu3"
            @click="setOption('horario'), setHistoryOptionHor('Default')"
          >
            &#10625; HORARIO
          </li>
          <li
            class="submenu"
            :class="{ active: navOption == 'redes-sociales' }"
            v-if="hidemenu3"
            @click="setOption('redes-sociales'), setHistoryOptionSM('Default')"
          >
            &#10625; REDES SOCIALES
          </li>

          <li
            :class="{ active: navOption == 'Sucursales' }"
            @click="
              activeMenu(0),
                setOption('Sucursales'),
                setHistoryOptionSuc('Default')
            "
          >
            <div class="text-menu"><span>SUCURSALES</span></div>
            <div v-if="navOption == 'Sucursales'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="box-2">
      <div class="triangulo"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import { url } from "../global/index";
export default {
  name: "SideMenu",
  data() {
    return {
      navOption: "Default",
      hidemenu: false,
      hidemenu2: false,
      hidemenu3: false,

      url: url,
      statusimg: false,
    };
  },
  async created() {
    await this.getIdentity();

    await this.getAllInfoLgo("personalize");

    const result = await this.status_img(this.logo.logo);

    let nav = localStorage.getItem("nav");

    if (nav) {
      this.setHistoryOptionMain(nav);
      this.navOption = nav;

      if (
        nav == "terrenos" ||
        nav == "casas" ||
        nav == "oficinas" ||
        nav == "locales" ||
        nav == "nave" ||
        nav == "industrial" ||
        nav == "otros" ||
        nav == "bodega"
      ) {
        this.hidemenu2 = true;
      }
      if (
        nav == "direccion" ||
        nav == "telefono" ||
        nav == "horario" ||
        nav == "redes-sociales"
      ) {
        this.hidemenu2 = true;
      }
    }
  },
  computed: {
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
    logo() {
      const arr = this.$store.getters["logo/data"];

      if (Array.isArray(arr)) {
        if (arr[0]?.logo) {
          return arr[0];
        } else {
          return { logo: "" };
        }
      } else {
        return { logo: "" };
      }
    },
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),

    ...mapActions("logo", ["getAllInfoLgo"]),

    ...mapActions("usuarios", ["setHistoryOptionUsr"]),
    ...mapActions("usuarios", ["getAllInfoUsr"]),

    ...mapActions("profile", ["setHistoryOptionPrf"]),
    ...mapActions("profile", ["getAllInfoPrf"]),

    ...mapActions("colaborador", ["setHistoryOptionClb"]),
    ...mapActions("colaborador", ["getAllInfoClb"]),

    ...mapActions("terrenos", ["setHistoryOptionTrr"]),
    ...mapActions("terrenos", ["getAllInfoTrr"]),

    ...mapActions("casas", ["setHistoryOptionCss"]),
    ...mapActions("casas", ["getAllInfoCss"]),

    ...mapActions("oficinas", ["setHistoryOptionOfn"]),
    ...mapActions("oficinas", ["getAllInfoOfn"]),

    ...mapActions("locales", ["setHistoryOptionLcl"]),
    ...mapActions("locales", ["getAllInfoLcl"]),

    ...mapActions("nave", ["setHistoryOptionNv"]),
    ...mapActions("nave", ["getAllInfoNv"]),

    ...mapActions("industrial", ["setHistoryOptionInd"]),
    ...mapActions("industrial", ["getAllInfoInd"]),

    ...mapActions("otros", ["setHistoryOptionOtr"]),
    ...mapActions("otros", ["getAllInfoOtr"]),

    ...mapActions("bodega", ["setHistoryOptionBod"]),
    ...mapActions("bodega", ["getAllInfoBod"]),

    ...mapActions("suscripciones", ["setHistoryOptionSbs"]),
    ...mapActions("suscripciones", ["getAllInfoSbs"]),

    ...mapActions("banner", ["setHistoryOptionBnr"]),
    ...mapActions("banner", ["getAllInfoBnr"]),

    ...mapActions("address", ["setHistoryOptionAdr"]),
    ...mapActions("address", ["getAllInfoAdr"]),

    ...mapActions("phone", ["setHistoryOptionPho"]),
    ...mapActions("phone", ["getAllInfoPho"]),

    ...mapActions("horario", ["setHistoryOptionHor"]),
    ...mapActions("horario", ["getAllInfoHor"]),

    ...mapActions("social_media", ["setHistoryOptionSM"]),
    ...mapActions("social_media", ["getAllInfoSM"]),

    ...mapActions("encuesta", ["setHistoryOptionenc"]),
    ...mapActions("encuesta", ["getAllInfoenc"]),

    ...mapActions("sucursales", ["setHistoryOptionSuc"]),
    ...mapActions("sucursales", ["getAllInfoSuc"]),

    activeMenu(value) {
      if (value == 1) {
        this.hidemenu ? (this.hidemenu = false) : (this.hidemenu = true);
      } else if (value == 2) {
        this.hidemenu2 ? (this.hidemenu2 = false) : (this.hidemenu2 = true);
      } else if (value == 3) {
        this.hidemenu3 ? (this.hidemenu3 = false) : (this.hidemenu3 = true);
      } else {
        this.hidemenu = false;
        this.hidemenu2 = false;
        this.hidemenu3 = false;
      }
    },
    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },

    setOption: function (option) {
      if (option == "MenuP") {
        this.navOption = option;
      } else if (option == "MenuIG") {
        this.navOption = option;
      } else if (option == "Mi Página") {
        // window.open("", "_blank");
      } else {
        this.navOption = option;
        localStorage.setItem("nav", option);
        this.setHistoryOptionMain(option);

        if (option == "Usuarios") {
          this.getAllInfoUsr("usuarios");
        } else if (option == "Personalizacion") {
          this.getAllInfoPrf("profile");
        } else if (option == "colaborador") {
          this.getAllInfoClb("colaborador");
        } else if (option == "terrenos") {
          this.getAllInfoTrr("terrenos");
        } else if (option == "casas") {
          this.getAllInfoCss("casas");
        } else if (option == "oficinas") {
          this.getAllInfoOfn("oficinas");
        } else if (option == "locales") {
          this.getAllInfoLcl("locales");
        } else if (option == "nave") {
          this.getAllInfoNv("nave");
        } else if (option == "industrial") {
          this.getAllInfoInd("industrial");
        } else if (option == "otros") {
          this.getAllInfoOtr("otros");
        } else if (option == "bodega") {
          this.getAllInfoBod("bodega");
        } else if (option == "suscripciones") {
          this.getAllInfoSbs("suscripciones");
        } else if (option == "Banner") {
          this.getAllInfoBnr("banner");
        } else if (option == "encuesta") {
          this.getAllInfoenc("encuesta");
        } else if (option == "Sucursales") {
          this.getAllInfoenc("sucursales");
        }
      }
    },

    status_img: async function (img) {
      if (!img || img == "") {
        this.statusimg = false;
        return "";
      }
      let payload = {
        option: "personalize",
        image: img,
      };
      let response = "";

      try {
        response = await this.$store.dispatch("main/getStatusImage", payload);

        if (!response?.data?.status) {
          this.statusimg = true;
        } else {
          response = "";
        }
      } catch (err) {
        console.log(err);
      }

      return response;
    },

    srcImg: function (img) {
      if (!img || img == "") {
        this.statusimg = false;
        return "";
      }
      let src = `${url}personalize-img/${img}`;

      return src;
    },
  },
  filters: {
    splitUp: (value) => {
      if (!value) return "";
      value = value.toString();

      let splitStr = value.toUpperCase().split(" ");

      return splitStr[0].charAt(0) + splitStr[0].substring(1);
    },
  },
};
</script>
<style scoped>
#SideMenu {
  min-height: 59.25vw;
}

.box-1 {
  width: 16.614583333333332vw;
  background: var(--color-2);
}
.logo {
  margin-top: 4.166666666666666vw;
  margin-left: 2.03125vw;
}
.logo img {
  width: 12.604166666666666vw;
  height: auto;
}
.msg-user {
  margin-left: 2.03125vw;
  margin-top: 0.78125vw;
  width: 12.552083333333334vw;
  height: 2.03125vw;
  background: var(--color-5);
  border-radius: 1vw;
}
.msg-user p {
  color: var(--color-1);
  text-align: center;
  height: 2.03125vw;
  padding-top: 0.5vw;
  font-weight: 500;
  margin: 0px;
  font-size: 0.625vw;
}
.msg-user p span {
  font-weight: 800;
}

.box-2 {
  width: 4.21875vw;
}
.triangulo {
  width: 0;
  height: 0;
  border-right: 4.21875vw solid transparent;
  border-top: 4.21875vw solid var(--color-2);
}

.menu {
  margin-top: 5.677083333333333vw;
}

li.submenu {
  border: none !important;
}
.menu ul {
  margin-left: 2.03125vw;
  padding: 0vw;
}
.menu ul li {
  height: 2vw;
  width: 11.352083vw;
  border: 1px solid var(--color-5);
  color: var(--color-5);
  border-radius: 1.2vw;
  padding-left: 1vw;
  padding-top: 0vw;
  padding-bottom: 0vw;
  margin-bottom: 0.6020833333333334vw;
  cursor: pointer;
  display: flex;
  font-size: 0.7291666666666666vw;
  align-items: center;
}
.menu ul li span {
  font-weight: 700;
}

.text-menu {
  width: 9.5vw;
  padding-top: 0vw;
}

.active {
  background: var(--color-1);
}

li.active {
  border: 0px !important;
}
.icon-active,
.icon-active-menu {
  width: 1.3031249999999999vw;
  height: 1.3031249999999999vw;
  background: var(--color-5);
  border-radius: 1vw;
}
.ico {
  width: 0.6515624999999999vw;
  height: 0.6515624999999999vw;
  background: var(--color-2);
  border-radius: 1vw;
  margin-top: 0.33vw;
  margin-left: 0.34vw;
}
.ico-2 {
  margin-top: 0.55vw;
  margin-left: 0.34vw;
  width: 0;
  height: 0;
  border-right: 0.364583vw solid transparent;
  border-top: 0.364583vw solid var(--color-2);
  border-left: 0.364583vw solid transparent;
  border-bottom: 0.364583vw solid transparent;
}
</style>
