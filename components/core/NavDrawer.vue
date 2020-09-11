<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    right
  >
    <v-system-bar color="accent" />
    <v-row v-if="avatar" justify="center" align="center">
      <v-col cols="12" justify="center" align="center">
        <v-avatar size="70">
          <img
            :src="avatar"
          >
        </v-avatar>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <div>{{ name }}</div>
      </v-col>
    </v-row>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn v-if="isLogin" block @click="signOut">
          <v-icon left>
            fas fa-unlock
          </v-icon>
          Logout
        </v-btn>
        <v-btn v-else to="/login" block>
          <v-icon left>
            fas fa-lock
          </v-icon>
          Login
        </v-btn>
      </div>
      <div class="pa-4">
        <social-sharing />
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import { commonsStore, usersStore } from '~/store'
import User from '~/models/User'
import SocialSharing from '~/components/core/SocialSharing.vue'

@Component({
  components: {
    SocialSharing
  }
})
export default class NavDrawer extends Vue {
  name:string = ''
  avatar:string = ''
  drawer:boolean = false
  items:any[] = [
    { title: '홈', icon: 'fa-home', link: '/' },
    { title: '바로가기', icon: 'fa-th-large', link: '/tool' },
    { title: '커뮤니티', icon: 'fa-comment-alt', link: '/board' },
    { title: '말유정보', icon: 'fab fa-youtube', link: '/info' },
    { title: 'TERMS & CONDITIONS', icon: 'fa-list-alt', link: '/terms' },
    { title: 'PRIVACY POLICY', icon: 'fa-user-shield', link: '/privacy' }
  ]

  get siteJpFlg () {
    return commonsStore.siteJpFlg
  }

  get storeDrawerFlg () {
    return commonsStore.navDrawerFlg
  }

  get isLogin () {
    return usersStore.isLogin
  }

  get userData () {
    return usersStore.users
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

  @Watch('userData')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onUserDataChanged (val: User) {
    if (val) {
      this.name = val.displayName
      this.avatar = val.photoURL
    }
  }

  async signOut () {
    await this.$fireAuth.signOut()
    this.drawer = false
  }

  mounted () {
    if (this.userData) {
      this.name = this.userData.displayName
      this.avatar = this.userData.photoURL
    }

    if (this.siteJpFlg) {
      this.items = [
        { title: 'ホーム', icon: 'fa-home', link: '/' },
        { title: 'ツール', icon: 'fa-th-large', link: '/tool' },
        { title: 'コミュニティー', icon: 'fa-comment-alt', link: '/board' },
        { title: 'TERMS & CONDITIONS', icon: 'fa-list-alt', link: '/terms' },
        { title: 'PRIVACY POLICY', icon: 'fa-user-shield', link: '/privacy' }
      ]
    }
  }
}
</script>
