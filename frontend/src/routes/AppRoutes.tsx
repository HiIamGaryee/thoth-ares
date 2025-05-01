import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';
import FightPage from '../pages/FightPage';
import PrivateRoute from './PrivateRoute';
import FaqPage from '../pages/FaqPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="/frequently-asked-question" element={<FaqPage />} />

    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      }
    />
    <Route
      path="/wallet"
      element={
        <PrivateRoute>
          <WalletPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/fight"
      element={
        <PrivateRoute>
          <FightPage />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
