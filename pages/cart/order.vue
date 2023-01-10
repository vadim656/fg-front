<template>
  <div class="pt-24 sm:pt-48 container flex flex-col gap-24 px-4 sm:px-0">
    <span class="text-2xl w-full text-center">Оформление заказа</span>

    <div class="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-6" v-if="view">
      <div>
        <div class="flex flex-col divide-y ">
          <transition-group
            name="list"
            tag="div"
            class="divide-y border-l border-r"
          >
            <cart-item
              :class="[i % 2 ? '' : 'bg-gray-100']"
              v-for="(item, i) in CART"
              :key="item.id"
              :item="item"
            />
          </transition-group>
        </div>
      </div>
      <div class="w-full bg-white p-6 rounded-md drop-shadow-xl">
        <form action="" class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3">
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cartItem from '~/components/cart-item.vue'
export default {
  layout: 'main',
  components: { cartItem },
  data () {
    return {
      form: {
        name: '',
        org: '',
        product: '',
        phone: '',
        email: ''
      },
      succes: false,
      view: false
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  mounted () {
    if (this.CART) {
      this.view = true
    }
  },
  methods: {
    async getTeelegrammToProduct () {
    //   const fullMessege =
    //     'Заявка с карточки товара' +
    //     '\n' +
    //     'Телефон:  ' +
    //     this.form.phone +
    //     '\n' +
    //     'Имя: ' +
    //     this.form.name +
    //     '\n' +
    //     'Сообщение: ' +
    //     this.form.product +
    //     '\n' +
    //     'email: ' +
    //     this.form.email +
    //     '\n' +
    //     'Организация: ' +
    //     this.form.org +
    //     '\n' +
    //     'Товар название: ' +
    //     this.productData.attributes.Name +
    //     ' - ' +
    //     this.productData.attributes.SubName +
    //     '\n' +
    //     'Количество: ' +
    //     this.orderValue

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

<style></style>
