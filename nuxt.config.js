import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const SITE_NAME = 'LaLaMY'
let TITLE = `${SITE_NAME} - 말레이시아 한인분들을 위한 유용한 정보공유 사이트`
let DESCRIPTION =
  '라라말레이시아 - 말레이시아 한인분들을 위한 유용한 정보공유 사이트'
let KEYWORDS =
  'lalamy,말레이시아,코로나,말레이시아여행,말레이시아정보,말레이시아숙박,말레이시아한인,말레이시아커뮤니티,covid,corona'
let BASE_URL = 'https://lalamy-kr.web.app/'
const OGIMG_URL = '/static/icon.png'

if (process.env.PROJECT_JAPAN_SITE === 'true') {
  TITLE = `${SITE_NAME} - マレーシアで滞在する日本人コミュニティ`
  DESCRIPTION =
    'ラ・ラ・マレーシア - マレーシアで滞在する日本人コミュニティ'
  KEYWORDS =
    'lalamy,マレーシア,マレーシア移住,マレーシア旅行,マレーシア情報,マレーシア日本人,マレーシアコミュニティ,covid,corona'
  BASE_URL = 'https://lalamy-jp.web.app/'
}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    PROJECT_JAPAN_SITE: process.env.PROJECT_JAPAN_SITE
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: KEYWORDS,
        'xml:lang': 'ko',
        lang: 'ko'
      },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: TITLE },
      {
        hid: 'og:description',
        property: 'og:description',
        content: DESCRIPTION
      },
      { hid: 'og:image', property: 'og:image', content: OGIMG_URL },
      { property: 'fb:app_id', content: '2152963728327953' },
      { name: 'twitter:site', content: '@Fanglee_PR' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: DESCRIPTION
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: TITLE
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: OGIMG_URL
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#c6c6c6' },
  loadingIndicator: {
    name: '~/custom-locading-indicator.html',
    color: '#3B8070',
    background: 'white'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/filter',
    {
      src: '@/plugins/TiptapVuetify',
      mode: 'client'
    },
    {
      src: '@/plugins/plugin',
      mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-device-detect',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB19tfeH7vUV-GsCSd_BG24t0zaIWehvZE",
          authDomain: "lalamysite.firebaseapp.com",
          databaseURL: "https://lalamysite.firebaseio.com",
          projectId: "lalamysite",
          storageBucket: "lalamysite.appspot.com",
          messagingSenderId: "500615842030",
          appId: "1:500615842030:web:ccd7fb887c0245604a0bff",
          measurementId: "G-4G9K3HXM1Z"
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          analytics: true,
          messaging: true
        }
      }
    ]
  ],
  pwa: {
    manifest: {
      name: 'LaLaMy',
      lang: 'kr',
      gcm_sender_id: '500615842030'
    }
  },
  manifest: {
    gcm_sender_id: '500615842030'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#010066',
          accent: '#CC0001',
          secondary: '#FFCC00',
          info: '#3f51b5',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      },
      options: {
        customProperties: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
    /*
    ** You can extend webpack config here
    */
  },
  server: {
    host: '0.0.0.0' // デフォルト: localhost
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  router: {
    middleware: 'authenticated'
  }
}
