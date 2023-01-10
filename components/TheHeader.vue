<template>
  <header
    class="w-full mx-auto bg-[#E5E5E5]/10 flex justify-center h-24 absolute top-0 left-0 right-0 z-[9] drop-shadow-sm backdrop-blur-sm"
  >
    <div
      class="hidden  h-full sm:flex items-center justify-between container w-full gap-6 text-[#242424]"
    >
      <nuxt-link to="/" class="w-full max-w-[240px]">
        <img src="~/assets/icons/logo-footer.svg" alt=""
      /></nuxt-link>

      <div class="w-full">
        <ul class="flex items-center gap-1 sm:gap-4">
          <li v-for="(item, i) in menu" :key="i" class="">
            <nuxt-link
              :to="item.url"
              class="hover:underline hover:underline-offset-4 anime text-sm"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="flex gap-4 w-full justify-end items-center text-sm">
        <div class="flex gap-1 flex-col">
          <div class="flex gap-1 items-center">
            <img src="~assets/icons/Phone_light.svg" alt="" />
            <a href="tel:89530722184">+7(953)072-21-84</a>
          </div>
        </div>
        <div class="flex gap-1 items-center">
          <img src="~assets/icons/Message_light.svg" alt="" />
          <span>ketchup2022@bk.ru</span>
        </div>
        <!-- корзина -->
        <nuxt-link to="/cart" prefetch class="flex gap-1">
           Корзина
          <div class="relative">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
           <span
            class="absolute -top-2 -right-2 text-xs bg-white rounded-full w-4 h-4 flex justify-center items-center"
            >{{ CART.length }}</span
          >
          </div>
          
         
        </nuxt-link>
      </div>
    </div>
    <!-- mobile -->
    <div
      class="flex justify-between sm:hidden w-full container items-center realtive"
    >
      <nuxt-link to="/" class="w-full ml-2 max-w-[100px]">
        <img src="~/assets/icons/logo-header.svg" alt=""
      /></nuxt-link>
      <button
        @click="mobActive = !mobActive"
        class="p-2 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <!-- menu mob -->
      <div
        v-if="mobActive"
        class="absolute top-0 right-0 left-0 w-screen h-screen bg-white"
      >
        <div
          class="w-full flex justify-between items-center absolute top-5 z-[2]"
        >
          <nuxt-link to="/" class="w-full ml-2 max-w-[100px]">
            <img src="~/assets/icons/logo-header.svg" alt=""
          /></nuxt-link>
          <button
            @click="mobActive = !mobActive"
            class="p-2 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-col gap-4 w-full h-full justify-center items-center bg-gray-900/80  p-3"
        >
          <ul class="flex px-4 flex-col gap-2 text-white">
            <li
              v-for="(item, i) in menu"
              :key="i"
              @click="mobActive = !mobActive"
            >
              <nuxt-link :to="item.url" class="text-2xl">{{
                item.name
              }}</nuxt-link>
            </li>
            <a
              href="tel:89530722184"
              class="border px-3 py-2 w-full rounded-md text-white border-white flex justify-center items-center gap-2"
            >
              <span class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <span class="pb-[1px]">
                +7(953)072-21-84
              </span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      mobActive: false,
      menu: [
        {
          name: 'Главная',
          url: '/'
        },
        {
          name: 'Новости',
          url: '/news'
        },

        {
          name: 'Сотрудничество',
          url: '/sotrudnichestvo'
        },
        {
          name: 'Контакты',
          url: '/contacts'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style></style>
