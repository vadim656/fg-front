<template>
  <div class="w-screen slider-bg-custom h-[700px] sm:h-[900px] relative">
    <client-only placeholder="Загрузка...">
      <agile
        id="main-sliders"
        class="h-full  max-h-[700px]  sm:max-h-none sm:min-h-[900px]"
        ref="mainSliderRef"
        :options="mainSlider"
      >
        <div
          v-for="(slide, i) in sliders.data"
          :key="i"
          class="slide p-4 h-full relative"
        >
          <img
            :src="
              $config.baseURL + slide.attributes.LevitIMG.data.attributes.url
            "
            class="absolute top-[200px] sm:top-[300px] right-[200px] w-[50%] sm:w-full   sm:right-[500px] z-[-1] rotate-180"
          />
          <img
            :src="
              $config.baseURL + slide.attributes.LevitIMG.data.attributes.url
            "
            class="hidden sm:block absolute top-0 left-0 z-[-1] rotate-90"
          />
          <img
            :src="
              $config.baseURL + slide.attributes.LevitIMG.data.attributes.url
            "
            class="hidden sm:block absolute  sm:top-[440px]  sm:left-0 z-[-1] max-w-[200px] rotate-45"
          />
          <img
            :src="
              $config.baseURL + slide.attributes.LevitIMG.data.attributes.url
            "
            class="hidden sm:block absolute  top-32 right-12 z-[-1]"
          />
          <div
            class="h-full mt-16 sm:mt-0 flex flex-col-reverse sm:flex-row  justify-end sm:justify-center items-center"
          >
            <div class="flex flex-col text-white gap-4 sm:gap-8">
              <span class="text-[40px] sm:text-[72px] font-medium">{{
                slide.attributes.H1
              }}</span>
              <span
                class="text-[60px] sm:text-[120px] font-['Oranienbaum'] sm:pl-24 pb-4 sm:pb-0 leading-10 sm:leading-[6rem]"
                >{{ slide.attributes.H2 }}</span
              >
              <span class="text-sm block w-full sm:max-w-[360px]">{{
                slide.attributes.H3
              }}</span>
              <nuxt-link
                :to="slide.attributes.URL"
                class="p-4 rounded-md border border-white w-full max-w-[200px] flex justify-center items-center"
              >
                Перейти к товару
              </nuxt-link>
            </div>
            <kinesis-container class="">
              <kinesis-element :strength="30">
                <img
                  :src="
                    $config.baseURL + slide.attributes.Photo.data.attributes.url
                  "
                  alt=""
                  class="pl-20 mt-4 sm:mt-0 sm:pl-0 w-[70%] h-auto object-cover sm:w-full max-w-[440px]"
                />
              </kinesis-element>
            </kinesis-container>
          </div>
        </div>
      </agile>
    </client-only>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  props: {
    sliders: Object
  },
  components: {
    agile: VueAgile
  },
  data () {
    return {
      mainSlider: {
        navButtons: false,
        centerMode: true,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 5000,
        timing: 'ease-in-out',
        speed: 300,
        infinite: true,
        dots: true,
        slidesToShow: 1
      }
    }
  }
}
</script>

<style>
.slider-bg-custom {
  background: url('../assets/img/950950.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

#main-sliders .agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}

#main-sliders .agile__dot {
  margin: 12px;
}
#main-sliders .agile__dot button {
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 6px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 6px;
}
#main-sliders .agile__dot--current button,
#main-sliders .agile__dot:hover button {
  background-color: #de4237;
  width: 10px;
  height: 10px;
}

@media (min-width: 600px) {
  #main-sliders .agile__track,
  #main-sliders .agile__list,
  #main-sliders .agile__slide,
  #main-sliders {
    height: 100%;
    min-height: 900px;
  }
}
</style>
