<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-card
            max-width="450"
            flat
            class="LalaMyContainer"
          >
            <v-container fluid>
              <h1 v-if="error.statusCode === 404">
                {{ pageNotFound }}
              </h1>
              <h1 v-else>
                {{ otherError }}
              </h1>
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </v-container>
          </v-card>
        </v-row>
      </v-container>
    </v-content>>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '페이지가 없습니다.',
      otherError: '오류가 발생하였습니다'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
