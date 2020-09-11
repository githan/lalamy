<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      align="center"
      justify="center"
    >
      <v-card
        max-width="300"
        flatclass="elevation-12"
        flat
      >
        <v-card-title class="title">
          로그인
        </v-card-title>
        <v-card-actions>
          <v-btn
            color="blue"
            dark
            outlined
            block
            large
            :loading="loading"
            @click="fbSignIn"
          >
            <v-icon left>
              fab fa-facebook
            </v-icon> Sign in with Facebook
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            color="red"
            dark
            outlined
            block
            large
            :loading="loading"
            @click="gSignIn"
          >
            <v-icon left>
              fab fa-google
            </v-icon> Sign in with Google
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-alert
      border="left"
      colored-border
      color="accent"
      elevation="2"
      class="ma-5"
    >
      로그인을 하시면 글쓰기가 가능합니다, 정보공유을 해주실 분은 로그인 부탁드립니다.
    </v-alert>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({ middleware: ['authcheck'] })
export default class Login extends Vue {
  loading:boolean = false

  gSignIn () {
    this.loading = true
    const provider = new this.$fireAuthObj.GoogleAuthProvider()
    this.$fireAuth.signInWithPopup(provider).then(() => {
      this.loading = false
      this.$router.push('/')
    }).catch((error) => {
      console.log(error.code)
      this.loading = false
    })
  }

  fbSignIn () {
    this.loading = true
    const provider = new this.$fireAuthObj.FacebookAuthProvider()
    this.$fireAuth.signInWithPopup(provider).then(() => {
      this.loading = false
      this.$router.push('/')
    }).catch((error) => {
      console.log(error.code)
      this.loading = false
    })
  }
}
</script>
