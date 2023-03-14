import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation()

    const openSecondScreen = () => {
        navigation.navigate("Second")
    }

    return (
        <View>
            <Text>This is the home screen!</Text>
            <Button title="Go to Second" onPress={openSecondScreen} />
        </View>
    )
}

export default HomeScreen