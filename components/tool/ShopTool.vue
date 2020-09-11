<template>
  <v-container>
    <div>
      <v-chip
        class="ma-0"
        color="primary"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>fa-shopping-basket</v-icon>
        </v-avatar>
        쇼핑 / 음식
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
export default class ShopTool extends Vue {
  items: any[] = [
    {
      logo: require('@/assets/images/mape_logo.png'),
      title: '마패',
      link: 'https://play.google.com/store/apps/details?id=com.appsweb.appS201611245836c22b57710_584694de7daf1'
    },
    {
      logo: require('@/assets/images/shopee_logo.png'),
      title: '쇼피',
      link: 'https://shopee.com.my/'
    },
    {
      logo: require('@/assets/images/foodpanda_logo.png'),
      title: '푸드판다',
      link: 'https://www.foodpanda.my/'
    },
    {
      logo: require('@/assets/images/lazada_logo.png'),
      title: '라자다',
      link: 'https://www.lazada.com.my/'
    },
    {
      logo: require('@/assets/images/happyfresh_logo.png'),
      title: '해피프레쉬',
      link: 'https://www.happyfresh.my/'
    },
    {
      logo: require('@/assets/images/beepit_logo.png'),
      title: 'Beep',
      link: 'https://beepit.com/'
    }
  ]
}
</script>
