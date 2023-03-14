import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/home"
import { SecondScreen } from "../../screens/second"

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator