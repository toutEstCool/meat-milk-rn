import { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import Space from "../space/Space";

export const Heading: FC<{text: string }> = ({ text }) => {
  return (
    <Space>
        <Text style={{
          fontWeight: '700',
          fontSize: 24,
          color: 'rgb(31 41 55)',
          marginLeft: '38%',
          marginTop: 20,
          marginBottom: 10
        }}>{text}</Text>
    </Space>
  )
}