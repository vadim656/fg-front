<template>
  <div class="w-full flex justify-center ">
    <div class="container  py-12 flex justify-between">
      <div
        class="hidden sm:block w-4/12 bg-white p-8 rounded-2xl drop-shadow-2xl"
      >
        <div
          class="flex flex-col justify-start items-center gap-4 relative "
          v-if="slideProductData"
        >
          <img
            src="~/assets/img/image14.png"
            alt=""
            class="absolute -top-16 -right-20 rotate-12"
          />
          <h3
            class="font-['Oranienbaum'] text-4xl text-[#242424]/5 leading-[1] w-full"
          >
            {{ slideProductData.attributes.Name }}
          </h3>
          <div class="flex flex-col justify-start items-start gap-4 w-full">
            <span class="font-['Oranienbaum'] text-4xl">{{
              slideProductData.attributes.Name
            }}</span>
            <span class="text-lg">{{
              slideProductData.attributes.SubName
            }}</span>
            <span
              class="text-sm"
              v-html="slideProductData.attributes.Desc"
            ></span>
          </div>
          <div class="flex flex-col gap-12 w-full">
            <div class="flex justify-between items-center gap-1">
              <nuxt-link
                :to="'/products/' + slideProductData.id"
                class="flex justify-center items-center gap-1 bg-[#F0F0F0] p-6 rounded-md  font-medium max-w-[216px]"
              >
                <img src="~/assets/icons/Arrow_down_tem.svg" alt="" />
                Подробнее
              </nuxt-link>
              <button
                v-if="!getCart.includes(slideProductData.id)"
                @click="addtoCart(slideProductData)"
                class="flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                В корзину
              </button>
              <button
              v-else
                class=" flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                В корзине
              </button>
            </div>

            <div class="flex gap-4">
              <button @click="prevSlide">
                <img src="../assets/icons/arrow-slider.svg" alt="" />
              </button>
              <button @click="nextSlide">
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
            @click="
              tabs = 1
              slideProduct = 0
            "
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
            @click="
              tabs = 2
              slideProduct = 0
            "
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
            @click="
              tabs = 3
              slideProduct = 0
            "
            :class="[
              tabs == 3
                ? 'gradient text-white border-none'
                : 'bg-transparent border'
            ]"
            class="p-4 rounded-md"
          >
            Приправы
          </button>
        </div>
        <client-only placeholder="Загрузка...">
          <agile
            id="products"
            ref="carousel"
            :options="allInfo"
            :key="getProductsSlider.length"
          >
            <div
              v-for="(item, i) in getProductsSlider"
              :key="i"
              class="slide p-4 h-full "
            >
              <div class="h-full flex flex-col justify-center items-center">
                <img
                  :src="
                    $config.baseURL +
                      item.attributes.Photo.data[0].attributes.url
                  "
                  alt=""
                  class="p-10 h-full max-h-[400px]"
                />

                <nuxt-link
                  :to="`/products/` + item.id"
                  class="flex items-end gap-2 "
                >
                  <div
                    class="flex flex-col gap-2 items-start sm:items-center mt-10 text-sm"
                  >
                    <span class="text-[#242424]/50">{{
                      item.attributes.SubName
                    }}</span>
                    <span>{{ item.attributes.Name }}</span>
                  </div>
                </nuxt-link>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    agile: VueAgile
  },
  props: {
    products: Object
  },
  methods: {
    nextSlide () {
      this.$refs.carousel.goToNext()
      if (this.getProductsSlider.length - 1 == this.slideProduct) {
        this.slideProduct = 0
      } else {
        this.slideProduct++
      }
    },
    prevSlide () {
      this.$refs.carousel.goToPrev()
      if (this.slideProduct == 0) {
        this.slideProduct = this.getProductsSlider.length - 1
      } else {
        console.log(this.getProductsSlider.length, this.slideProduct)
        this.slideProduct--
      }
    },
    addtoCart (item) {
      item['value'] = 1
      this.ADD_TO_CART(item)
    },
    ...mapActions(['ADD_TO_CART'])
  },
  computed: {
    ...mapGetters(['CART']),
    getCart () {
      const idS = this.CART.map(x => x.id)
      return idS
    },
    slideProductData () {
      return this.getProductsSlider[this.slideProduct]
    },
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
          x => x.attributes.categories.data[0].id == 4
        )
      }
    }
  },
  data () {
    return {
      tabs: 1,
      slideProduct: 0,
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
              slidesToShow: 2
            }
          },

          {
            breakpoint: 1440,
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
