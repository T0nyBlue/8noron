export interface State {
  id: number
  state: string
  name: string
  short_name: string
  developer_name: string
}

export interface Event {
  id: number
  fixture_id: number
  period_id: number
  participant_id: number
  type_id: number
  section: string
  player_id: number
  related_player_id: number
  player_name: string
  related_player_name: string
  result?: string
  info?: string
  addition?: string
  minute: number
  extra_minute?: number
  injured?: boolean
  on_bench?: boolean
  coach_id?: number
  sub_type_id?: number
}

export interface Participant {
  id: number
  sport_id: number
  country_id: number
  venue_id: number
  gender: string
  name: string
  short_code?: string
  image_path: string
  founded: number
  type: string
  placeholder: boolean
  last_played_at: string
  meta: {
    location: string
    winner: boolean
    position?: string
  }
}

export interface League {
  id: number
  sport_id: number
  country_id: number
  name: string
  active: number
  short_code?: string
  image_path: string
  type: string
  sub_type: string
  last_played_at: string
  category: number
  has_jerseys?: boolean
}

export interface Statistic {
  id: number
  fixture_id: number
  type_id: number
  particaipant_id: number
  data: {
    value: number
  }
  location: string
}

export interface Timeline {
  id: number
  fixture_id: number
  period_id: number
  participant_id: number
  type_id: number
  section: string
  player_id: number
  related_player_id: number
  player_name: string
  related_player_name: string
  result?: string
  info?: string
  addition?: string
  minute: number
  extra_minute?: number
  injured?: boolean
  on_bench?: boolean
  coach_id?: number
  sub_type_id?: number
}

export interface Lineup {
  id: number
  sport_id: number
  fixture_id: number
  player_id: number
  team_id: number
  position_id: number
  formation_field?: string
  type_id: number
  formation_position: number
  player_name: string
  jersey_number: number
}

export interface Coach {
  id: number
  player_id: number
  sport_id: number
  country_id: number
  nationality_id: number
  city_id?: string
  comman_name: string
  firstname: string
  lastname: string
  name: string
  display_name: string
  image_path: string
  height: number
  weight: number
  date_of_birth: string
  gender: string
  meta: {
    fixture_id: number
    coach_id: number
    participant_id: number
  }
}

export interface Formation {
  id: number
  fixture_id: number
  participant_id: number
  formation: string
  location: string
}

export interface Prediction {
  id: number
  fixture_id: number
  user_id: number
  predictions: {
    yes: number
    no: number
    equal: number
  }
  type_id: number
}

export interface Fixture {
  id: number
  sport_id: number
  league_id: number
  season_id: number
  stage_id: number
  group_id?: number
  aggregate_id?: number
  state_id: number
  round_id?: number
  venue_id?: number
  name?: string
  starting_at?: string
  result_info?: string
  leg: string
  details?: string
  length?: number
  placeholder: boolean
  has_odds: boolean
  starting_at_timestamp: number
  leaguage: League
  participants: Participant[]
  events: Event[]
  state: State
  statistics: Statistic[]
  timeline: Timeline[]
  lineups: Lineup[]
  coaches: Coach[]
  formations: Formation[]
  predictions: Prediction[]
}

export interface FixtureResponse {
  data: Array<Fixture>
}
