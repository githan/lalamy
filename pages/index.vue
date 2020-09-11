<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <life-tool />
        <shop-tool />
        <trip-tool />
        <telnet-tool />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LifeTool from '~/components/tool/LifeTool.vue'
import ShopTool from '~/components/tool/ShopTool.vue'
import TripTool from '~/components/tool/TripTool.vue'
import TelnetTool from '~/components/tool/TelnetTool.vue'

@Component({
  components: {
    LifeTool,
    ShopTool,
    TripTool,
    TelnetTool
  }
})
export default class Home extends Vue {
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
</style>
