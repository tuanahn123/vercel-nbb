import http from '../utils/http'
const URL_GET_ALL_TABLE = 'table/all'
const URL_TABLE = 'table'
export const tableApi = {
  getAllTables(idTournament) {
    return http.get(`${URL_GET_ALL_TABLE}/${idTournament}`)
  },
  createTable(idTournament, ArrayTables) {
    return http.post(URL_TABLE, {
      id_tournament: idTournament,
      array_table: ArrayTables
    })
  },
  editTable(idTable, table) {
    return http.patch(`${URL_TABLE}/${idTable}`, table)
  }
}
