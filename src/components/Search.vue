<template lang="pug">
  main
    pm-notification(:class="{ 'is-success' : Object.keys(tracks).length !== 0, 'is-danger' : Object.keys(tracks).length === 0  }",
      v-show="showNotification")
      p(slot="body") {{ searchMessage }}


    pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          div.tile.field.has-addons
            input.input.is-medium.is-8(type="text",
              v-model="searchQuery" @keyup.enter="search")
            a.button.is-link.is-medium(@click="search") {{ $t('search') }}
      .container
        p
          small.tiny {{ $t('searchEngine') }} | {{ searchMessage }}

      .container.results
        .columns.is-multiline.is-gapless.is-centered
          .column.is-one-quarter-widescreen.is-4-tablet(v-for="t in tracks")
            pm-track(v-blur="t.preview_url", :class="{ 'is-active': t.id === selectedTrack }",
              :track="t", @select="setSelectedTrack")

</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      if (this.tracks.length !== 0) {
        return `${this.tracks.length} Results`
      } else {
        return `No matches found`
      }
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  },

  .is-active {
    border: 3px #23d160 solid;
  }

  .card {
    margin: 10px;
  }

  .tiny {
    margin-left: 5px;
    font-size: 14px;
  }
</style>
