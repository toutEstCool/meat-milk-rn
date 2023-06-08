import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'

interface ISpace {
  children: React.ReactNode
  style?: any
}
const Space: FC<ISpace> = ({ children, style }) => {
  return (
    <View style={{...styles.spaceWrapper, ...style}}>{children}</View>
  )
}

const styles = StyleSheet.create({
  spaceWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default Space