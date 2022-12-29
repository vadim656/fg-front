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
            v-model="form.product"
            id="message"
            rows="4"
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
        @click="getTeelegrammToMain"
        class="flex items-center gap-2 gradient text-white p-6 rounded-lg mt-12"
      >
        <img src="~/assets/icons/arrow-form.svg" alt="" />
        Оставить заявку
      </button>
      <span v-if="succes == true" class="mt-6"
        >Спасибо! Ваша заявка принята.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        org: '',
        product: '',
        phone: '',
        email: ''
      },
      errors: null,
      succes: false
    }
  },
  methods: {
    async getTeelegrammToMain () {
      const fullMessege =
        'Заявка с главной формы' +
        '\n' +
        'Телефон:  ' +
        this.form.phone +
        '\n' +
        'Имя: ' +
        this.form.name +
        '\n' +
        'Товар: ' +
        this.form.product +
        '\n' +
        'email: ' +
        this.form.email +
        '\n' +
        'Организация: ' +
        this.form.org
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
