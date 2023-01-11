<template>
  <div class="pt-24 sm:pt-48 container flex flex-col gap-24 px-4 sm:px-0">
    <span class="text-2xl w-full text-center">Корзина</span>
    <div
      class="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-6"
      v-if="view && CART.length"
    >
      <div class="w-full" v-if="view">
        <div
          class="w-full border-b  p-4 hidden sm:grid grid-cols-[1fr,3fr,1fr]"
          v-if="CART.length"
        >
          <span>Фото</span>
          <span>Название</span>
          <span>Количество</span>
        </div>
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
        <div class="w-full flex justify-end mt-6">
          <button
            @click="resetCart"
            class=" w-full text-xs text-right text-gray-400 hover:text-gray-600 anime"
          >
            Очистить корзину
          </button>
        </div>
      </div>

      <div
        class="w-full bg-white p-6 rounded-md drop-shadow-xl flex flex-col gap-2"
        v-if="CART.length"
      >
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
          <div class="sm:col-span-2 flex flex-col gap-2">
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
          <div class="sm:col-span-1 flex flex-col gap-2">
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
          v-if="this.form.phone.length == 18 && this.form.name !== ''"
          @click="getTeelegrammToProduct"
          class="flex items-center justify-center gap-2 gradient text-white p-6 rounded-lg mt-6"
        >
          <img src="~/assets/icons/arrow-form.svg" alt="" />
          Оставить заявку
        </button>
        <button
          v-else
          class=" opacity-50 flex justify-center items-center gap-2 gradient text-white p-6 rounded-lg mt-6"
        >
          <img src="~/assets/icons/arrow-form.svg" alt="" />
          Оставить заявку
        </button>
        <span v-if="succes == true" class="pt-6"
          >Спасибо! Ваша заявка принята.</span
        >
      </div>
    </div>
    <div v-else class="w-full flex justify-center mt-6">
      <span class=" w-full text-center text-gray-600">Корзина пуста</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cartItem from '../../components/cart-item.vue'
export default {
  components: { cartItem },
  layout: 'main',
  data () {
    return {
      view: false,
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
  mounted () {
    if (this.CART) {
      this.view = true
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['RESET_CART']),

    resetCart () {
      this.RESET_CART()
    },
    async getTeelegrammToProduct () {
      const cart = []
      this.CART.forEach(x => {
        cart.push(
          x.attributes.Name +
            ' - ' +
            x.attributes.SubName +
            '\n' +
            'Кол-во: ' +
            x.value
        )
      })
      const cartF = cart.join('\n-------------------- \n')

      const fullMessege =
        'Заявка с корзины товара' +
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
        '\n' +
        'Товары: ' +
        '\n' +
        '--------------------' +
        '\n' +
        cartF
      console.log(fullMessege)
      if (this.form.phone.length == 18 && this.form.name !== '') {
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
            setTimeout(() => {
              this.resetCart()
              this.$router.push('/')
            }, '1000')
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
