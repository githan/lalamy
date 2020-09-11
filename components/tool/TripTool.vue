<template>
  <v-container>
    <div>
      <v-chip
        class="ma-0"
        color="primary"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>fa-suitcase-rolling</v-icon>
        </v-avatar>
        여행 / 숙박
      </v-chip>
    </div>
    <v-row justify="start" class="my-3">
      <v-col v-for="(item, index) in items" :key="index" cols="3">
        <v-card
          :href="item.link"
          target="_blank"
          flat
        >
          <v-row justify="center" align="center">
            <v-img
              :src="item.logo"
              aspect-ratio="1"
              width="50"
              height="50"
              max-width="70"
              max-height="70"
              contain
            />
          </v-row>
          <p class="pb-0 caption text-center">
            {{ item.title }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Triptool extends Vue {
  items: any[] = [
    {
      logo: require('@/assets/images/tripcom_logo.png'),
      title: '트립닷컴',
      link: 'https://trip.com'
    },
    {
      logo: require('@/assets/images/bookingcom_logo.png'),
      title: '부킹닷컴',
      link: 'http://www.booking.com/'
    },
    {
      logo: require('@/assets/images/expedia_logo.png'),
      title: '익스피디아',
      link: 'https://www.expedia.co.kr/'
    },
    {
      logo: require('@/assets/images/airbnb_logo.png'),
      title: '에어비앤비',
      link: 'https://www.airbnb.co.kr/'
    },
    {
      logo: require('@/assets/images/agoda_logo.png'),
      title: '아고다',
      link: 'https://www.agoda.com/'
    },
    {
      logo: require('@/assets/images/gocar_logo.png'),
      title: '고카',
      link: 'https://hi.gocar.my/'
    },
    {
      logo: require('@/assets/images/airasia_logo.png'),
      title: '에어아시아',
      link: 'https://www.airasia.com/'
    },
    {
      logo: require('@/assets/images/koreaair_logo.png'),
      title: '대한항공',
      link: 'https://www.koreanair.com/'
    }
  ]
}
</script>
