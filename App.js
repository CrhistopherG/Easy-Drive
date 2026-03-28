import { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [user, setUser] = useState(null);

  if (screen === 'login') {
    return (
      <LoginScreen
        goToRegister={() => setScreen('register')}
        goToHome={(userData) => {
          setUser(userData);
          setScreen('home');
        }}
      />
    );
  }

  if (screen === 'register') {
    return <RegisterScreen goToLogin={() => setScreen('login')} />;
  }

  if (screen === 'home') {
    return <HomeScreen user={user} />;
  }
}