import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { ScreenCadastroAluno } from "../screens/ScreenCadastroAlunos";
import {ScreenFaltasAlunos} from "../screens/ScreenFaltasAlunos";
import { ScreenRelacaoAlunos } from "../screens/ScreenRelacaoAlunos";
import { Button, View } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import {Ionicons} from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createBottomTabNavigator();

export function Route(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="Relacao de Alunos" 
                component={ScreenRelacaoAlunos} 
                options={{
                    headerRight: () => (
                    <View style={{marginRight:16}}>
                        <Button color={"#480885ff"} title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
                    </View>
                    ),
                    tabBarIcon: ({ size }) => (
                        <Ionicons name="home" color={"#480885ff"} size={size}/>
                    )
                    
                }}
                />
                <Stack.Screen name="Cadastro de Alunos"
                component={ScreenCadastroAluno}
                options={() => ({
                    headerRight: () => (
                    <View style={{marginRight:16}}>
                        <Button color={"#480885ff"} title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
                    </View>
                    ),
                    tabBarIcon: ({ size }) => (
                        <AntDesign name="plus" color={"#480885ff"} size={size}/>
                    )
                    
                })}
                />
                <Stack.Screen name="Faltas de Alunos" 
                component={ScreenFaltasAlunos}
                options={({ navigation }) => ({
                    headerRight: () => (
                    <View style={{marginRight:16}}>
                        <Button color={"#480885ff"} title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
                    </View>
                    ),
                    tabBarIcon: ({ size }) => (
                        <AntDesign name="user" color={"#480885ff"} size={size}/>
                    )
                    
                })}
                />
            </Stack.Navigator>
    );
}