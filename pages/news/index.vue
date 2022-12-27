<template>
  <div class="h-full flex flex-col gap-14 container mt-24 pt-12">
    <h-3-title :title="'Все новости'" />
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6 px-4 sm:px-0" v-if="news">
      <div v-for="item in news.data" :key="item.id">
        <div class="h-full flex flex-col justify-center items-center">
          <img
            :src="
              $config.baseURL +
                item.attributes.Photo.data.attributes.url
            "
            alt=""
            class="w-full h-auto object-cover rounded-lg overflow-hidden"
          />
          <div class="flex  justify-between w-full items-center mt-4  px-7">
            <div class="flex flex-col gap-2 items-start">
              <span class="text-[#242424]/50 text-sm">{{
                new Date(item.attributes.createdAt).toLocaleString('ru')
              }}</span>
              <span>{{ item.attributes.Name }}</span>
            </div>
            <nuxt-link :to="`/news/` + item.id">
              <img src="~/assets/icons/Group8730.svg" alt="" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import h3Title from '~/components/h3-title.vue'
import ALL_NEWS from '~/gql/ALL_NEWS.gql'
export default {
  components: { h3Title },
  layout: 'main',
  apollo: {
    news: {
      query: ALL_NEWS
    }
  }
}
</script>

<style></style>
