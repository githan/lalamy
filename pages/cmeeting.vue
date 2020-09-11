/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <social-sharing />
        <top-banner />
        <main-tool />
        <covid-board :items="boards" />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TopBanner from '~/components/home/TopBanner.vue'
import MainTool from '~/components/tool/MainTool.vue'
import CovidBoard from '~/components/board/CovidBoard.vue'
import SocialSharing from '~/components/core/SocialSharing.vue'
import { boardsStore } from '~/store'

@Component({
  components: {
    TopBanner,
    MainTool,
    CovidBoard,
    SocialSharing
  }
})
export default class Home extends Vue {
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
