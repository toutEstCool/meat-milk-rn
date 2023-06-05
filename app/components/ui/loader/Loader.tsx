import { ActivityIndicator, View } from 'react-native'
import { FC } from 'react'

const Loader: FC = () => {
  return (
    <View>
      <ActivityIndicator size='large' color='#3b82f6' animating={true}/>
    </View>
  )
}

export default Loader