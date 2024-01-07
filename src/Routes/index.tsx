import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons } from "@expo/vector-icons"



import { Home } from "../pages/Home";
import { Done } from "../pages/Done";


const Tabs = createBottomTabNavigator();


export const AppRooutes = () => {
    return (
        <Tabs.Navigator
            initialRouteName="home"

            screenOptions={{
                tabBarActiveTintColor: '#fff',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#222',

                }
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" color="#fff" size={size} />
                        }
                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}
            />
            <Tabs.Screen
                name="Feito"
                component={Done}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="checkmark-done" color="#fff" size={size} />
                        }
                        return <Ionicons name='checkmark-done-outline' color={color} size={size} />
                    }
                }}

            />
        </Tabs.Navigator>
    )
}