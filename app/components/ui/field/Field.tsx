import { StyleSheet, TextInput } from 'react-native'
import React, { FC } from 'react'

interface IField {
  onChange: (val: string) => void
  val: string
  placeholder: string
  isSecure?: boolean 
}

const Field: FC<IField> = ({ onChange, val, placeholder, isSecure }) => {
  return (
    <TextInput
      showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize='none'
      style={style.textInput}
    />
  )
}

const style = StyleSheet.create({
  textInput: {
    borderRadius: 12,
    backgroundColor: 'rgb(243 244 246)',
    marginTop: 12,
    padding: 12,
    width: '100%'
  }
})

export default Field