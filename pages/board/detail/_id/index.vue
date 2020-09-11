/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <v-row justify="center" align="center">
    <v-card
      max-width="450"
      flat
      class="LalaMyContainer"
    >
      <v-container fluid>
        <div class="font-weight-bold title">{{ board.title }}</div>
        <v-row justify="center" align="center">
          <v-col cols="6">
            <div>{{ board.createdAt | setDate }}</div>
          </v-col>
          <v-col cols="6" justify="end">
            <div v-if="deleteBtnShow" class="float-right">
              <v-btn depressed small color="error" @click="deleteConfirm">
                글삭제
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <div class="my-3"><v-divider /></div>
        <div class="BoardBody" v-html="board.body" />
      </v-container>
    </v-card>
    <v-dialog
      v-model="confirmDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="title">
          글삭제
        </v-card-title>
        <v-card-text>
          - 정말로 삭제 하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="confirmDialog = false"
          >
            취소
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteBtn"
          >
            삭제
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { boardsStore, usersStore } from '~/store'

@Component({
  validate ({ params }) {
    return /^[0-9a-zA-Z]+$/.test(params.id)
  }
})
export default class Board extends Vue {
  title:string = ''
  deleteBtnShow:boolean = false
  confirmDialog: boolean = false;

  get board () {
    return boardsStore.board
  }

  get userData () {
    return usersStore.users
  }

  async fetch () {
    await boardsStore.getBoard(this.$route.params.id)
  }

  deleteConfirm () {
    this.confirmDialog = true
  }

  async deleteBtn () {
    try {
      await boardsStore.deleteBoard(this.$route.params.id)
    } catch (e) {
      console.error('board delete error', e)
    }
    this.confirmDialog = false
    if (this.board.category === '1') {
      this.$router.push('/board')
    }
  }

  mounted () {
    if (this.userData.uid === this.board.uid) {
      this.deleteBtnShow = true
    }
  }
}
</script>

<style>
.LalaMyContainer {
  width: 100%;
  margin-bottom: 70px;
}
.BoardBody {
  overflow: hidden;
}
</style>
