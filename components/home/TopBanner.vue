<template>
  <v-row justify="center" align="center">
    <v-col cols="6" justify="center" align="center">
      <div class="CboardBox pa-3">
        <a :href="boxLink1" target="_blank">
          <v-img :src="boxImg1" aspect-ratio="6" contain />
          <div class="caption white--text">COVID-19 Dashboard</div>
        </a>
      </div>
    </v-col>
    <v-col cols="6" justify="center" align="center">
      <a :href="boxLink2" target="_blank">
        <v-img :src="boxImg2" aspect-ratio="6" contain />
        <div class="caption">COVID-19 Dashboard</div>
      </a>
    </v-col>
    <v-col cols="12" justify="center" align="center">
      <v-card
        class="mx-auto"
        to="/hospital"
      >
        <v-carousel
          cycle
          height="100"
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item,i) in hospitalitems"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
        <v-card-subtitle>
          병원정보(Hospital)
        </v-card-subtitle>
      </v-card>
    </v-col>
    <!-- <v-col cols="6" justify="center" align="center">
      <v-card
        class="mx-auto"
        to="/kfoodshop"
      >
        <v-carousel
          cycle
          height="50"
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item,i) in shopitems"
            :key="i"
            :src="item.src"
          />
        </v-carousel>
        <v-card-subtitle>
          <v-icon small>
            fa-store
          </v-icon> 한인식당
        </v-card-subtitle>
      </v-card>
    </v-col> -->
    <v-col cols="12" justify="center" align="center">
      <v-card
        class="mx-auto"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-4">주 말레이시아 대한민국 대사관</div>
            <v-list-item-title class="title red--text mb-1">
              긴급연락처
            </v-list-item-title>
            <v-list-item-subtitle>근무시간</v-list-item-subtitle>
            <v-list-item-title class="headline mb-1">
              <a href="tel:+60-3-4251-2336">
                <v-icon left>
                  fa-phone-square-alt
                </v-icon>+60-3-4251-2336
              </a>
            </v-list-item-title>
            <v-list-item-subtitle>사건사고전용(업무시간외)</v-list-item-subtitle>
            <v-list-item-title class="headline mb-1">
              <a href="tel:+60-17-623-8343">
                <v-icon left>
                  fa-mobile-alt
                </v-icon>+60-17-623-8343
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" justify="center" align="center">
      <div class="video-container">
        <youtube ref="youtube" video-id="DPQB51ki93A" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TopBanner extends Vue {
  boxImg1:string = require('@/assets/images/coronaboard_logo.png')
  boxLink1:string = 'https://coronaboard.kr/'
  boxImg2:string = require('@/assets/images/outbreak_logo.png')
  boxLink2:string = 'https://www.outbreak.my/'

  hospitalitems:any = [
    {
      src: require('@/assets/images/hospital/kualalumpur.jpg')
    },
    {
      src: require('@/assets/images/sultanah_ho.jpg')
    },
    {
      src: require('@/assets/images/hospital/putrajaya.jpg')
    },
    {
      src: require('@/assets/images/bukitmertajam_ho.jpg')
    }
  ]

  shopitems:any = [
    {
      src: require('@/assets/images/shop/buldojang.jpg')
    },
    {
      src: require('@/assets/images/shop/yeschicken.jpg')
    },
    {
      src: require('@/assets/images/shop/hodoya.jpg')
    },
    {
      src: require('@/assets/images/shop/hwanghae.jpg')
    }
  ]
}
</script>

<style>
.CboardBox {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}
.video-container {
    overflow: hidden;
    position: relative;
    width:100%;
}

.video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
