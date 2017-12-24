import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About',
    subtitle: 'Search, Listen, Explore 🎵',
    description: 'Musitime is a digital music streaming service that gives you access to millions of songs, podcasts and videos from artists all over the world. This is thanks to the API of Spotify',
    searchEngine: 'Search Songs or Artist'
  },

  es: {
    search: 'Buscar',
    about: 'Nosotros',
    subtitle: 'Busca, Escucha, Explora 🎵',
    description: 'Escucha tu música favorita, descubre nuevas canciones y arma tu colección personal. Musitime tiene acceso a millones de canciones, podcasts y videos de artistas de todo el mundo. Esto es posible gracias a la API de Spotify',
    searchEngine: 'Buscar Canción o Artista'
  }
}

const i18n = new Vuei18n({
  messages,
  locale: 'en'
})

export default i18n
