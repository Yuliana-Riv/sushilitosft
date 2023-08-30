<template>
  <div class="banner2">
    <div class="sectionbanner1" v-if="databannerdos !== 'No se encontraron coincidencias'">
      <img
        class="imgban2mv"
        :src="url + '/get-banner-image/' + databannerdos[0].image_mv"
        alt=""
      />
      <img
        class="imgban2pc"
        :src="url + '/get-banner-image/' + databannerdos[0].image"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { url, endpointCodes } from "../global/index";
export default {
  data() {
    return {
      url: url,
      endpointCodes,
    };
  },
  async created() {
    await this.getAllInfoBnr("banner");
  },
  computed: {
    databannerdos() {
      let data = this.$store.getters["banner/data"]; 
      let arr = [];
      if (data == "No se encontraron coincidencias" || data.length == 0 || data == null) {
        return "No se encontraron coincidencias";
      }
      else{
        for (let i = 0; i < data.length; i++) {
          if (data[i].type == "banner-2") {
            arr.push(data[i]);
          }
        }
        return arr;        
      }

    },
  },
  methods: {
    ...mapActions("banner", ["getAllInfoBnr"]),
  },
};
</script>

<style scoped>
.imgban2mv {
  width: 100vw;
  height: 51.20772946859904vw;
}
.sectionbanner1 {
  margin-top: 0vw;
}
.imgban2pc {
  display: none;
}
.imgban2mv {
  width: 100%;
}

@media (min-width: 768px) {
  .sectionbanner1 {
    margin-top: 0vw;
  }

  .imgban2mv {
    display: none;
  }
  .imgban2pc {
    width: 100vw;
    height: 22.083333333333332vw;
    display: block;
  }
}
</style>
