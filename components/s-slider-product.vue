<template>
  <div class="w-full flex justify-center ">
    <div class="container  py-12 flex justify-between">
      <div
        class="hidden sm:block w-4/12 bg-white p-8 rounded-2xl drop-shadow-2xl"
      >
        <div class="flex flex-col justify-start items-center gap-4 relative ">
          <img
            src="~/assets/img/image14.png"
            alt=""
            class="absolute -top-16 -right-20 rotate-12"
          />
          <h3
            class="font-['Oranienbaum'] text-[72px] text-[#242424]/5 leading-[1]"
          >
            Соус Томатный Острый
          </h3>
          <div class="flex flex-col justify-start items-start gap-4">
            <span class="font-['Oranienbaum'] text-4xl"
              >Соус Томатный Острый</span
            >
            <span class="text-lg">По-Грузински</span>
            <span class="text-sm"
              >Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.</span
            >
          </div>
          <div class="flex flex-col gap-12 w-full">
            <nuxt-link
              :to="'/products/' + 1"
              class="flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium max-w-[216px]"
            >
              <img src="~/assets/icons/Arrow_down_light.svg" alt="" />
              Перейти к товару
            </nuxt-link>
            <div class="flex gap-4">
              <button @click="$refs.carousel.goToPrev()">
                <img src="../assets/icons/arrow-slider.svg" alt="" />
              </button>
              <button @click="$refs.carousel.goToNext()">
                <img
                  src="../assets/icons/arrow-slider.svg"
                  alt=""
                  class="rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-8/12 h-full flex flex-col gap-4 sm:block">
        <div class="flex w-full justify-center gap-2">
          <button
            @click="tabs = 1"
            :class="[
              tabs == 1
                ? 'gradient text-white border-none'
                : 'bg-transparent border'
            ]"
            class="p-4 rounded-md"
          >
            Соусы
          </button>
          <button
            @click="tabs = 2"
            :class="[
              tabs == 2
                ? 'gradient text-white border-none'
                : 'bg-transparent border'
            ]"
            class="p-4 rounded-md"
          >
            Кетчупы
          </button>
          <button
            @click="tabs = 3"
            :class="[
              tabs == 3
                ? 'gradient text-white border-none'
                : 'bg-transparent border'
            ]"
            class="p-4 rounded-md"
          >
            Соки
          </button>
        </div>
        <client-only placeholder="Загрузка...">
          <agile id="products" ref="carousel" :options="allInfo">
            <div
              v-for="(item, i) in getProductsSlider"
              :key="i"
              class="slide p-4 h-full "
            >
              <div class="h-full flex flex-col justify-center items-center">
                <img :src="$config.baseURL +
                  item.attributes.Photo.data[0].attributes.url" alt="" class="p-6"/>
       
                <div class="flex items-end gap-2 ">
                  <div class="flex flex-col gap-2 items-start sm:items-center mt-10 text-sm">
                    <span class="text-[#242424]/50">{{
                      item.attributes.SubName
                    }}</span>
                    <span>{{ item.attributes.Name }}</span>
                  </div>
                  <nuxt-link :to="`/products/` + item.id" class="ml-2">
                    <img src="~/assets/icons/Group8730.svg" alt="" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </agile>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile
  },
  props: {
    products: Array
  },
  methods: {},
  computed: {
    getProductsSlider () {
      if (this.tabs == 1) {
        return this.products.data.filter(
          x => x.attributes.categories.data[0].id == 1
        )
      } else if (this.tabs == 2) {
        return this.products.data.filter(
          x => x.attributes.categories.data[0].id == 2
        )
      } else if (this.tabs == 3) {
        return this.products.data.filter(
          x => x.attributes.categories.data[0].id == 3
        )
      }
    }
  },
  data () {
    return {
      tabs: 1,
      allInfo: {
        navButtons: false,
        centerMode: true,
        pauseOnHover: true,
        infinite: true,
        dots: true,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
#products .agile__dot {
  margin: 0 10px;
}
#products .agile__dot button {
  background-color: #f0c0bc;
  border: none;
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
#products .agile__dot--current button,
#products .agile__dot:hover button {
  background-color: #de4237;
  width: 10px;
  height: 10px;
}

#products .agile__slide {
  opacity: 0.5;
  filter: blur(5.5px);
}

#products .agile__slide--active {
  opacity: 1 !important;
  filter: none !important;
  transform: scale(1.3);
}

#products .agile__slide--active img {
  transform: scale(1.4);
}
#products .agile__track,
#products .agile__list,
#products {
  height: 100%;
}
</style>
