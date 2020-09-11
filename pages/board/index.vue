/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <community-board :items="boards" />
      </v-container>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CommunityBoard from '~/components/board/CommunityBoard.vue'
import { boardsStore } from '~/store'

@Component({
  components: {
    CommunityBoard
  }
})
export default class Board extends Vue {
  get boards () {
    return boardsStore.getCommunityBoards
  }

  async fetch () {
    await boardsStore.getBoards()
  }
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
</style>
