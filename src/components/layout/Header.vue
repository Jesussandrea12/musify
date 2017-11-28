<template lang="pug">
  section.hero.is-success
    .hero-head
      nav.navbar
        div.container
          div.navbar-brand
            a.navbar-item
              strong 📻 Musify
            span.navbar-burger.burger(@click="showNav = !showNav",
             v-bind:class="{ 'is-active' : showNav }")
              span
              span
              span
          #navbarMenuHeroA.navbar-menu(:class="{ 'is-active' : showNav }")
            div.navbar-end
              a.navbar-item(@click="selectLang('en')") US
              a.navbar-item(@click="selectLang('es')") ES
              router-link.navbar-item(:to="{ name: 'search' }") {{ $t('search') }}
              router-link.navbar-item(to="about") {{ $t('about') }}

    .hero-body
      .container.has-text-centered
        h1.title Musify
        h2.subtitle {{ $t('subtitle') }}

    .hero-foot
      pm-player.player
</template>

<script>
  import PmPlayer from '@/components/Player.vue'
  export default {
    components: { PmPlayer },

    data () {
      return {
        showNav: false
      }
    },

    methods: {
      selectLang (lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-right a {
    margin-left: 0.4em;

    &:first-child {
      margin-left: 0;
    }
  }
  .player {
    bottom: 0;
    position: fixed;
    z-index: 10;
  }
</style>
