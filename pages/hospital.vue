/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container v-if="siteJpFlg" fluid>
        <top-banner-jp />
        <list-jp />
      </v-container>
      <v-container v-else fluid>
        <top-banner />
        <list />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TopBanner from '~/components/hospital/TopBanner.vue'
import List from '~/components/hospital/List.vue'
import TopBannerJp from '~/components/hospital/jp/TopBanner.vue'
import ListJp from '~/components/hospital/jp/List.vue'
import { commonsStore } from '~/store'

@Component({
  components: {
    TopBanner,
    List,
    TopBannerJp,
    ListJp
  }
})
export default class Hospital extends Vue {
  get siteJpFlg () {
    return commonsStore.siteJpFlg
  }
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
</style>
