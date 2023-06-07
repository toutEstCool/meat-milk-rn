import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IAvatar {
  name?: string | null
  size?: 'small' | 'large' 
}
const Avatar: FC<IAvatar> = ({ name, size = 'small' }) => {

  return (
    <View style={styles.avatartWrapper}>
      <Text style={styles.avatarText}>{name?.slice(0, 1)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  avatartWrapper: {
    borderRadius: 100,
    backgroundColor: 'rgb(209 213 219)',
    width: 48,
    height: 48,
    marginRight: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  } 
})

export default Avatar