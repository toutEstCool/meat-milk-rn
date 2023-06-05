import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
interface IButton {
  onPress: () => void
  title: string
  colors?: [string, string]
}
const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ['background-color: rgb(253 224 71)', '#fbbf24']
}) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress} underlayColor={colors[1]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(253 224 71)',
    color: 'rgb(31 41 55)',
    borderRadius: 12,
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 12,
    paddingBottom: 12
  },
  buttonText: {
    textAlign: 'center'
  }
})

export default Button