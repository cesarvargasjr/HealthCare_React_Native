// import React from 'react';
// import colors from '../utils/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home } from '../pages/Home';
// import { ListPatients } from '../pages/ListPatients';
// import { RegisterPatient } from '../pages/ProfilePatient/RegisterPatient';
// import { Profile } from '../pages/Profile';

// const Tab = createBottomTabNavigator();

// export function TabBar() {

//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 headerTitleAlign: 'center',
//                 headerTintColor: colors.grey,
//                 headerTitleStyle: {
//                     fontSize: 20,
//                     fontFamily: 'Nunito_700Bold',
//                 },
//                 tabBarLabelStyle: {
//                     fontSize: 11,
//                     letterSpacing: 0.4,
//                     color: colors.grey,
//                     // fontFamily: 'Nunito_400Regular',
//                     // textTransform: 'uppercase',
//                 },
//                 tabBarStyle: {
//                     backgroundColor: colors.white,
//                     paddingLeft: 25,
//                     paddingRight: 25,
//                     // borderTopLeftRadius: 50,
//                     // borderTopRightRadius: 50,
//                     borderTopColor: 'transparent',
//                     height: 70,
//                     borderRadius: 50,
//                     marginBottom: 20,
//                     marginLeft: 20,
//                     marginRight: 20,
//                 },
//                 tabBarHideOnKeyboard: true,
//                 tabBarShowLabel: false,
//                 tabBarActiveTintColor: colors.red,
//                 tabBarInactiveTintColor: colors.purple,
//             }}>
//             <Tab.Screen
//                 name="TabHome"
//                 component={Home}
//                 options={{
//                     headerShown: false,
//                     headerTitle: 'Home',
//                     // title: 'title',
//                     tabBarIcon: ({ size, color, focused }) => (
//                         <>
//                             <Icon name="home" size={25} color={colors.purple} />
//                         </>
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="TabPaciente"
//                 component={RegisterPatient}
//                 options={{
//                     headerShown: false,
//                     headerTitle: 'Adicionar paciente',
//                     // title: 'title',
//                     tabBarIcon: ({ size, color, focused }) => (
//                         <>
//                             <Icon name="plus-circle" size={45} color={colors.purple} />
//                         </>
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="TabListPacientes"
//                 component={ListPatients}
//                 options={{
//                     headerShown: false,
//                     headerTitle: 'Lista de pacientes',
//                     // title: 'title',
//                     tabBarIcon: ({ size, color, focused }) => (
//                         <>
//                             <Icon name="address-card" size={25} color={colors.purple} />
//                         </>
//                     ),
//                 }}
//             />
//             {/* <Tab.Screen
//                 name="TabMeuPerfil"
//                 component={Profile}
//                 options={{
//                     headerShown: false,
//                     // title: 'title',
//                     // headerTitle: '*****',
//                     tabBarIcon: ({ size, color, focused }) => (
//                         <>
//                             <Icon name="user-o" size={25} color={colors.purple} />
//                         </>
//                     )
//                 }}
//             /> */}
//         </Tab.Navigator>
//     );
// }
