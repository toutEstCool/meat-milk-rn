import { FC, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../../layouts/Layout";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/loader/Loader";
import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";

interface IData {
  email: string
  password: string
}

const Auth: FC = () => {
  const {isLoading, login, register} = useAuth();
  const [data, setData] = useState({} as IData);
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const {email, password} = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }
    setData({} as IData);
  };
  
  return (
    <View style={globalStyle.styleCenter}>
      <View style={styles.authContainer}>
        <View style={styles.authWrapper}>
          <Text style={styles.authTitle}>
            {isReg ? 'Каттоо' : 'Кирүү'}
          </Text>
          {isLoading ? (<Loader />) : (<>
          <Field val={data.email} placeholder="Жазыңыз email" onChange={val => setData({...data, email: val})}/>
          <Field isSecure={true} val={data.password} placeholder="Жазыңыз сырсөз" onChange={val => setData({...data, password: val}) }/>
          </>)
          }
          <Button onPress={authHandler} title='Алга'/>
          <Pressable onPress={() => setIsReg(!isReg)}>
            <Text style={styles.changeTextIsReg}>
              {isReg ? 'Кирүү' : 'Катталуу'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  authContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  authWrapper: {
    width: '75%'
  },
  authTitle: {
    textAlign: 'center',
    color: 'rgb(31 41 55)',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 8
  },
  changeTextIsReg: {
    color: 'color: rgb(31 41 55)',
    opacity: 0.3,
    textAlign: 'right',
    fontSize: 14
  }
})
export default Auth



  
