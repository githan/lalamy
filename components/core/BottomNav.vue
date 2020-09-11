<template>
  <v-bottom-navigation
    height="60"
  >
    <v-btn
      v-for="item in bitems"
      :key="item.title"
      nuxt
      :to.sync="item.link"
    >
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { commonsStore } from '~/store'

@Component
export default class BottomNav extends Vue {
  bitems:any[] = [
    { title: '바로가기', icon: 'fa-th-large', link: '/' },
    { title: '말유정보', icon: 'fab fa-youtube', link: '/info' },
    { title: '커뮤니티', icon: 'fa-comment-alt', link: '/board' },
    { title: '코로나', icon: 'fa-angry', link: '/corona' }
  ]

  get siteJpFlg () {
    return commonsStore.siteJpFlg
  }

  mounted () {
    if (this.siteJpFlg) {
      this.bitems = [
        { title: 'ツール', icon: 'fa-th-large', link: '/tool' },
        { title: 'ホーム', icon: 'fa-home', link: '/' },
        { title: 'コミュニティー', icon: 'fa-comment-alt', link: '/board' }
      ]
    }
  }
}
</script>
