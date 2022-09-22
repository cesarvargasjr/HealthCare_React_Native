import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListPatients } from '../pages/ListPatients';
import { ProfileUser } from '../pages/ProfileUser';
import { ProfilePatient } from '../pages/ProfilePatient';
import { EditPatient } from '../pages/ProfilePatient/EditPatient';
import { RegisterPatient } from '../pages/ProfilePatient/RegisterPatient';
import { RegisterUser } from '../pages/RegisterUser';
import { RegisterDrug } from '../pages/RegisterDrug';
import { SignIn } from '../pages/SignIn';
import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import colors from '../utils/colors';
import { AllSchedules } from '../pages/AllSchedules';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.grey,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                },
                // headerStyle: {
                //     backgroundColor: colors.purple,
                // }
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
                name="RegisterUser"
                component={RegisterUser}
                options={{
                    title: 'Cadastro',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Health Care',
                    headerShown: true,
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen
                name="RegisterPatient"
                component={RegisterPatient}
                options={{
                    title: 'Cadastro de paciente',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="ListPatients"
                component={ListPatients}
                options={{
                    title: 'Lista dos pacientes',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="ProfileUser"
                component={ProfileUser}
                options={{
                    title: 'Meu perfil',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="ProfilePatient"
                component={ProfilePatient}
                options={{
                    title: 'Perfil do paciente',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="RegisterDrug"
                component={RegisterDrug}
                options={{
                    title: 'Cadastro de medicamento',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="EditPatient"
                component={EditPatient}
                options={{
                    title: 'Editar perfil (Paciente)',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="AllSchedules"
                component={AllSchedules}
                options={{
                    title: 'Atendimentos (Próximas 24h)',
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
        </Stack.Navigator>
    )
}