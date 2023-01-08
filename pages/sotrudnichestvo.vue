<template>
  <div class="my-20 pt-20 container px-4">
      <div v-if="sotrudnichestvo" v-html="dataSotr"></div>
      <span v-else>Загрузка...</span>
  </div>
</template>

<script>
import SOTR from '../gql/SOTR.gql'
export default {
  layout: 'main',
  apollo: {
    sotrudnichestvo: {
      query: SOTR
    }
   
  },
  computed: {
      dataSotr() {
          const data = this.sotrudnichestvo.data.attributes.Text
          const dataFilter = data.replaceAll('/uploads', 'http://admin.felix-good.ru/uploads')
          return dataFilter
      }
  },
}
</script>

<style></style>
