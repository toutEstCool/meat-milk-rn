import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/auth-provider';
import { LogBox } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
        <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs()


