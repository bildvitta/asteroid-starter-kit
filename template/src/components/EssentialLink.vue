<template>
  <q-item clickable :href="link" tag="a" target="_blank">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    caption: {
      default: '',
      type: String
    },

    icon: {
      default: '',
      type: String
    },

    link: {
      default: '#',
      type: String
    },

    title: {
      required: true,
      type: String
    },
  }
}
</script>
