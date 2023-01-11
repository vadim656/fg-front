<template>
  <div class="w-full   p-4 grid grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-2 sm:gap-0  sm:grid-cols-[1fr,3fr,1fr] content-center">
    <div class="row-span-2 flex justify-start items-center">
      <img
        :src="$config.baseURL + item.attributes.Photo.data[0].attributes.url"
        alt=""
        class="w-full h-auto max-w-[100px]  sm:max-w-[70px] object-cover"
      />
    </div>
    <div class="flex flex-col gap-1 justify-center">
      <span>{{ item.attributes.Name }} </span>
      <span class="text-gray-600 text-xs">{{ item.attributes.SubName }}</span>
    </div>
    <div class="flex  justify-start items-center gap-2">
      <div
        class="flex  items-center justify-between border-2 rounded-md gap-4 w-full max-w-[140px] p-1"
      >
        <button
          @click="minusCart"
          :class="[item.value >= 2 ? '' : 'opacity-10']"
          class="flex justify-center items-center p-2 sm:p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
        >
          -
        </button>
        <span> {{ item.value }}</span>
        <button
          @click="plusCart"
          class="flex justify-center items-center p-2 sm:p-4 text-lg bg-gray-100 hover:bg-gray-200 rounded-md anime"
        >
          +
        </button>
      </div>
      <button @click="deleteFromCart(item)" class="text-xs text-red-300 hover:text-red-500 anime flex gap-1 items-center">
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        <span class="hidden sm:block">Удалить</span>
        
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: Object
  },
  methods: {
    plusCart () {
      const id = this.item.id
      this.$store.dispatch('PLUS_CART', id)
    },
    minusCart () {
      if (this.kovVo.value >= 2) {
        const id = this.item.id
        this.$store.dispatch('MINUS_CART', id)
      }
    },
    deleteFromCart (id) {
      this.$store.dispatch('DELETE_FROM_CART', id)
    }
  },
  computed: {
    ...mapGetters(['CART']),
    kovVo () {
      const product = this.item.id
      const item = this.$store.state.cart.filter(x => x.id == product)
      const value = item.map(x => x.value)
      return { value, product }
    }
  }
}
</script>

<style></style>
