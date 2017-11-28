import trae from 'trae'
import configService from './config'

const musifyService = trae.create({
  baseUrl: configService.apiUrl
})

export default musifyService
