<template>
  <social-sharing
    url="https://lalamy-jp.web.app/"
    title="LaLaMy"
    description="ララマレーシア - マレーシアに滞在している日本人の情報共有"
    quote="ララマレーシア - マレーシアに滞在している日本人の情報共有"
    hashtags="lalamy,malaysia"
    twitter-user="lalamy"
    inline-template
  >
    <v-row justify="space-around" align="center">
      <network network="facebook">
        <i class="fab fa-facebook-square fa-lg" />
      </network>
      <network network="twitter">
        <i class="fab fa-twitter-square fa-lg" />
      </network>
      <network network="line">
        <i class="fab fa-line fa-lg" />
      </network>
      <network network="whatsapp">
        <i class="fab fa-whatsapp-square fa-lg" />
      </network>
    </v-row>
  </social-sharing>
</template>
