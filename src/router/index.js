import Vue from 'vue'
import VueRouter from 'vue-router'
import userService from '../services/user.service'
Vue.use(VueRouter)

const routes = [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

    {
      path: '/terminos',
      name: 'Terminos',
      component: () => import('../views/Terminos'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

    {
      path: '/politicas',
      name: 'Politicas',
      component: () => import('../views/Politicas'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

    {
      path: '/encuesta',
      name: 'Encuesta',
      component: () => import('../components/encuesta'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

    {
      path: '/encuesta_final',
      name: 'EncuestaFinal',
      component: () => import('../components/EncuestaFinal'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

    {
      path: '/Menu',
      name: 'Menu',
      component: () => import('../components/Menu'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },
 
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../components/home/hola'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },


    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
      meta :{
        log:false,
        admin : false,
         
        auth: false,
      }
    },

   

  {
    path: '/auth',
    name: 'autentificacion',
    component: () => import('../views/Autentificacion'),
    meta :{
      log:true,
      admin : true,
       
      auth: false
    }
  }, 
  {
    path: '/administrador',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta :{
      log:true,
      admin : true,
       
      auth: true, 
    }
  }, 
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  {
    path: '/facturacion',
    name: 'facturacion',
    component: () => import('../views/facturacion.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  {
    path: '/privacidad',
    name: 'Privacidad',
    component: () => import('../views/privacidad.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  {
    path: '/quienes-somos',
    name: 'Quienes-somos',
    component: () => import('../views/quienesSomos.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  {
    path: '/Sucursales',
    name: 'Sucursales',
    component: () => import('../views/Sucursales.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  /*Borrar de aquí para abajo */
  {
    path: '/sucursal',
    name: 'sucursal',
    component: () => import('../components/fixed/Sucursal.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },

  {
    path: '/domicilio',
    name: 'domicilio',
    component: () => import('../components/fixed/Domicilio.vue'),
    meta :{
     log:false,
     admin : false,
      
     auth: false
    }
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach( async (to, from, next) => {

  let meta_admin = to.matched.some(record=>record.meta.admin); 
  let meta_log = to.matched.some(record=>record.meta.log);
  let meta_auth = to.matched.some(record=>record.meta.auth);

  let tokenexp = await userService.tokenexp()
  let check =false //comprobar si esta logeado
  let admin =false; 
  let type =''


  if(tokenexp){ // ver que el token no este expirado.
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath') //limpiar el localstorage
    next()
  }


  let response = await userService.getData()

  if(response.status =='error'){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
  }


  if(response.status=='success'){ //comprobar que sea un login valido.
    check =true;
    let isAdmin = userService.isAdmin(response.result);
    admin = isAdmin.admin
    type = isAdmin.type

    /*let isTch = userService.isTch(response.result);
    colaborador = isTch.tch
  */
  }

  let ath = await userService.getAth();

 
  // borrar el localstorage cada que vayamos a login.
  
  if(to.path==='/login' && check){
    localStorage.removeItem('tkn')
    localStorage.removeItem('ath')
    
    next()
  }

  //redireccionamientos por rol.

  if(!meta_log) next();

  if(meta_log && !check)  next('/login');

  if(meta_admin){
        if(admin){
        
          if(meta_auth){
            if(ath){
              next();
            }else{
              localStorage.removeItem('tkn')
              localStorage.removeItem('ath')
              next('/login')
            }
          }else{ //...proximamente rutas que no requieran autentificacion
            next()
          }
          
        }else{
          localStorage.removeItem('tkn')
          localStorage.removeItem('ath')
          next('/')
        }
  } else{
    next()
  }

 
});




export default router

