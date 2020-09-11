<template>
  <v-app id="lalamy">
    <AppBar />
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
    <NavDrawer />
    <v-footer
      color="indigo"
      app
    >
      <BottomNav />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NavDrawer from '~/components/core/NavDrawer.vue'
import BottomNav from '~/components/core/BottomNav.vue'
import AppBar from '~/components/core/AppBar.vue'

@Component({
  components: {
    NavDrawer,
    BottomNav,
    AppBar
  }
})
export default class DefaultLayout extends Vue {}
</script>
