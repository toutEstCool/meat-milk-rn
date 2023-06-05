import { View, ScrollView, StyleSheet } from 'react-native'
import React, { FC } from 'react'


interface ILayout {
  children: React.ReactElement
  isScrollView?: boolean
}
export const globalStyle = StyleSheet.create({
  styleCenter: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 30
  }
})

const Layout: FC<ILayout> = ({ children, isScrollView = true}) => {

  return (
    <View style={globalStyle.styleCenter}> 
      {
        isScrollView ? 
        <ScrollView>{children}</ScrollView>
        : children
      }
    </View>
  )
}

export default Layout