import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/PrivateRouters/AuthContext";
import PrivateRoute from "./components/PrivateRouters/PrivateRouters";
import path from "./constants/path";
import Loading from './components/Loading/Loading';
// Lazy load components
const Home = React.lazy(() => import('./components/Pages/HomePage/HomePage'));
// const Purchase = React.lazy(() => import('./components/Pages/PersonalAccount/Purchase/Purchase'));
const MatchTable = React.lazy(() => import('./components/Pages/TournamentAdministration/MatchTable/MatchTable'));
const Verification = React.lazy(() => import('./components/Pages/TournamentAdministration/Verification/Verification'));
const Login = React.lazy(() => import('./components/Pages/Login/Login'));
const Error = React.lazy(() => import('./components/Pages/Error/Error'));
const AboutPage = React.lazy(() => import('./components/Pages/AboutPage/AboutPage'));
const ClbDetail = React.lazy(() => import('./components/Pages/ClbDetail/ClbDetail'));
const Tournaments = React.lazy(() => import('./components/Pages/Tournamets/Tournaments'));
const TournamentDetail = React.lazy(() => import('./components/Pages/TournamentDetail/TournamentDetail'));
const Register = React.lazy(() => import('./components/Pages/Register/Register'));
const Google = React.lazy(() => import('./components/Pages/Login/_components/Google'));
const LoginO = React.lazy(() => import('./components/Pages/Login/_components/LoginO'));
const ManageTournaments = React.lazy(() => import('./components/Pages/ManageTournament/ManageTournament'));
const TournamentPlayers = React.lazy(() => import('./components/Pages/ManageTournament/TournamentPlayers/TournamentPlayers'));
const ManageTournamentDetail = React.lazy(() => import('./components/Pages/ManageTournament/ManageTournamentDetail/ManageTournamentDetail'));
const CreateTournament = React.lazy(() => import('./components/Pages/TournamentAdministration/CreateTournament/CreateTournament'));
const CreateBranch = React.lazy(() => import('./components/Pages/TournamentAdministration/CreateBranch/CreateBranch'));
const EditTournament = React.lazy(() => import('./components/Pages/TournamentAdministration/EditTournament/EditTournament'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Public Routes */}            
            <Route path={path.home} element={<Home />} />
            <Route path={path.login} element={<Login />} />
            <Route path={path.loginG} element={<Google />} />
            <Route path={path.loginO} element={<LoginO />} />
            <Route path={path.register} element={<Register />} />
            <Route path={path.error} element={<Error />} />
            {/* <Route path={path.purchase} element={<Purchase />} /> */}
            <Route path={path.aboutPage} element={<AboutPage />} />
            <Route path={path.clbDetail} element={<ClbDetail />} />
            <Route path={path.tournaments} element={<Tournaments />} />
            <Route path={path.tournamentDetail} element={<TournamentDetail />} />
            
            {/* Club Routes */}
            <Route path={path.createTournament} element={<PrivateRoute element={<CreateTournament />} roles={['club']} />} />
            <Route path={path.editTournament} element={<PrivateRoute element={<EditTournament />} roles={['club']} />} />
            <Route path={path.createBranch} element={<PrivateRoute element={<CreateBranch />} roles={['club']} />} />
            <Route path={path.matchTable} element={<PrivateRoute element={<MatchTable />} roles={['club']} />} />
            <Route path={path.verification} element={<PrivateRoute element={<Verification />} roles={['club']} />} />
            <Route path={path.manageTournaments} element={<PrivateRoute element={<ManageTournaments />} roles={['club']} />} />
            <Route path={path.manageTournamentDetail} element={<PrivateRoute element={<ManageTournamentDetail />} roles={['club']} />} />
            <Route path={path.tournamentPlayers} element={<PrivateRoute element={<TournamentPlayers />} roles={['club']} />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
