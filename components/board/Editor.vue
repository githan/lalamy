<template>
  <div>
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :card-props="{ outlined: true}"
      placeholder="건전하고 유익한 게시글 부탁드립니다."
    />
  </div>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  Image,
  History
} from 'tiptap-vuetify'
import { boardsStore } from '~/store'

export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Image,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    content: ''
  }),
  watch: {
    content (val) {
      boardsStore.setContent(val)
    }
  }
}
</script>

<style scoped>
.tiptap-vuetify-editor__content {
  max-height: 200px;
}
</style>
