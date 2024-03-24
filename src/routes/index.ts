import express from 'express'
import sportmonksRoutes from './sportmonks.routes'

const router = express.Router()

export default (): express.Router => {
  sportmonksRoutes(router)
  return router
}
