<template>
  <div class="banner1">
    <div class="sectionbanner1" v-if="databanneruno !== 'No se encontraron coincidencias'">
      <img
        class="b1"
        :src="url + '/get-banner-image/' + databanneruno.image_mv"
        alt="bannermo"
      />
      <img
        class="b2"
        :src="url + '/get-banner-image/' + databanneruno.image"
        alt="bannerpc"
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
    databanneruno() {
      let data = this.$store.getters["banner/data"];
      let arr = [];
      if (data == "No se encontraron coincidencias" || data.length == 0 || data == null) {
        return "No se encontraron coincidencias";
      }
      else{
        for (let i = 0; i < data.length; i++) {
          if (data[i].type == "banner-1") {
            arr.push(data[i]);
          }
        }
        return arr[0];        
      }

    },
  },
  methods: {
    ...mapActions("banner", ["getAllInfoBnr"]),
  },
};
</script>
<style scoped>
.b1 {
  width: 100vw;
  height: 51.20772946859904vw;
}
.sectionbanner1 {
  margin-top: 14.009661835748794vw;
}
.b2 {
  display: none;
}
.b1 {
  width: 100%;
}

@media (min-width: 768px) {
  .sectionbanner1 {
    margin-top: 0;
    padding-top: 0;
  }

  .b1 {
    display: none;
  }
  .b2 {
    width: 100vw;
    height: 22.083333333333332vw;
    display: block;
  }
}
</style>
