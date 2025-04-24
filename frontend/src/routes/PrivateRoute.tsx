import { Navigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { connected } = useWallet();
  return connected ? children : <Navigate to="/" />;
};

export default PrivateRoute;
