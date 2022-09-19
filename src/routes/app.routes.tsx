// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ListPatients } from '../pages/ListPatients';
// import { Profile } from '../pages/Profile';
// import { ProfilePatient } from '../pages/ProfilePatient';
// import { EditPatient } from '../pages/ProfilePatient/EditPatient';
// import { RegisterPatient } from '../pages/ProfilePatient/RegisterPatient';
// import { Register } from '../pages/Register';
// import { RegisterRemedie } from '../pages/RegisterRemedie';
// import { SignIn } from '../pages/SignIn';
// import { Welcome } from '../pages/Welcome';
// import { TabBar } from './tab.routes';
// import colors from '../utils/colors';
// import { Home } from '../pages/Home';

// const Stack = createNativeStackNavigator();

// export default function AppRoutes() {

//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerTintColor: colors.grey,
//                 headerTitleAlign: 'center',
//                 headerTitleStyle: {
//                     fontSize: 20,
//                     // fontFamily: 'Nunito_600SemiBold',
//                     fontFamily: 'Nunito_700Bold',
//                 },
//             }} >
//             <Stack.Screen
//                 name="Welcome"
//                 component={Welcome}
//                 options={{
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="SignIn"
//                 component={SignIn}
//                 options={{
//                     title: 'Login',
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="Register"
//                 component={Register}
//                 options={{
//                     title: 'Cadastro',
//                     headerShown: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="Home"
//                 component={TabBar}
//                 options={{
//                     title: 'Home',
//                     headerShown: true,
//                     headerBackVisible: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="RegisterPatient"
//                 component={RegisterPatient}
//                 options={{
//                     title: 'Cadastro de paciente',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="ListPatients"
//                 component={ListPatients}
//                 options={{
//                     title: 'Lista dos pacientes',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     title: 'Meu perfil',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="ProfilePatient"
//                 component={ProfilePatient}
//                 options={{
//                     title: 'Perfil do paciente',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="RegisterRemedie"
//                 component={RegisterRemedie}
//                 options={{
//                     title: 'Cadastro de medicamento',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//             <Stack.Screen
//                 name="EditPatient"
//                 component={EditPatient}
//                 options={{
//                     title: 'Editar perfil',
//                     headerShown: true,
//                     headerBackVisible: true,
//                 }}
//             />
//         </Stack.Navigator>
//     )
// }