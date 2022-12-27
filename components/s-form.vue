<template>

  <div class=" flex flex-col gap-8">
        <div class="flex flex-col items-start gap-2">
          <span class="font-['Oranienbaum'] text-4xl">Оставьте заявку</span
          ><span>И мы с вами свяжемся!</span>
        </div>
        <div>
          <form action="" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2 flex flex-col gap-2">
              <label for="" class="text-sm">Ваше имя</label>
              <input type="text" placeholder="Иван" class="input-form" />
            </div>
            <div class="sm:col-span-1 flex flex-col gap-2">
              <label for="" class="text-sm">Организация</label>
              <input type="text" placeholder="ООО" class="input-form" />
            </div>
            <div class="sm:col-span-1 flex flex-col gap-2">
              <label for="" class="text-sm">Товар</label>
              <input type="text" placeholder="Соус" class="input-form" />
            </div>
            <div class="sm:col-span-2 flex flex-col gap-2">
              <label for="" class="text-sm">Телефон</label>
              <input type="text" placeholder="+7" class="input-form" />
            </div>
            <div class="sm:col-span-2 flex flex-col gap-2">
              <label for="" class="text-sm">Email</label>
              <input type="text" placeholder="email@email.ru" class="input-form" />
            </div>
          </form>
          <button class="flex items-center gap-2 gradient text-white p-6 rounded-lg mt-12">
            <img src="~/assets/icons/arrow-form.svg" alt="" />
            Оставить заявку
          </button>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>