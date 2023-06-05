import { AuthProvider } from './app/providers/auth-provider';
import Navigation from './app/navigation/navigation';
import { LogBox } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
        <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs()


