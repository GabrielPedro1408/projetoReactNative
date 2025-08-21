import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TelaCadastroAluno } from "../screens/ScreenCadastroAlunos";
import { TelaFaltasAlunos } from "../screens/ScreenFaltasAlunos";
import { TelaRelacaoAlunos } from "../screens/ScreenRelacaoAlunos";

const { Screen, Navigator } = createBottomTabNavigator();

export function Routes(){
    return(
        <Navigator>
            <Screen name="TelaCadastroAlunos" component={TelaCadastroAluno}/>
            <Screen name="TelaFaltasAlunos" component={TelaFaltasAlunos}/>
            <Screen name="TelaRelacaoAlunos" component={TelaRelacaoAlunos}/>
        </Navigator>
    );
}