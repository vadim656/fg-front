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
              class=" absolute -top-20 -right-24  sm:-left-24 z-[1] w-[50%] sm:w-[70%]"
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
            <div class="flex flex-col sm:flex-row justify-start gap-4 w-4/5">
              <div
                class="flex items-center justify-between border-2 rounded-md gap-4 w-full px-1"
              >
                <button
                  class="flex justify-center items-center p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
                  @click="orderValue--"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  v-model="orderValue"
                  value="1"
                  class="w-full max-w-[40px] text-center"
                />
                <button
                  class="flex justify-center items-center p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
                  @click="orderValue++"
                >
                  +
                </button>
              </div>
              <button
                @click="$refs.modalOrder.active = true"
                class="flex justify-center items-center gap-1 gradient p-6 rounded-md text-white font-medium w-full"
              >
                <img src="~/assets/icons/add-to-cart.svg" alt="" />
                Заказать
              </button>
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
          <!-- <img
            src="~/assets/img/image12.png"
            alt=""
            class="hidden sm:block absolute top-12 right-[400px] z-[1]"
          /> -->

          <s-modal-form ref="modalOrder">
            <div class="w-full max-w-[320px]">
              <form
                action=""
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[320px] pb-3"
              >
                <div class="sm:col-span-2 flex flex-col gap-2">
                  <label for="" class="text-sm">Ваше имя</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Иван"
                    class="input-form"
                  />
                </div>
                <div class="sm:col-span-1 flex flex-col gap-2">
                  <label for="" class="text-sm">Организация</label>
                  <input
                    v-model="form.org"
                    type="text"
                    placeholder="ООО"
                    class="input-form"
                  />
                </div>
                <div class="sm:col-span-2 flex flex-col gap-2">
                  <label for="" class="text-sm">Сообщение</label>
                  <textarea
                    id="message"
                    rows="4"
                    v-model="form.product"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                    placeholder="Напишите..."
                  ></textarea>
                </div>
                <div class="sm:col-span-2 flex flex-col gap-2">
                  <label for="" class="text-sm">Телефон</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    placeholder="+7"
                    v-facade="'+7 (###) ###-##-##'"
                    class="input-form"
                  />
                </div>
                <div class="sm:col-span-2 flex flex-col gap-2">
                  <label for="" class="text-sm">Email</label>
                  <input
                    v-model="form.email"
                    type="text"
                    placeholder="email@email.ru"
                    class="input-form"
                  />
                </div>
              </form>
              <button
                @click="getTeelegrammToProduct"
                class="flex items-center gap-2 gradient text-white p-6 rounded-lg mt-6"
              >
                <img src="~/assets/icons/arrow-form.svg" alt="" />
                Оставить заявку
              </button>
              <span v-if="succes == true" class="mt-6"
                >Спасибо! Ваша заявка принята.</span
              >
            </div>
          </s-modal-form>
          <img
            src="~/assets/img/Ellipse168.png"
            class="hidden sm:visible absolute top-36 right-0 z-[0] w-[calc(30%+2rem)]"
          />
        </div>
      </div>
      <section class="flex flex-col gap-6">
        <h-3-title :title="'Другие товары'" />
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
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
          <div
            v-for="(item, i) in getProductsSlider"
            :key="i"
            class="flex flex-col gap-4 justify-center items-center"
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
                class="flex flex-col gap-2 items-start sm:items-center mt-10 text-sm"
              >
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
      </section>
    </div>
    <span v-else>Загружается...</span>
  </div>
</template>

<script>
import h3Title from '../../components/h3-title.vue'
import ID_PRODUCT from '../../gql/ID_PRODUCT.gql'
import ALL_PRODUCTS from '~/gql/ALL_PRODUCTS.gql'
import SModalForm from '../../components/s-modal-form.vue'
export default {
  components: { h3Title, SModalForm },
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
          x => x.attributes.categories.data[0].id == 3
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
    async getTeelegrammToProduct () {
      const fullMessege =
        'Заявка с карточки товара' +
        '\n' +
        'Телефон:  ' +
        this.form.phone +
        '\n' +
        'Имя: ' +
        this.form.name +
        '\n' +
        'Сообщение: ' +
        this.form.product +
        '\n' +
        'email: ' +
        this.form.email +
        '\n' +
        'Организация: ' +
        this.form.org +
        '\n' +
        'Товар название: ' +
        this.productData.attributes.Name + ' - ' +  this.productData.attributes.SubName+
        '\n' +
        
        'Количество: ' +
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
