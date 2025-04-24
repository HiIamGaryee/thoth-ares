import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // <div className="min-h-screen bg-background retro-grid">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    // </div>
  );
}

export default App;
