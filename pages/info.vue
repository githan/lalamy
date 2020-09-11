<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container>
        <v-tabs
          v-model="tab"
          background-color="secondary"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tab
            v-for="(item, index) in ytinfo.items"
            :key="index"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(item, index) in ytinfo.items"
            :key="index"
          >
            <v-card flat>
              <v-card-text>{{ item.title }}</v-card-text>
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="(yid, idx) in item.id"
                    :key="idx"
                    cols="12"
                    justify="center"
                    align="center"
                  >
                    <div class="video-container">
                      <youtube :video-id="yid" />
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { infoStore, commonsStore } from '~/store'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  tab:any = null

  get siteJpFlg () {
    return commonsStore.siteJpFlg
  }

  get ytinfo () {
    return infoStore.ytinfo
  }

  async fetch () {
    await infoStore.getYtinfo()
  }
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
.video-container {
    overflow: hidden;
    position: relative;
    width:100%;
}

.video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.video-container iframe {
    width: 100%;
    height: 100%;
}
</style>
