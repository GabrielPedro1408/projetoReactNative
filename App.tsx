import ScreenLogin from './src/screens/ScreenLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import { Route }  from './src/routes/Route';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=> {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
       setUser(user);
    });
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? 
        (<Stack.Screen name="Relação de Alunos" component={Route} options={{headerShown : false}}/>) 
        : 
        (<Stack.Screen name="Tela de Login" component={ScreenLogin} options={{headerShown : false}}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}