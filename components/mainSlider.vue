<template>
  <div class="w-screen slider-bg-custom h-[900px] relative">
    <img src="~/assets/img/bg1.png" class="hidden sm:block absolute top-0 left-0 z-[10]">
    <img src="~/assets/img/bg2.png" class="hidden sm:block absolute  sm:top-[640px]  sm:left-0 z-[1]">
    <img src="~/assets/img/bg3.png" class="hidden sm:block absolute top-24 right-0 sm:right-24 z-[1]">
    <img src="~/assets/img/bg3.png" class="hidden sm:block absolute  top-32 right-12 z-[1]">
    <img src="~/assets/img/bg3.png" class="absolute top-[300px] right-[200px]   sm:right-[500px] z-[1]">
    <client-only placeholder="Загрузка...">
      <agile id="main-sliders" ref="mainSliderRef" :options="mainSlider">
        <div v-for="(slide, i) in 6" :key="i" class="slide p-4 h-full">
          <div class="h-full flex flex-col-reverse sm:flex-row  justify-center items-center">
            <div class="flex flex-col text-white gap-4">
              <span class="text-[40px] sm:text-[72px] font-medium">Товар года</span>
              <span
                class="text-[100px] sm:text-[172px] font-['Oranienbaum'] pl-24 sm:leading-[10rem]"
                >2022</span
              >
              <span class="text-sm block w-full sm:max-w-[360px]"
                >Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.</span
              >
              <button
                class="p-4 rounded-md border border-white w-full max-w-[180px]"
              >
                Перейти к товару
              </button>
            </div>
            <img src="~/assets/img/sous1.png" alt=""  class="w-[80%] sm:w-full"/>
          </div>
        </div>
      </agile>
    </client-only>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
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

#main-sliders .agile__track,
#main-sliders .agile__list,
#main-sliders .agile__slide,
#main-sliders {
  height: 100%;
  min-height: 900px;
}
</style>
