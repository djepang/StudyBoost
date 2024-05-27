import RegistrationForm from './RegistrationForm';
import Category3DGraphic from '../components/Category3DGraphic';
import GoogleAuth from '../components/GoogleAuth';
import './Login.css';

const Login = () => {
    const handleLogin = () => {
        console.log('Logged in successfully');
        window.location.href = "/home";
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <button onClick={handleLogin} className="login-btn">Login</button>
                <h2>Or</h2>
                <GoogleAuth />
                <h2>Register</h2>
                <RegistrationForm />
                <Category3DGraphic />
            </div>
        </div>
    );
};

export default Login;

