const path = {
  home: '/',
  login: '/login',
  loginG: '/login/google',
  loginO: '/login/oauth',
  register: '/register',
  error: '/error',
  purchase: '/purchase',
  matchTable: '/match-table',
  verification: '/verification',
  aboutPage: '/about-page',
  // clubs: '/clubs',
  clbDetail: '/clubs/:idClb', // Đường dẫn với tham số idClb
  tournaments: '/tournaments',
  tournamentDetail: '/tournaments/:idTournament', // Đường dẫn với tham số idTournament
  manageTournaments: '/manage-tournaments',
  manageTournamentDetail: '/manage-tournaments/:idTournament', // Đường dẫn với tham số idTournament
  // listOfPlayerRequest: '/list-player-requests',
  tournamentPlayers: '/tournament-players',
  createBranch: 'create-branch',
  createTournament: 'create-tournament',
  editTournament: '/edit-tournament/:id',
  loading: 'loading',
};

export default path;
