<template>
  <v-app-bar
    flat
    app
    height="80"
    :src="appbgImg"
  >
    <v-row class="ma-0">
      <n-link to="/" prefetch>
        <v-img
          :src="logoImg"
          aspect-ratio="1"
          width="50"
          height="50"
          max-width="70"
          max-height="70"
          contain
        />
      </n-link>
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { commonsStore } from '~/store'

@Component
export default class AppBar extends Vue {
  drawer:boolean = false
  logoImg:string = require('@/assets/images/logo.png')
  appbgImg:string = require('@/assets/images/appbar_bg.jpg')

  get storeDrawerFlg () {
    return commonsStore.navDrawerFlg
  }

  @Watch('drawer')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDrawerChanged (val: boolean, oldVal: boolean) {
    commonsStore.setNavDrawer(val)
  }

  @Watch('storeDrawerFlg')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onStoreDrawerFlgChanged (val: boolean, oldVal: boolean) {
    this.drawer = val
  }
}
</script>
