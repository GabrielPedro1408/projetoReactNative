import ScreenLogin from './src/screens/ScreenLogin';
import  ScreenRelacaoAlunos  from './src/screens/ScreenRelacaoAlunos';
import  ScreenFaltasAlunos  from './src/screens/ScreenFaltasAlunos';
import { ScreenCadastroAluno } from './src/screens/ScreenCadastroAlunos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { use, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="Relação de Alunos" component={ScreenRelacaoAlunos}/>
      <InsideStack.Screen name="Cadastro de Alunos" component={ScreenCadastroAluno}/>
      <InsideStack.Screen name="Falta de Alunos" component={ScreenFaltasAlunos}/>
    </InsideStack.Navigator>
  );
}
export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=> {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
       console.log('user', user);
       setUser(user);
    });
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? 
        (<Stack.Screen name="Relação de Alunos" component={InsideLayout} options={{headerShown : false}}/>) 
        : 
        (<Stack.Screen name="Tela de Login" component={ScreenLogin} options={{headerShown : false}}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}