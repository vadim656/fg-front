<template>
  <div class="w-full relative">
    <div
      class="pt-24 sm:pt-48 container flex flex-col gap-24 px-4 sm:px-0"
      v-if="product !== undefined"
    >
      <div
        class="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 "
      >
        <div class="w-full sm:w-4/12 bg-white p-4 rounded-2xl drop-shadow-2xl">
          <div
            class="flex flex-col justify-between h-full items-center gap-4 relative "
          >
            <img
              src="~/assets/img/image14.png"
              alt=""
              class=" absolute -top-20 -right-2  sm:-left-24 z-[1] w-[50%] sm:w-[70%]"
            />
            <span
              class="font-['Oranienbaum'] text-[64px] text-[#242424]/5 leading-[1] w-full"
            >
              {{ productData.attributes.Name }}
            </span>
            <div
              class="flex flex-col justify-start items-start gap-4 z-[2] w-full"
            >
              <span class="font-['Oranienbaum'] text-4xl">
                {{ productData.attributes.Name }}</span
              >
              <span class="text-lg"> {{ productData.attributes.SubName }}</span>
              <span class="text-sm" v-html="productData.attributes.Desc"></span>
            </div>
            <div class="flex flex-col sm:flex-row justify-start gap-4 w-full">
              <div
                class="flex items-center justify-between border-2 rounded-md gap-4 w-full p-1"
              >
                <button
                  class="flex justify-center items-center p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
                  @click="minusCart"
                >
                  -
                </button>
                <span class="w-full max-w-[40px] text-center">
                  {{ kovVo.value }}
                </span>

                <button
                  class="flex justify-center items-center p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
                  @click="plusCart"
                >
                  +
                </button>
              </div>
              <button
                v-if="!getCart.includes(productData.id)"
                @click="addtoCart(productData)"
                class="w-full flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium "
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
                ?? ??????????????
              </button>
              <nuxt-link
                to="/cart"
                v-else
                class="w-full  flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium "
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
                ?? ??????????????
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-8/12 flex justify-center">
          <img
            :src="
              $config.baseURL +
                productData.attributes.Photo.data[0].attributes.url
            "
            alt=""
            class="w-auto h-full max-h-[600px] z-[0]"
          />

          <img
            src="~/assets/img/Ellipse168.png"
            class="hidden sm:visible absolute top-36 right-0 z-[0] w-[calc(30%+2rem)]"
          />
        </div>
      </div>
      <section class="flex flex-col gap-6">
        <h-3-title :title="'???????????? ????????????'" />
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
            ??????????
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
            ??????????????
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
            ????????????????
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
          <div
            v-for="(item, i) in getProductsSlider"
            :key="i"
            class="flex flex-col gap-2 sm:gap-4 justify-center items-center"
          >
            <img
              class="p-6"
              :src="
                $config.baseURL + item.attributes.Photo.data[0].attributes.url
              "
              alt=""
            />

            <div class="flex items-end gap-2 ">
              <div
                class="flex flex-col gap-2 items-start sm:items-center mt-2 text-sm"
              >
                <nuxt-link
                  :to="`/products/` + item.id"
                  class="flex items-end gap-2 p-2"
                >
                  <div
                    class="flex flex-col  sm:gap-2 items-center"
                  >
                    <span class="text-[#242424]/50 text-xs">{{
                      item.attributes.SubName
                    }}</span>
                    <span class="text-lg">{{ item.attributes.Name }}</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <span v-else>??????????????????????...</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import h3Title from '../../components/h3-title.vue'
import ID_PRODUCT from '../../gql/ID_PRODUCT.gql'
import ALL_PRODUCTS from '~/gql/ALL_PRODUCTS.gql'
export default {
  components: { h3Title },
  layout: 'main',
  apollo: {
    product: {
      query: ID_PRODUCT,
      variables () {
        return {
          ID: this.$route.params.id
        }
      }
    },
    products: {
      query: ALL_PRODUCTS
    }
  },
  computed: {
    ...mapGetters(['CART']),
    kovVo () {
      const product = this.$route.params.id
      const item = this.$store.state.cart.filter(x => x.id == product)
      const Svalue = item.map(x => x.value)
      let value = null
      if (item.length) {
        value = Svalue[0]
      } else {
        value = this.orderValue
      }

      // let valueF = value[0]
      return { value, item }
    },
    getCart () {
      const idS = this.CART.map(x => x.id)
      return idS
    },
    productData () {
      return this.product.data
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
      orderValue: 1,
      form: {
        name: '',
        org: '',
        product: '',
        phone: '',
        email: ''
      },
      succes: false
    }
  },
  methods: {
    plusCart () {
      const id = this.productData.id
      if (this.getCart.includes(id)) {
        this.$store.dispatch('PLUS_CART', id)
      } else {
        this.orderValue++
        console.log('tut+')
      }
    },
    minusCart () {
      const id = this.productData.id
      if (this.kovVo.value >= 2 && this.getCart.includes(id)) {
        this.$store.dispatch('MINUS_CART', id)
      } else {
        this.orderValue--
        console.log('tut-')
      }
    },
    addtoCart (item) {
      let product = item

      product['value'] = this.orderValue

      this.ADD_TO_CART(product)
    },
    deleteFromCart (id) {
      this.$store.dispatch('DELETE_FROM_CART', id)
    },
    ...mapActions(['ADD_TO_CART']),
    async getTeelegrammToProduct () {
      const fullMessege =
        '???????????? ?? ???????????????? ????????????' +
        '\n' +
        '??????????????:  ' +
        this.form.phone +
        '\n' +
        '??????: ' +
        this.form.name +
        '\n' +
        '??????????????????: ' +
        this.form.product +
        '\n' +
        'email: ' +
        this.form.email +
        '\n' +
        '??????????????????????: ' +
        this.form.org +
        '\n' +
        '?????????? ????????????????: ' +
        this.productData.attributes.Name +
        ' - ' +
        this.productData.attributes.SubName +
        '\n' +
        '????????????????????: ' +
        this.orderValue

      if (this.form.phone !== '' && this.form.name !== '') {
        await this.$axios
          .post(
            'https://api.telegram.org/bot5647912171:AAHOM01XJhQLGJHKiWwGF7g2V2nHcgNeyUU/sendMessage?chat_id=-1001835531007',
            {
              text: fullMessege
            }
          )
          .then(response => {
            this.form.phone = ''
            this.form.name = ''
            this.form.product = ''
            this.form.email = ''
            this.form.org = ''
            this.succes = true
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
}
</script>

<style>
input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

*:focus {
  outline: none;
}
</style>
