import http from '../utils/http'
export const ALL_TOURNAMENT_BY_CLUB = 'tournament/tournaments/all'
export const ALL_TOURNAMENT_BY_USER = 'tournament'
export const HISTORY_USER = 'tournament/history-user'
export const PLAYER_IN_TOURNAMENT = 'tournament/players'
export const PUBLISH_TOURNAMENT = 'tournament/publish'
export const UNPUBLISH_TOURNAMENT = 'tournament/unPublish'
export const CHECK_ENOUGH_PLAYER = 'tournament/check-total-player'
export const START_TOURNAMENT_BY_CLUB = 'tournament/start'
export const ADD_PLAYER_DEMO_TO_TOURNAMENT = 'tournament/add-player-demo'
export const DELTE_PLAYER_DEMO_IN_TOURNAMENT = 'tournament/remove-player'
const tournamentApi = {
  getAllTournamentByCLubs() {
    return http.get(ALL_TOURNAMENT_BY_CLUB)
  },
  createTournamentByClubs(tournament) {
    return http.post(ALL_TOURNAMENT_BY_USER, tournament)
  },
  getAllTournamentByUSer() {
    return http.get(ALL_TOURNAMENT_BY_USER)
  },
  searchTournamentByUser(name, status) {
    return http.get(`${ALL_TOURNAMENT_BY_USER}?name=${name}&status=${status}`)
  },
  getTournamentById(id) {
    return http.get(`${ALL_TOURNAMENT_BY_USER}/${id}`)
  },
  getHistoryTournamentUser(id) {
    return http.get(`${HISTORY_USER}/${id}?modelType=Players_Demo`)
  },
  getAllPlayerInTournament(id) {
    return http.get(`${PLAYER_IN_TOURNAMENT}/${id}`)
  },
  publishTournamentByClub(id) {
    return http.post(`${PUBLISH_TOURNAMENT}/${id}`)
  },
  unPublishTournamentByClub(id) {
    return http.post(`${UNPUBLISH_TOURNAMENT}/${id}`)
  },
  checkEnoughPlayer(id) {
    return http.get(`${CHECK_ENOUGH_PLAYER}/${id}`)
  },
  startTournamentByClub(id) {
    return http.post(`${START_TOURNAMENT_BY_CLUB}/${id}?modelType=Players_Demo`)
  },
  addPlayerDemoToTournament(id, players) {
    return http.post(`${ADD_PLAYER_DEMO_TO_TOURNAMENT}/${id}`, { ArrayPlayers: players })
  },
  deletePlayerInTournament(idTournament, idPlayer) {
    return http.post(`${DELTE_PLAYER_DEMO_IN_TOURNAMENT}/${idTournament}`, { playerId: idPlayer })
  },
  editTournamemtByClubs(id, tournament) {
    return http.patch(`${ALL_TOURNAMENT_BY_USER}/${id}`, tournament)
  }
}
export default tournamentApi
