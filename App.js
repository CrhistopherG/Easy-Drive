import { useState } from 'react';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ConfigurationScreen from './src/screens/ConfigurationScreen';
import VehiculosScreen from './src/screens/VehiculosScreen';
import AlertasScreen from './src/screens/AlertasScreen';

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
    return (
      <RegisterScreen
        goToLogin={() => setScreen('login')}
      />
    );
  }

  if (screen === 'home') {
    return (
      <HomeScreen
        user={user}
        navigate={setScreen}
      />
    );
  }

  if (screen === 'configuration') {
    return (
      <ConfigurationScreen
        user={user}
        navigate={setScreen}
      />
    );
  }

  if (screen === 'vehiculos') {
    return (
      <VehiculosScreen
        user={user}
        navigate={setScreen}
      />
    );
  }

  if (screen === 'simulador') {
    return (
      <SimuladorScreen
        user={user}
        navigate={setScreen}
      />
    );
  }

  if (screen === 'alertas') {
    return (
      <AlertasScreen
        user={user}
        navigate={setScreen}
      />
    );
  }

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