<template>
  <div class="pt-40 container px-3">
    <div class="mb-6">
      <span
        >Общество с ограниченной ответственностью <br /><br />
        «Феликс Групп»<br />
        ИНН 2311165908 <br />
        КПП 231101001<br />
        ОГРН 1132311014890<br />
        350044, г. Краснодар, <br />
        ул. им. Калинина, д. 13, корп. 59<br /><br />

        ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" г. Москва<br />
        р/с 40702810001500145188<br />
        К/с 30101810845250000999<br />
        БИК: 044525999<br /><br />

        e-mail: ketchup2022@bk.ru
      </span>
    </div>
    <div class="flex flex-col gap-12">
      <div
        class="container w-full flex justify-center items-center flex-col gap-4"
      >
        <h-3-title :title="'Контакты / Обратная связь'" />
        <span class="flex items-center gap-2"
          ><img src="~/assets/icons/Arrow_right-red.svg" alt="" /> Обратный
          звонок</span
        >
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-[8fr,4fr] gap-6">
        <div
          class=" h-full p-6 rounded-3xl bg-white grid grid-cols-1 gap-6 drop-shadow-2xl"
        >
          <span class="font-['Oranienbaum'] text-4xl"> Наши контакты</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
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
          <div class="h-[300px] sm:h-[500px]  rounded-3xl overflow-hidden">
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
