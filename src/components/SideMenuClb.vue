<template>
  <div id="SideMenu" class="dflx">
    <div class="box-1">
      <div  class="logo">
       
      <img v-if="statusimg" :src="srcImg(logo.logo)" alt="">  <img v-else src="../assets/default/logo.png" alt="logo aplicación" /> 
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
            <div class="text-menu">IR A <span> SOMA</span></div>
            <div v-if="navOption == 'Mi Página'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          
     

          <li
            :class="{ active: navOption == 'colaborador' }"
            @click="
              activeMenu(0),
                setOption('colaborador'),
                setHistoryOptionClb('Default')
            "
          >
            <div class="text-menu">MI<span> PERFIL</span></div>
            <div v-if="navOption == 'colaborador'" class="icon-active">
              <div class="ico"></div>
            </div>
          </li>

          <li
            :class="{ active: navOption == 'MenuP' }"
            @click="activeMenu(2), setOption('MenuP')"
          >
            <div class="text-menu">MENÚ <span> PROPIEDADES</span></div>
            <div
              v-if="navOption == 'MenuP' || hidemenu2"
              class="icon-active-menu"
            >
              <div class="ico-2"></div>
            </div>
          </li>

          <li
            class="submenu"
            :class="{ active: navOption == 'terrenos' }"
            v-if="hidemenu2"
            @click="setOption('terrenos'), setHistoryOptionTrr('Default')"
          >
            &#10625; TERRENOS
          </li>

          <li
            class="submenu"
            :class="{ active: navOption == 'casas' }"
            v-if="hidemenu2"
            @click="setOption('casas'), setHistoryOptionCss('Default')"
          >
            &#10625; CASAS
          </li>

          <li
            class="submenu"
            :class="{ active: navOption == 'oficinas' }"
            v-if="hidemenu2"
            @click="setOption('oficinas'), setHistoryOptionOfn('Default')"
          >
            &#10625; OFICINAS
          </li>

          <li
            class="submenu"
            :class="{ active: navOption == 'locales' }"
            v-if="hidemenu2"
            @click="setOption('locales'), setHistoryOptionLcl('Default')"
          >
            &#10625; LOCALES
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

import {url} from '../global/index'; 
export default {
  name: "SideMenu",
  data() {
    return {
      navOption: "Default",
      hidemenu: false,
      hidemenu2: false,
    
      url:url,
      statusimg:false,
     
    };
  },
  async created() {
    await this.getIdentity();


      await this.getAllInfoLgo('personalize')

     const result = await this.status_img(this.logo.logo)  

    let nav = localStorage.getItem("nav");

    if (nav) {
      this.setHistoryOptionMain(nav);
      this.navOption = nav;


      if (nav == "terrenos" ||  nav == "casas"  ||  nav == "oficinas" ||  nav == "locales" ) {
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
         
         if(Array.isArray(arr)){

          if(arr[0]?.logo){
            return arr[0]
          }else{
            return {logo:''}
          }

           
         }else{
           return {logo:''}
         }
      

    },
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),
    
      ...mapActions('logo', ['getAllInfoLgo']),

    ...mapActions("usuarios", ["setHistoryOptionUsr"]),
    ...mapActions("usuarios", ["getAllInfoUsr"]),

    ...mapActions("profile", ["setHistoryOptionPrf"]),
    ...mapActions("profile", ["getAllInfoPrf"]),

    ...mapActions("colaborador", ["setHistoryOptionClb"]),
    ...mapActions("colaborador", ["getAllInfoClb"]),




    ...mapActions("terrenos", ["setHistoryOptionTrr"]),
    ...mapActions("terrenos", ["getInfoByIdTrr"]),

    ...mapActions("casas", ["setHistoryOptionCss"]),
    ...mapActions("casas", ["getInfoByIdCss"]),

    ...mapActions("oficinas", ["setHistoryOptionOfn"]),
    ...mapActions("oficinas", ["getInfoByIdOfn"]),

    ...mapActions("locales", ["setHistoryOptionLcl"]),
    ...mapActions("locales", ["getInfoByIdLcl"]),




    activeMenu(value) {
      if (value == 1) {
        this.hidemenu ? (this.hidemenu = false) : (this.hidemenu = true);
      }else  if (value == 2) {
        this.hidemenu2 ? (this.hidemenu2 = false) : (this.hidemenu2 = true);
      } else {
        this.hidemenu = false;
        this.hidemenu2 = false;
      }
    },
    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },

    setOption: function (option) {
   
      if (option == "MenuP") {
        this.navOption = option;
      } else if (option == "Mi Página") {
        // window.open("", "_blank");
    
      } else {
        this.navOption = option;
        localStorage.setItem("nav", option);
        this.setHistoryOptionMain(option);
      
      
        if (option == "colaborador") {
          this.getInfoByIdClb({
            id: this.identity.sub,
            option:"colaborador"
          });
        }  else if (option == "terrenos") {
          this.getInfoByIdTrr({
            id: this.identity.sub,
            option:"terrenos/colaborador"
          });
        }  else if (option == "casas") {
        this.getInfoByIdCss({
            id: this.identity.sub,
            option:"casas/colaborador"
          });
   
        }  else if (option == "oficinas") {
          this.getInfoByIdOfn({
            id: this.identity.sub,
            option:"oficinas/colaborador"
          });
        }  else if (option == "locales") {
          this.getInfoByIdLcl({
            id: this.identity.sub,
            option:"locales/colaborador"
          });
        } 
        
      }
    },


    status_img:async  function (img){
      if(!img || img =='') {
          this.statusimg =false
          return ''
      }
                 let payload ={
                    option:'personalize',
                    image:img
                }
                let response  =''

                try{
                     response =  await this.$store.dispatch("main/getStatusImage", payload);
                  
                      if(!response?.data?.status){
                       this.statusimg =true
                      }else{
                        response = ''
                      }
                }catch(err){
                    console.log(err)
                }

                return response
               
    },

       srcImg:   function (img){
            if(!img || img =='') {
                this.statusimg =false
                return ''
            }
                let src = `${url}personalize-img/${img}`
                
    
                return src
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
  padding-top: 0Vw;
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
