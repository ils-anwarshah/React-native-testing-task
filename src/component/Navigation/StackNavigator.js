import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Register from '../Register';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { forFade } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import Quates from '../quatesPage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen options={{ title:'Login Page', headerTintColor:'orange',} } name="login" component={Login} />
        <Stack.Screen name="register" component={Register} options={{title:'Back',headerTintColor:'orange'}}/>
        <Stack.Screen name='home'component={Quates} options={{title:'Home Page',headerBackVisible:false,headerTintColor:'orange',headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  )
}