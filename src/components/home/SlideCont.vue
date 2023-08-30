<template>
  <div class="slide-c">
    <div class="slide-b" v-if="slide.length == 1">
      <div class="bk">
        <img
          :src="url + '/get-banner-image/' + slide[0].image_mv"
          alt="mo"
          class="mo"
        />
        <img
          :src="url + '/get-banner-image/' + slide[0].image"
          alt="pc"
          class="pc"
        />
      </div>
    </div>
    <div v-else-if="slide.length > 1">
      <carousel :perPage="1" navigationEnabled>
        <slide v-for="(s, i) in slide" :key="i">
          <div class="slide-b">
            <div class="bk">
              <img
                :src="url + '/get-banner-image/' + s.image_mv"
                alt="mo"
                class="mo"
              />
              <img
                :src="url + '/get-banner-image/' + s.image"
                alt="pc"
                class="pc"
              />
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { mapActions } from "vuex";
import { url, endpointCodes } from "../../global/index";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      url: url,
      endpointCodes,
    };
  },
  created() {
    this.getAllInfoBnr("banner");
  },
  computed: {
    slide() {
      return this.$store.getters["banner/data"];
    },
  },
  methods: {
    ...mapActions("banner", ["getAllInfoBnr"]),
    sendURL: function () {
      window.location.href = "catalogo";
    },
  },
};
</script>
<style scoped>
.slide-c { 
  height: 159vw;
  overflow: hidden;
}
.slide-c .bk {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.slide-c .slide-b {
  position: relative;
}
.slide-c .bk img {
  width: 100%;
}
.slide-c .bk .mo {
  display: block;
}
.slide-c .bk .pc {
  display: none;
} 
@media (min-width: 768px) {
  .slide-c .bk .mo {
    display: none;
  }
  .slide-c .bk .pc {
    display: block;
  }
  .slide-c {
    padding-top: 0;
    height: 49.861vw;
    overflow: hidden;
  } 
}
</style>
