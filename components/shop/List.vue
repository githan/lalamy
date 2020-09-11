<template>
  <v-row justify="start" align="start">
    <v-col v-for="(item, index) in items" :key="index" cols="12">
      <v-card
        class="mx-auto"
        max-width="100%"
      >
        <v-img
          v-if="item.image"
          class="white--text align-end"
          height="200px"
          :src="item.image"
        >
          <v-card-title>{{ item.name }}</v-card-title>
          <v-chip
            class="ma-2 LocationChip"
            color="success"
          >
            <v-icon left>
              fa-map-marker-alt
            </v-icon>
            {{ item.location }}
          </v-chip>
        </v-img>
        <v-card-title>
          <v-icon left>
            fa-store
          </v-icon> {{ item.name }}
        </v-card-title>
        <v-card-subtitle class="pb-0">{{ item.description }}</v-card-subtitle>

        <v-card-text class="text--primary mt-3">
          <div class="mb-3">
            주소 :
            <a :href="item.map" target="_blank">
              {{ item.address }}
            </a>
          </div>
          <div>
            연락처 :
            <a :href="`tel:${item.tel}`">
              {{ item.tel }}
            </a>
          </div>
        </v-card-text>

        <v-card-actions v-if="item.link">
          <v-btn
            color="accent"
            outlined
            block
            :href="item.link"
            target="_blank"
          >
            <v-icon left>
              fa-pepper-hot
            </v-icon> 자세히 보기
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
      name: '중화요리 전문점 불도장',
      description: '안녕하세요 중화요리 전문점 불도장 입니다.',
      tel: '03-6201-3201',
      location: '쿠알라룸푸르',
      address: '16, Jalan 24/70a, Desa Sri Hartamas, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
      map: 'https://www.google.co.jp/maps/place/%EB%B6%88%EB%8F%84%EC%9E%A5/@3.16336,101.6511001,15z/data=!4m2!3m1!1s0x0:0xa102ed67f476d246?sa=X&hl=ko&ved=2ahUKEwi0x5ipiIHpAhXXFIgKHdmfBC4Q_BIwE3oECBgQCA',
      image: require('@/assets/images/shop/buldojang.jpg'),
      link: ''
    },
    {
      name: '호도야(Hodoya)',
      description: '호두과자는 냉동실에 보관하시면 한 달 이상 보관이 가능 합니다. (냉장고 냄새 방지를 위해서 지퍼백을 이용하세요.)',
      tel: '010-926-0163',
      location: '쿠알라룸푸르',
      address: '50450 Wilayah Persekutuan Kuala Lumpur, Kuala Lumpur, LG1 27B 163, Jalan Perak',
      map: 'https://www.google.com/maps/place/Hodoya/@3.1668,101.6521125,15z/data=!4m5!3m4!1s0x0:0x4c19fc644194086!8m2!3d3.1668!4d101.6521125',
      image: require('@/assets/images/shop/hodoya.jpg'),
      link: ''
    },
    {
      name: '암팡 예스 치킨 (Yes Chicken)',
      description: '암팡 예스 치킨 전메뉴 배달합니다 메뉴 사진 첨부 합니다 추전메뉴 3종 안동 찜닭.동태전골 (수제비 반죽 서비스)*.병어 김치찜 강추',
      tel: '03-4253-1514',
      location: '쿠알라룸푸르',
      address: 'Ampang Putra Residency, 5-L2, Jalan Ampang Putra, Taman Putra Sulaiman, Ampang, Selangor, 55100 Kuala Lumpur',
      map: 'https://www.google.com/maps/place/Yes+Chicken/@3.1505447,101.7513367,15z/data=!4m2!3m1!1s0x0:0xffcd7988acd7243a?sa=X&ved=2ahUKEwjgjq---_boAhWZbN4KHWKDBzIQ_BIwE3oECBYQCA',
      image: require('@/assets/images/shop/yeschicken.jpg'),
      link: ''
    },
    {
      name: '솔라리스 황해BBQ(Hwang Hae)',
      description: '솔라리스 황해 레스토랑입니다',
      tel: '03-6206-1370',
      location: '쿠알라룸푸르',
      address: '15, Jalan Solaris 2, Solaris Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
      map: 'https://www.google.co.jp/maps/place/Hwang+Hae/@3.1744672,101.6604779,15z/data=!4m5!3m4!1s0x0:0x80e0d7e81d7808d2!8m2!3d3.1744672!4d101.6604779',
      image: require('@/assets/images/shop/hwanghae.jpg'),
      link: 'https://www.facebook.com/pages/Hwang-Hae-Korean-Bbq-Soho-Kl/315630048587655'
    },
    {
      name: '김가네 대구막창',
      description: '안녕하세요 김가네 대구 막창 입니다',
      tel: '03-4265-5580',
      location: '쿠알라룸푸르',
      address: 'LOT C8 GROUND FLOOR, One Ampang Avenue, Jalan Ampang Utama 1/1, Taman Ampang Utama, 68000 Ampang, Selangor',
      map: 'https://www.google.co.jp/maps/place/%EA%B9%80%EA%B0%80%EB%84%A4+%EB%8C%80%EA%B5%AC%EB%A7%89%EC%B0%BD/@3.15522,101.751334,15z/data=!4m2!3m1!1s0x0:0x697faf7d7e64eff6?sa=X&hl=ko&ved=2ahUKEwjVwdS0joHpAhVXVN4KHR2ICRcQ_BIwE3oECBgQCA',
      image: require('@/assets/images/shop/kimganebbq.jpg'),
      link: 'https://www.facebook.com/pages/Hwang-Hae-Korean-Bbq-Soho-Kl/315630048587655'
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
