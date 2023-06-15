import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from "./components/Navbar"
import { AuthProvider } from '@/context/Auth.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <Navbar/>
        <Routes/>
      </AuthProvider>
      </BrowserRouter> 
    </div>
  )
}

export default App
