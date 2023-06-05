import { User, onAuthStateChanged } from "firebase/auth";
import { FC, createContext, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { register, login, logout, db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore"; 

interface IContext { 
  user: User | null
  isLoading: boolean
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
interface AuthProviderProps {
  children: React.ReactNode
}
export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState(false)

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const { user } = register(email, password)
      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name'
      })
    } catch (error: any) {
      Alert.alert('Ошибка регистрации/Каттоо катасы 👁️', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      login(email, password)
    } catch (error: any) {
      Alert.alert('Ошибка авторизации/Авторизация катасы 👁️', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logoutHandler = async () => {
    setIsLoading(true)
    try {
      await logout()
    } catch (error: any) {
      Alert.alert('Проблемы соединения/Туташуу маселелери 😕', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUser(user || null)
        setIsLoadingInitial(false)
      })
  )

  const value = useMemo(() => ({
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
    register: registerHandler
  }), [user, isLoading])
  return (<AuthContext.Provider value={value}>
    {!isLoadingInitial && children}
  </AuthContext.Provider>)
}