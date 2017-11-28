import musifyService from './musify'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return musifyService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return musifyService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
