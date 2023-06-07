import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import Profile from "../components/screens/profile/Profile";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        { user ? 
        (<>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Payments" component={Home}></Stack.Screen>
        <Stack.Screen name="Services" component={Home}></Stack.Screen>
        <Stack.Screen name="Support" component={Home}></Stack.Screen>
        <Stack.Screen name="More" component={Home}></Stack.Screen>
        
        </>) : (<Stack.Screen name="Auth" component={Auth}></Stack.Screen> )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
