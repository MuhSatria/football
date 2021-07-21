<template>
  <div class="section-area">
    <Navbar :name="title" />
    <v-container class="my-py-0 custom-container">
      <v-list>
        <v-list-item
          v-for="(area, index_area) in data"
          :key="index_area"
          @click="toDetail(data[index_area].id)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ data[index_area].parentArea }} - {{ data[index_area].name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import CallApiLibrary from '@/lib/callApiLibrary'

export default {
  mixins: [
    CallApiLibrary
  ],
  data () {
    return {
      title: 'Area List',
      selectedItem: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', to: '1' },
        { text: 'Audience', icon: 'mdi-account', to: '2' },
        { text: 'Conversions', icon: 'mdi-flag', to: '3' }
      ],
      options: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      data: []
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  created () {
    this.getData()
  },
  methods: {
    toDetail (id) {
      this.$router.push('/list/area/' + id)
    },
    getData () {
      this.callApiGet('v2/areas/', (responseData) => {
        this.data = responseData.areas
      }, (responseData) => {
      }, (responseData) => {
      }, true, true)
    }
  }
}
</script>
