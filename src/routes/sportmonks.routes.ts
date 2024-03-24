import express from 'express'
import { getAllMatchesController, getMatchByIdController, getPredictionsController } from '~/controllers/sportmonks.controllers'

export default (router: express.Router) => {
  router.get('/all-matches', getAllMatchesController)
  router.get('/match/:id', getMatchByIdController)
  router.get('/predictions', getPredictionsController)
}
