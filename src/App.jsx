import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Medico from './pages/Medico';
import Usuario from './pages/Usuario';
import NewUser from './pages/NewUser';
import Admin from './pages/Admin';

function App() {
    return (

        <Routes>
            <Route path="/login/Login" element={<Login />} />
            <Route path="/Medico" element={<Medico />} />
            <Route path="/Usuario" element={<Usuario />} />
            <Route path="/NewUser" element={<NewUser />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>

    );
}

export default App;