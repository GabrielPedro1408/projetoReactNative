import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const ScreenRelacaoAlunos = ({navigation}: RouterProps) =>{

    return(
        <View>
            <Button onPress={() => navigation.navigate('ScreenFaltasAlunos')} title="Falta de Alunos"/>
            <Button onPress={() => navigation.navigate('ScreenCadastroAlunos')} title="Cadastro de Alunos"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin:30,
        marginTop:50,
    },
});

export default ScreenRelacaoAlunos