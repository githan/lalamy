<template>
  <v-row justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
      <v-icon left>
        fa-store
      </v-icon>말레이시아 한인음식점
    </v-col>
    <!-- <v-col cols="12" justify="center" align="center">
      <div class="HbBox pa-3">
        <a :href="boxLink1" target="_blank">
          <v-img :src="boxImg1" aspect-ratio="3" contain />
          <div>COVID-19 검사 할수 있는 곳을 찾아보십시오</div>
        </a>
      </div>
    </v-col> -->
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TopBanner extends Vue {
  boxImg1:string = require('@/assets/images/advanx_logo.png')
  boxLink1:string = 'https://findmytest.advanxhealth.com/'
}
</script>

<style>
.HbBox {
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
}
</style>
