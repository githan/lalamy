<template>
  <v-container>
    <div>
      <v-chip
        class="ma-0"
        color="primary"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>fa-wifi</v-icon>
        </v-avatar>
        통신 / 네트워크
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
export default class TelnetTool extends Vue {
  items: any[] = [
    {
      logo: require('@/assets/images/time_logo.png'),
      title: '타임',
      link: 'https://www.time.com.my/'
    },
    {
      logo: require('@/assets/images/maxis_logo.png'),
      title: '맥시스',
      link: 'https://www.maxis.com.my/'
    },
    {
      logo: require('@/assets/images/hotlink_logo.png'),
      title: '핫링크',
      link: 'https://www.hotlink.com.my/'
    },
    {
      logo: require('@/assets/images/digi_logo.png'),
      title: '디기',
      link: 'https://www.digi.com.my/'
    }
  ]
}
</script>
