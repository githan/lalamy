
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <social-sharing />
        <top-banner v-if="!siteJpFlg" />
        <top-banner-jp v-if="siteJpFlg" />
        <main-tool />
        <covid-board :items="boards" />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TopBanner from '~/components/home/TopBanner.vue'
import TopBannerJp from '~/components/home/TopBannerJp.vue'
import MainTool from '~/components/tool/MainTool.vue'
import CovidBoard from '~/components/board/CovidBoard.vue'
import SocialSharing from '~/components/core/SocialSharing.vue'
import { boardsStore, commonsStore } from '~/store'

@Component({
  components: {
    TopBanner,
    TopBannerJp,
    MainTool,
    CovidBoard,
    SocialSharing
  }
})
export default class Home extends Vue {
  get siteJpFlg () {
    return commonsStore.siteJpFlg
  }

  get boards () {
    return boardsStore.getCovidBoards
  }

  async fetch () {
    await boardsStore.getBoards()
  }

  mounted () {
    const messaging = this.$fireMess
    messaging.requestPermission()
      .then(() => {
        return messaging.getToken()
      })
      .then((currentToken) => {
        if (currentToken) {
          // this.updateFcmToken(currentToken)
        }
      }).catch(() => {
        console.log('fcm error occurred.')
      })
  }

  updateFcmToken (token:string) {
    const fcm = {
      fcmToken: token,
      createdAt: this.$fireStoreObj.FieldValue.serverTimestamp()
    }
    this.$fireStore.collection('fcm').add(fcm)
  }
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
</style>
