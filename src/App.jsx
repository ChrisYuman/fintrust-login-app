import './App.css';
import FinTrustLogin from './components/FinTrustLogin';
import logo from './assets/logo.png';

function App() {
    const handleLogin = (data) => {
        console.log('Login data:', data);
        alert(`Iniciando sesión con el usuario: ${data.user}`);
    };

    return (
        <div className="app-container">
            <div className="login-card">
                <img src={logo} alt="FinTrust Logo" className="logo" />
                <FinTrustLogin onLogin={handleLogin} />
            </div>
        </div>
    );
}

export default App;
