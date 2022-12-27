<template>
  <div class="w-full flex flex-col gap-12">
    <div
      class="container w-full flex justify-center items-center flex-col gap-4"
    >
      <h-3-title :title="'Последние новости'" />
      <nuxt-link to="/news" class="flex items-center gap-2"
        ><img src="~/assets/icons/Arrow_right-red.svg" alt="" /> Смотреть все
        новости</nuxt-link
      >
    </div>
    <client-only placeholder="Загрузка...">
      <agile id="news" :options="allNews">
        <div
          v-for="(slide, i) in news.data"
          :key="slide.id"
          class="slide h-full "
        >
          <div class="h-full flex flex-col justify-center items-center">
            <img
              :src="
                `http://localhost:1337` +
                  slide.attributes.Photo.data.attributes.url
              "
              alt=""
              class="w-full max-h-[420px] object-cover rounded-lg overflow-hidden"
            />
            <div class="flex  justify-between w-full items-center mt-4  px-7">
              <div class="flex flex-col gap-2 items-start">
                <span class="text-[#242424]/50 text-sm">{{
                  new Date(slide.attributes.createdAt).toLocaleString(
                    'ru'
                  )
                }}</span>
                <span>{{ slide.attributes.Name }}</span>
              </div>
              <nuxt-link :to="`/news/` + slide.id">
                <img src="~/assets/icons/Group8730.svg" alt="" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </agile>
    </client-only>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import H3Title from './h3-title.vue'

let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
}

export default {
  components: {
    agile: VueAgile,
    H3Title
  },
  props: {
    news: Array
  },
  data () {
    return {
      allNews: {
        navButtons: false,
        centerMode: true,
        pauseOnHover: true,
        infinite: true,
        dots: true,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          }
        ]
      },
      news2: [
        {
          name: 'Сочные томаты1',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        },
        {
          name: 'Сочные томаты2',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        },
        {
          name: 'Сочные томаты3',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        },
        {
          name: 'Сочные томаты4',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        },
        {
          name: 'Сочные томаты5',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        },
        {
          name: 'Сочные томаты6',
          img: '/img/Rectangle44.jpg',
          date: '24.12.2022'
        }
      ]
    }
  }
}
</script>

<style>
#news .agile__dot {
  margin: 10px 8px;
}

#news .agile__actions {
  margin-top: 20px;
}

#news .agile__dot button {
  background-color: #f0c0bc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 6px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 6px;
}
#news .agile__dot--current button,
#news .agile__dot:hover button {
  background-color: #de4237;
  width: 10px;
  height: 10px;
}
</style>
