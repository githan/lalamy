<template>
  <v-container>
    <div>
      <v-chip
        class="ma-0"
        color="primary"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        라이프
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
export default class LifeTool extends Vue {
  items: any[] = [
    {
      logo: require('@/assets/images/mofa_logo.png'),
      title: '한국대사관',
      link: 'https://overseas.mofa.go.kr/my-ko/index.do'
    },
    {
      logo: require('@/assets/images/ksm_logo.png'),
      title: '한인회',
      link: 'https://www.mykorean.org/'
    },
    {
      logo: require('@/assets/images/gmmalaysia_logo.png'),
      title: '굿말',
      link: 'http://cafe.daum.net/GmMalaysia'
    },
    {
      logo: require('@/assets/images/mymal_logo.png'),
      title: '마이말',
      link: 'https://cafe.naver.com/mymalaysia'
    },
    {
      logo: require('@/assets/images/grab_logo.png'),
      title: '그랩',
      link: 'https://grab.onelink.me/2695613898?af_banner=true&pid=website&c=SG_Smart_banner&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DMAIN'
    },
    {
      logo: require('@/assets/images/whatsapp_logo.png'),
      title: '왓츠앱',
      link: 'https://whatsapp.com/dl'
    },
    {
      logo: require('@/assets/images/pos_logo.png'),
      title: 'POS',
      link: 'https://www.pos.com.my/'
    },
    {
      logo: require('@/assets/images/iproperty_logo.png'),
      title: 'iProperty',
      link: 'https://www.iproperty.com.my/'
    },
    {
      logo: require('@/assets/images/gtranslate_logo.png'),
      title: '구글번역',
      link: 'https://translate.google.com/'
    },
    {
      logo: require('@/assets/images/gmap_logo.png'),
      title: '구글맵',
      link: 'https://www.google.com/maps'
    },
    {
      logo: require('@/assets/images/maybank_logo.png'),
      title: 'Maybank',
      link: 'https://www.maybank2u.com.my/'
    }
  ]
}
</script>
