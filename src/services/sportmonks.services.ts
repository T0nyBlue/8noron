import axios, { AxiosResponse } from 'axios'
import { Fixture, FixtureResponse, Lineup } from '~/models/sportmonks.models'

export const getAllMatches = async (date: string, isLive: boolean): Promise<FixtureResponse> => {
  try {
    const response: AxiosResponse<FixtureResponse> = await axios.get<FixtureResponse>(
      `https://api.sportmonks.com/v3/football/${
        isLive ? 'livescores/inplay' : `fixtures/date/${date}`
      }?include=league;participants;events;state&api_token=${process.env.SPORTMONKS_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en'
        }
      }
    )
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getMatchById = async (id: number): Promise<Fixture> => {
  try {
    const response: AxiosResponse<Fixture> = await axios.get<Fixture>(
      `https://api.sportmonks.com/v3/football/fixtures/${id}?include=league;participants;events;state&api_token=${process.env.SPORTMONKS_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en'
        }
      }
    )
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getPredictions = async (): Promise<FixtureResponse> => {
  try {
    const response: AxiosResponse<FixtureResponse> = await axios.get<FixtureResponse>(
      `https://api.sportmonks.com/v3/football/fixtures/?include=participants;predictions&api_token=${process.env.SPORTMONKS_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en'
        }
      }
    )
    return Promise.resolve(response.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
