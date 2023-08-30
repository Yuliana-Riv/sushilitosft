<template >
  <div>
    <Whatsapp/>
    <Navigator/>   
    <SlideCont/>  
    <Nosotros/>
    <Menu/>
  <Domicilio/> 
  <Sucursal/> 
    <Footer/>
      
  </div>
</template>
<script>

import {url} from '../global/index'; 
import Whatsapp from '../components/fixed/Whatsapp.vue' 
import Navigator from '../components/fixed/Navigator.vue' 
 import SlideCont from '../components/home/SlideCont.vue';
 import Nosotros from '../components/home/Nosotros.vue';
 import Domicilio from '../components/fixed/Domicilio.vue';
/*import SectionBanner1 from '../components/SectionBanner1.vue';
import SectionNosotros from '../components/SectionNosotros.vue';
import SectionDirectorio from '../components/SectionDirectorio.vue';
import SectionServicios from '../components/SectionServicios.vue';
import SectionBanner2 from '../components/SectionBanner2.vue';*/
 import Sucursal from '../components/fixed/Sucursal.vue';
import Menu from '../components/home/hola.vue';
import SectionForm from '../components/SectionForm.vue';
import Footer from '../components/Footer.vue';
export default {
  name:'HOME',
  components: {
    Whatsapp,
    Navigator, 
    SlideCont,
    Nosotros,
    Menu,
    Domicilio,
    Sucursal,
    SectionForm,
    Footer    

  }   
}
</script>
