<template>
  <div class="h-full flex flex-col gap-14 container mt-24 pt-12">
    <div v-if="news" class="flex flex-col gap-12">
      <div >
        <span class="flex gap-1 text-gray-500">
          <nuxt-link to="/">Главная</nuxt-link> /
          <nuxt-link to="/news">Новости</nuxt-link> /
          <span>{{ getNew.attributes.Name }}</span>
        </span>
      </div>
      <span class="font-['Oranienbaum'] text-4xl ">{{ getNew.attributes.Name }}</span>
      <div class="mt-8">
        <p class="font-normal"
          v-html="
            getNew.attributes.Desc.replaceAll(
              '/uploads',
              'http://localhost:1337/uploads'
            )
          "
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import ID_NEWS from '~/gql/ID_NEWS.gql'
export default {
  components: {},
  layout: 'main',
  computed: {
    getNew () {
      return this.news.data[0]
    }
  },
  apollo: {
    news: {
      query: ID_NEWS,
      variables () {
        return {
          ID: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style></style>
