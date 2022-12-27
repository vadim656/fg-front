<template>
  <header
    class="w-full mx-auto bg-[#E5E5E5]/10 flex justify-center h-24 absolute top-0 left-0 right-0 z-[9] drop-shadow-sm backdrop-blur-sm"
  >
    <div
      class="hidden  h-full sm:flex items-center justify-between container w-full gap-6 text-[#242424]"
    >
      <nuxt-link to="/" class="w-full max-w-[240px]">
        <img src="~/assets/icons/logo-header.svg" alt=""
      /></nuxt-link>

      <div class="w-full">
        <ul class="flex items-center gap-1 sm:gap-4">
          <li v-for="(item, i) in menu" :key="i" class="">
            <nuxt-link
              to="/"
              class="hover:underline hover:underline-offset-4 anime text-sm"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="flex gap-4 w-full justify-end text-sm">
        <div class="flex gap-1 flex-col">
          <div class="flex gap-1 items-center">
            <img src="~assets/icons/Phone_light.svg" alt="" />
            <a href="tel:89530722184">+7(953)072-21-84</a>
          </div>
        </div>
        <div class="flex gap-1 items-center">
          <img src="~assets/icons/Message_light.svg" alt="" />
          <span>feliksgrupp@mail.ru</span>
        </div>
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
          class="flex w-full h-full justify-center items-center bg-gray-900/80  p-3"
        >
          <ul class="flex px-4 flex-col gap-2 text-white">
            <li v-for="(item, i) in menu" :key="i" @click="mobActive = !mobActive">
              <nuxt-link :to="item.url" class="text-2xl">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
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
          name: 'Вся продукция',
          url: '/'
        },
        {
          name: 'Новости',
          url: '/news'
        },
        {
          name: 'Контакты',
          url: '/contacts'
        }
      ]
    }
  }
}
</script>

<style></style>
