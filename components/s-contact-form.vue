<template>
  <div class="container flex flex-col gap-12">
    <h-3-title :title="'Контакты / Обратная связь'" />
    <div
      class="w-full px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-[8fr,4fr] gap-6"
    >
      <div
        class=" h-full p-6 rounded-3xl bg-white grid grid-cols-1 gap-6 drop-shadow-2xl"
      >
        <span class="font-['Oranienbaum'] text-4xl"> Наши контакты</span>
        <div
          class="flex flex-col sm:flex-row justify-start gap-8 items-start sm:items-center"
        >
          <div class="flex items-center gap-2">
            <img src="~/assets/icons/phone.svg" alt="" />
            <a href="tel:89530722184">+7(953)072-21-84</a>
          </div>
          <div class="flex items-center gap-2">
            <img src="~/assets/icons/map.svg" alt="" />
            <a href=""
              >Россия, 353235,<br />
              Краснодарский край, Северский район, хутор Водокачка</a
            >
          </div>
        </div>
        <div class="h-[200px] sm:h-[500px]  rounded-3xl overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ae277f22b8478c1aa76da9012e5e9eec6d47c6c96908d39b378eb5da26c7547&amp;source=constructor"
            width="100%"
            height="500"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <s-form />
    </div>
  </div>
</template>

<script>
import h3Title from './h3-title.vue'
import SForm from './s-form.vue'
export default {
  components: { h3Title, SForm },
  
}
</script>

<style></style>
