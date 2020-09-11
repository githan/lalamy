<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar
      color="accent"
      dark
    >
      <v-toolbar-title>코로나-19 정보</v-toolbar-title>
      <v-spacer />
      <new-write />
    </v-toolbar>

    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-item
          :key="index"
          :to="`/board/detail/${item.id}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.createdAt | setDate }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import NewWrite from '~/components/board/NewWrite.vue'
@Component({
  components: {
    NewWrite
  }
})
export default class BoardList extends Vue {
  @Prop({ type: Object, required: true }) readonly items:any
}
</script>
