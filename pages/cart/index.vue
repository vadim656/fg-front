<template>
  <div class="pt-24 sm:pt-48 container flex flex-col gap-24 px-4 sm:px-0">
    <span class="text-2xl w-full text-center">Корзина</span>
    <div class="w-full" v-if="view">
      <div
        class="w-full border-b  p-4 grid grid-cols-[1fr,3fr,1fr]"
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
      <div v-if="CART.length" class="w-full flex justify-end mt-6">
        <button
          @click="resetCart"
          class=" w-full text-xs text-right text-gray-400 hover:text-gray-600 anime"
        >
          Очистить корзину
        </button>
      </div>

      <div v-if="CART.length" class="w-full flex justify-center mt-6">
        <nuxt-link
          to="/cart/order"
          class="max-w-[300px] w-full flex justify-center items-center gap-1 gradient drop-shadow-none anime hover:drop-shadow-xl  p-6 rounded-md text-white font-medium "
          ><img src="~/assets/icons/Arrow_down_light.svg" alt="" />
          Продолжить</nuxt-link
        >
      </div>
      <div v-else class="w-full flex justify-center mt-6">
        <span class=" w-full text-center text-gray-600">Корзина пуста</span>
      </div>
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
      view: false
    }
  },
  mounted () {
    if (this.CART) {
      this.view = true
    }
  },
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {
    ...mapActions(['RESET_CART']),

    resetCart () {
      this.RESET_CART()
    }
  }
}
</script>

<style></style>
