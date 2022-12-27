<template>
  <div class="pt-40 container">
    <div>
        <span>ИНН.ОГРН</span>
    </div>
    <div class="flex flex-col gap-12">
      <div
        class="container w-full flex justify-center items-center flex-col gap-4"
      >
        <h-3-title :title="'Контакты / Обратная связь'" />
        <span class="flex items-center gap-2"
          ><img src="~/assets/icons/Arrow_right-red.svg" alt="" /> Обратный звонок</span
        >
      </div>
      <div class="w-full grid grid-cols-[8fr,4fr] gap-6">
      <div
        class=" h-full p-6 rounded-3xl bg-white grid grid-cols-1 gap-6 drop-shadow-2xl"
      >
        <span class="font-['Oranienbaum'] text-4xl"> Наши контакты</span>
        <div class="flex justify-start gap-8 items-center">
          <div class="flex items-center gap-2">
            <img src="~/assets/icons/phone.svg" alt="" />
            <a href="tel:89530722184">+7(953)072-21-84</a>
          </div>
          <div class="flex items-center gap-2">
            <img src="~/assets/icons/map.svg" alt="" />
            <a href=""
              >Россия, Самарская область, <br />
              г. Тольятти, Автозаводский р-н, Новый проезд, д. 3, оф. 95</a
            >
          </div>
        </div>
        <div class="h-[500px]  rounded-3xl overflow-hidden">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ae277f22b8478c1aa76da9012e5e9eec6d47c6c96908d39b378eb5da26c7547&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
        </div>
      </div>

      <s-form />
    </div>
    </div>
  </div>
</template>

<script>
import H3Title from '../components/h3-title.vue'
import sForm from '../components/s-form.vue'
export default {
  components: { sForm, H3Title },
  layout: 'main'
}
</script>

<style></style>
