import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import casas from './modules/casas'
import colaborador from './modules/colaborador'
import colors from './modules/colors'
import locales from './modules/locales'
import logo from './modules/logo'
import main from './modules/main'
import oficinas from './modules/oficinas'
import profile from './modules/profile'
import propiedad from './modules/propiedad'
import terrenos from './modules/terrenos'
import usuarios from './modules/usuarios'
import suscripciones from './modules/suscripciones'
import banner from './modules/banner'
import address from './modules/address'
import phone from './modules/phone'
import horario from './modules/horario'
import social_media from './modules/social_media'
import nave from './modules/nave' 
import otros from './modules/otros'
import bodega from './modules/bodega'
import encuesta from './modules/encuesta'
import sucursales from "./modules/sucursales"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: admin,
    main: main,
    usuarios: usuarios,
    profile:profile,
    colors:colors,
    logo:logo,
    colaborador:colaborador,
    terrenos:terrenos,
    casas:casas,
    bodega:bodega,
    oficinas:oficinas,
    locales:locales,
    propiedad:propiedad,
    suscripciones:suscripciones,
    banner:banner,
    address:address,
    phone:phone,
    horario:horario,
    social_media:social_media,
    nave:nave, 
    otros:otros,
    encuesta:encuesta,
    sucursales:sucursales,
  }
})
