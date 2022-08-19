import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { SignIn } from '../pages/SignIn';
import { Welcome } from '../pages/Welcome';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.grey,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                },
            }} >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    title: 'Login',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Cadastro',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: true,
                    headerBackVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}