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
        <P>新型コロナウイルス感染症は、発熱（37.5℃以上）、喉の痛み、咳、痰などの風邪のような症状で終わる場合が多いとされていますが、なかには4日以上の経過後に高熱、胸部不快感、呼吸困難などが出現し、肺炎へ進展する事例もあります。</P>
        速やかに病院へ行くこと。
      </v-alert>
    </v-col>
    <v-col cols="12" justify="center" align="center">
      <div class="HbBox pa-3">
        <a :href="boxLink1" target="_blank">
          <v-img :src="boxImg1" aspect-ratio="3" contain />
          <div>COVID-19 検査場所</div>
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
