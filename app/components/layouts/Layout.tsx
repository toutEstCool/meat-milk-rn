import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React, { FC } from 'react'


interface ILayout {
  children: React.ReactNode
  isScrollView?: boolean
}
export const globalStyle = StyleSheet.create({
  styleCenter: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  }
})

const Layout: FC<ILayout> = ({ children, isScrollView = true}) => {

  return (
    <SafeAreaView>
      <View style={globalStyle.styleCenter}> 
        {
          isScrollView ? 
          <ScrollView>{children}</ScrollView>
          : children
        }
      </View>
    </SafeAreaView>
  )
}

export default Layout