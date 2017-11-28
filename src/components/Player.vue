<template lang="pug">
  div.hero-foot
    .content(v-if="track && track.album")
      .level.is-one-quarter.is-mobile
        p.level-item.has-text-centered.is-hidden-mobile
          img(:src="track.album.images[0].url")
        p.level-item.has-text-centered.is-hidden-mobile
          strong {{ track.name }}
          small [{{ track.duration_ms }}]
          p.level-item.has-text-centered.is-flex-mobile.is-centered
            audio(controls, autoplay, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 80px;
  }
  .hero-foot {
    width: 100%;
    background: #eee;
    padding: 5px;
    color: #333;
  }
</style>
