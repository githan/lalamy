<template>
  <v-row justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
      <v-alert
        border="top"
        colored-border
        icon="mdi-face"
        elevation="2"
        class="text-justify"
      >
        <P>바이러스에 감염되면 1일에서 14일 정도 잠복기를 거친 뒤에 증상이 나타날 수 있습니다. 코로나바이러스 감염증(코로나19)의 가장 일반적인 증상은 발열, 피로감, 마른기침입니다. 대부분(약 80%)은 특별한 치료 없이도 질환에서 회복합니다.</P>
        코로나19 의심증상 : 기침, 발열, 피로, 호흡 곤란(심한 경우)
      </v-alert>
    </v-col>
    <v-col cols="12" justify="center" align="center">
      <div class="HbBox pa-3">
        <a :href="boxLink1" target="_blank">
          <v-img :src="boxImg1" aspect-ratio="3" contain />
          <div>COVID-19 검사 할수 있는 곳을 찾아보십시오</div>
        </a>
      </div>
    </v-col>
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
