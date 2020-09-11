<template>
  <v-row justify="end">
    <v-btn
      text
      color="white"
      @click="write"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
      글쓰기
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar fixed dark color="accent">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>글쓰기</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items class="py-3">
            <v-btn
              :disabled="loading"
              dark
              outlined
              @click="writeConfirm"
            >
              저장
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-title>
          <span class="headline">글쓰기</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="writer" label="글쓴이*" required />
          <v-text-field v-model="title" label="제목*" required />
          <Editor />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="confirmDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="title">{{ confirmText }}</v-card-title>
        <v-card-text v-if="!confirmError">
          - 건전하고 유익한 게시글 부탁드립니다
        </v-card-text>
        <v-card-actions v-if="confirmError">
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="confirmDialog = false"
          >
            확인
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            :disabled="loading"
            @click="confirmDialog = false"
          >
            취소
          </v-btn>
          <v-btn
            :loading="loading"
            color="green darken-1"
            text
            @click="submit"
          >
            저장
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Editor from '~/components/board/Editor.vue'
import { boardsStore, usersStore } from '~/store'
import Board from '~/models/Board'

@Component({
  components: {
    Editor
  }
})
export default class NewWrite extends Vue {
  @Prop({ type: String, required: true, default: '0' }) readonly category:any
  writer: string = '';
  title: string = '';
  dialog: boolean = false;
  confirmDialog: boolean = false;
  confirmError: boolean = false;
  loading: boolean = false;
  confirmText:string = '정말로 저장 하시겠습니까?'

  get editorContent () {
    return boardsStore.content
  }

  get isLogin () {
    return usersStore.isLogin
  }

  get userData () {
    return usersStore.users
  }

  mounted () {
    if (this.userData) {
      this.writer = this.userData.displayName
    }
  }

  write () {
    if (this.isLogin) {
      this.dialog = true
    } else {
      this.$router.push('/login')
    }
  }

  writeConfirm () {
    this.confirmDialog = true
    if (!this.writer || !this.title || !this.editorContent || !this.userData) {
      this.confirmError = true
      this.confirmText = '글쓰기 해주세요!'
    } else {
      this.confirmError = false
      this.confirmText = '정말로 저장 하시겠습니까?'
    }
  }

  async submit () {
    this.loading = true
    const board:Board = {
      id: '',
      uid: this.userData.uid,
      name: this.userData.displayName,
      writer: this.writer,
      title: this.title,
      body: this.editorContent,
      createdAt: this.$fireStoreObj.FieldValue.serverTimestamp(),
      category: this.category
    }
    try {
      await boardsStore.addBoard(board)
      await boardsStore.getBoards()
    } catch (e) {
      console.error('add board error', e)
    }
    this.confirmDialog = false
    this.dialog = false
    this.loading = false
  }
}
</script>
