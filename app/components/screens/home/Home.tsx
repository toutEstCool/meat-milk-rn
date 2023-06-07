import { View, Text } from 'react-native'
import React from 'react'
import Header from './header/Header'
import Layout from '../../layouts/Layout'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Text>Home</Text>
    </Layout>
  )
}

export default Home