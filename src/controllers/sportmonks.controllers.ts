import express, { Request, Response } from 'express'
import { getAllMatches, getMatchById, getPredictions } from '../services/sportmonks.services'
import { Fixture, FixtureResponse, Lineup } from '~/models/sportmonks.models'

export const getAllMatchesController = async (req: Request, res: Response) => {
  try {
    const fixtures: FixtureResponse = await getAllMatches(req.query.date as string, req.query.isLive === 'true')
    res.status(200).send(fixtures)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getMatchByIdController = async (req: Request, res: Response) => {
  try {
    const fixture: Fixture = await getMatchById(Number(req.params.id))
    res.status(200).send(fixture)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getPredictionsController = async (req: Request, res: Response) => {
  try {
    const predictions: FixtureResponse = await getPredictions()
    res.status(200).send(predictions)
  } catch (error) {
    res.status(500).send(error)
  }
}