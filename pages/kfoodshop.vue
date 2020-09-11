/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <top-banner />
        <list />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TopBanner from '~/components/shop/TopBanner.vue'
import List from '~/components/shop/List.vue'

@Component({
  components: {
    TopBanner,
    List
  }
})
export default class Hospital extends Vue {
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
</style>
