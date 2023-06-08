import React from 'react'
import { useProfile } from '../../../hooks/useProfile'
import Layout from '../../layouts/Layout'
import { Heading } from '../../ui/heading/Heading'
import Space from '../../ui/space/Space'
import Loader from '../../ui/loader/Loader'
import Field from '../../ui/field/Field'
import Button from '../../ui/button/Button'
import { useAuth } from '../../../hooks/useAuth'
import { StyleSheet, Text, View } from 'react-native'
import { useUpdateProfile } from '../../../hooks/useUpdateProfile'

const Profile = () => {
  const { logout } = useAuth()
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile()
  const { isLoading, updateProfile, isSuccess } = useUpdateProfile(name, profile.docId)

  return (
    <Layout>
      <Heading text='Кароо'/>
      <Space>
        {
          isSuccess && (
            <View style={styles.updateSuccessWrapper}>
              <Text style={styles.updateSuccessText}>Профиль Жаңыртылды</Text>
            </View>
          )
        }
        {
          (isProfileLoading || isLoading) ? (<Loader />) : (<View style={{
            width: '100%'
          }}>
            <Field onChange={setName} val={name} placeholder='Атын териңиз'/>
            <Button onPress={updateProfile} title='Профилди жаңыртуу'/>
            <Button onPress={logout} title='Чыгуу' colors={['#000000', '#fffff']}/>
          </View>)
        }
      </Space>
    </Layout>
  )
}

const styles = StyleSheet.create({
  updateSuccessWrapper: {
    position: 'absolute',
    zIndex: 100,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#6bd0ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    left: 15,
    right: 11,
    top: -40
  },
  updateSuccessText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Profile