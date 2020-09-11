<template>
  <v-row justify="center" align="center">
    <v-col cols="12" justify="center" align="center">
      COVID-19 主な検査病院リスト
    </v-col>
    <v-col v-for="(item, index) in items" :key="index" cols="12">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="item.image"
        >
          <v-card-title>{{ item.name }}</v-card-title>
          <v-chip
            class="ma-2 LocationChip"
            color="primary"
          >
            <v-icon left>
              fa-map-marker-alt
            </v-icon>
            {{ item.location }}
          </v-chip>
        </v-img>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle class="pb-0">
          {{ item.kname }}
        </v-card-subtitle>
        <v-card-text class="text--primary mt-3">
          <div class="mb-3">
            住所 :
            <a :href="item.map" target="_blank">
              {{ item.address }}
            </a>
          </div>
          <div>
            連絡先 :
            <a :href="`tel:${item.tel}`">
              {{ item.tel }}
            </a>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            :href="item.link"
            target="_blank"
            color="accent"
            outlined
            block
          >
            <v-icon left>
              fa-external-link-square-alt
            </v-icon> 詳しくはこちら
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TopBanner extends Vue {
  items: any[] = [
    {
      image: require('@/assets/images/hospital/kualalumpur.jpg'),
      name: 'Kuala Lumpur Hospital',
      kname: 'クアラルンプール病院',
      location: 'クアラルンプール',
      address: '23, Jalan Pahang, 50586 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
      map: 'https://www.google.co.jp/maps/place/Hospital+Kuala+Lumpur/@3.1715251,101.70181,15z/data=!4m5!3m4!1s0x0:0x46fc8dd0d036613c!8m2!3d3.1715251!4d101.70181',
      tel: '03-2615-5555',
      link: 'http://www.hkl.gov.my/'
    },
    {
      image: require('@/assets/images/hospital/parkcitymc.jpg'),
      name: 'ParkCity Medical Centre',
      kname: 'パークシティメディカルセンター',
      location: 'クアラルンプール',
      address: 'No. 2, Jalan Inti Sari Perdana, Desa ParkCity, 52200 Kuala Lumpur, Malaysia',
      map: 'https://www.google.com/maps/@3.19023,101.635499,15z',
      tel: '03-5639-1212',
      link: 'https://www.ramsaysimedarby.com/hospitals/pmc/'
    },
    {
      image: require('@/assets/images/hospital/putrajaya.jpg'),
      name: 'Putrajaya Hospital',
      kname: 'プトラジャヤ公立病院',
      location: 'プトラジャヤ',
      address: 'Jalan P9, Presint 7, 62250 Putrajaya, Wilayah Persekutuan Putrajaya',
      map: 'https://www.google.com/maps/place/Putrajaya+Hospital/@2.9290529,101.6741956,15z/data=!4m2!3m1!1s0x0:0x4535a9c1df4bb9a5?sa=X&ved=2ahUKEwjh8Y6QlPboAhWoy4sBHfLGBiwQ_BIwDXoECA8QCA',
      tel: '03-8312-4200',
      link: 'http://www.hpj.gov.my/portalv11/index.php/en'
    },
    {
      image: require('@/assets/images/hospital/melaka.jpg'),
      name: 'Melaka General Hospital',
      kname: 'マラッカ公立病院',
      location: 'マラッカ',
      address: 'Jalan Mufti Haji Khalil, 75400 Melaka',
      map: 'https://www.google.co.jp/maps/place/Malacca+Hospital/@2.2189908,102.2615374,15z/data=!4m2!3m1!1s0x0:0x27e0cc2279cc745f?sa=X&hl=ko&ved=2ahUKEwjKkaXGjvboAhWHMd4KHZRKCBQQ_BIwCnoECBkQCA',
      tel: '06-289-2344',
      link: 'https://en.wikipedia.org/wiki/Melaka_General_Hospital'
    },
    {
      image: require('@/assets/images/penanggeneral_ho.jpg'),
      name: 'Penang General Hospital',
      kname: '페낭 조지타운 국립병원',
      location: '페낭',
      address: 'Jalan Residensi, 10990 George Town, Pulau Pinang',
      map: 'https://www.google.com/maps/place/Penang+General+Hospital/@5.4170514,100.3114489,15z/data=!4m2!3m1!1s0x0:0xa381d352fd842b5f?sa=X&hl=ko&ved=2ahUKEwjPgrqvnPHoAhVDM94KHdmnCfsQ_BIwCnoECBgQCA',
      tel: '04-222-5333',
      link: 'http://jknpenang.moh.gov.my/jknpenang/index.php/my/agensi/hospital/hospital-pulau-pinang'
    },
    {
      image: require('@/assets/images/seberangjaya_ho.jpg'),
      name: 'Hospital Seberang Jaya',
      kname: '세베랑 자야 국립병원',
      location: '페낭',
      address: 'Jalan Tun Hussein Onn, Seberang Jaya, 13700 Permatang Pauh, Pulau Pinang',
      map: 'https://www.google.co.jp/maps/place/Hospital+Seberang+Jaya,+Jalan+Tun+Hussein+Onn,+Seberang+Jaya,+13700+Permatang+Pauh,+Pulau+Pinang/@5.3952006,100.4066766,15z/data=!4m2!3m1!1s0x304ac5da15b86f23:0xc40095b41a8887f7',
      tel: '04-382-7333',
      link: 'https://jknpenang.moh.gov.my/'
    },
    {
      image: require('@/assets/images/bukitmertajam_ho.jpg'),
      name: 'Bukit​ Mertajam Hospital',
      kname: '부킷 머르따잠 국립병원',
      location: '페낭',
      address: 'Jalan Kulim, 14000 Bukit Mertajam, Pulau Pinang',
      map: 'https://www.google.co.jp/maps/place/Bukit%E2%80%8B+Mertajam+Hospital,+Jalan+Kulim,+14000+Bukit+Mertajam,+Pulau+Pinang/@5.3593459,100.4640656,15z/data=!4m2!3m1!1s0x304ac8ecf3131f0d:0xb98e136db0ac623e?hl=ko',
      tel: '04-549-7333',
      link: 'https://jknpenang.moh.gov.my/jknpenang/index.php/my/agensi/hospital/hospital-bukit-mertajam'
    },
    {
      image: require('@/assets/images/hospital/segamat.jpg'),
      name: 'Segamat Hospital',
      kname: '세가마트 국립병원',
      location: '조호르바루',
      address: '6, Jalan Genuang, Bandar Putra, 85000 Segamat, Johor',
      map: 'https://www.google.co.jp/maps/place/Segamat+Hospital/@2.493269,102.8590631,15z/data=!4m5!3m4!1s0x0:0x598a142c07f7c1e0!8m2!3d2.493269!4d102.8590631',
      tel: '07-943-3333',
      link: 'http://hsgm.moh.gov.my/v3/'
    },
    {
      image: require('@/assets/images/hospital/sultanismail.jpg'),
      name: 'Sultan Ismail Hospital',
      kname: '술탄 이스마일 국립병원',
      location: '조호르바루',
      address: 'Jalan Mutiara Emas Utama, Taman Mount Austin, 81100 Johor Bahru, Johor',
      map: 'https://www.google.co.jp/maps/place/Sultan+Ismail+Hospital/@1.5467109,103.790894,15z/data=!4m2!3m1!1s0x0:0xbee9b4f720a6fc8?sa=X&ved=2ahUKEwiWwOrG__XoAhXJAYgKHWpVD7oQ_BIwE3oECBkQCA',
      tel: '07-356-5000',
      link: 'http://hsi.moh.gov.my/'
    },
    {
      image: require('@/assets/images/sultanabdul_ho.jpg'),
      name: 'Sultan Abdul Halim Hospital',
      kname: '술탄 압둘 할임 국립병원',
      location: '케다',
      address: 'Jalan Lencongan Timur, Bandar Amanjaya, 08000 Sungai Petani, Kedah',
      map: 'https://www.google.com/maps/place/Sungai+Petani+Hospital/@5.6695817,100.5174146,15z/data=!4m2!3m1!1s0x0:0x24b8cc91054ca208?sa=X&hl=ko&ved=2ahUKEwiw1f2rmvHoAhUBCqYKHV08A2UQ_BIwCnoECBgQCA',
      tel: '04-445-7333',
      link: 'https://hsah.moh.gov.my/v2/'
    },
    {
      image: require('@/assets/images/sultanah_ho.jpg'),
      name: 'Hospital Sultanah Bahiyah',
      kname: '술타나 바히야 국립병원',
      location: '케다',
      address: 'Km 6, Jalan Langgar, Bandar Alor Setar, 05460 Alor Setar, Kedah',
      map: 'https://www.google.com/maps/place/Hospital+Sultanah+Bahiyah/@6.1505616,100.4063252,15z/data=!4m2!3m1!1s0x0:0x9d1c566c4ca23a5b?sa=X&ved=2ahUKEwiF86eflfHoAhXFUt4KHXHDDWUQ_BIwCnoECBMQCA',
      tel: '04-740-6233',
      link: 'http://hsbas.moh.gov.my/v3/'
    },
    {
      image: require('@/assets/images/langkawi_ho.jpg'),
      name: 'Langkawi Hospital',
      kname: '랑카위 국립병원',
      location: '케다',
      address: 'Jalan Bukit, 07000 Langkawi, Kedah',
      map: 'https://www.google.com/maps/place/Langkawi+Hospital/@6.3247688,99.7984415,15z/data=!4m2!3m1!1s0x0:0x788dc09da53f3597?sa=X&ved=2ahUKEwjA0rDOlvHoAhUQHXAKHWGVAgMQ_BIwCnoECBQQCA',
      tel: '04-966-3333',
      link: 'https://hlangkawi.moh.gov.my/v4'
    },
    {
      image: require('@/assets/images/kangar_ho.jpg'),
      name: 'Kangar Hospital',
      kname: '캉가 국립병원',
      location: '페를리스',
      address: '3, Jalan Tun Abdul Razak, Pusat Bandar Kangar, 01000 Kangar, Perlis',
      map: 'https://www.google.com/maps/place/Kangar+Hospital/@6.4410639,100.1913452,15z/data=!4m5!3m4!1s0x0:0x7d8dc70e3c26d6a1!8m2!3d6.4410639!4d100.1913452',
      tel: '04-973-8000',
      link: 'http://htf.moh.gov.my/v4/'
    }
  ]
}
</script>

<style>
.CboardBox {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}
.LocationChip {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
