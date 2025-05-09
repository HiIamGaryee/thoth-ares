import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from "./components/Navbar"

function App() {
  return (
    // <div className="min-h-screen bg-background retro-grid">
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* This padding-top ensures content is pushed below the navbar */}
      <div className="pt-[80px]">
        <AppRoutes />
      </div>
    </div>
  </BrowserRouter>
    // </div>
  );
}

export default App;
