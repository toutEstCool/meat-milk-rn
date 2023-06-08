import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import Space from '../../../ui/space/Space'
import Avatar from '../../../ui/avatar/Avatar'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useProfile } from '../../../../hooks/useProfile'
import Loader from '../../../ui/loader/Loader'

const Header: FC = () => {
  const { navigate } = useNavigation()
  const { isLoading, name } = useProfile()

  return isLoading ? (<Loader />) : (
    <Space>
      <Avatar name={name}/>
      <TouchableOpacity 
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigate('Profile')}
      >
        <Text style={styles.nameText}>{name}</Text>
        <Entypo name='chevron-small-right' size={28} style={styles.arrowEntypo} />
      </TouchableOpacity>
    </Space>
  )
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    color: 'rgb(31 41 55)',
    fontWeight: 'bold',
  },
  arrowEntypo: {
    color: 'rgb(31 41 55)'
  }
})

export default Header