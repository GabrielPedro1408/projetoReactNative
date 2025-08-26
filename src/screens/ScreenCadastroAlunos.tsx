import { addDoc, collection } from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView, Alert } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";

export function ScreenCadastroAluno() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [turma, setTurma] = useState('')
    const nomeInputRef = useRef<TextInput>(null);

    const cadastrar = async() => {
        try {
            if(!nome.trim() || !numero.trim() || !turma.trim()){
                alert("Preencha o campo com um nome de um aluno")
            }
            else{
                const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
                await addDoc(collection(FIRESTORE_DB, "Alunos"), {
                Nome: nomeFormatado,
                Numero: numero,
                Turma: turma
                });
                setNome('');
                setNumero('');
                setTurma('');
                nomeInputRef.current?.focus();
                Alert.alert("SUCESSO","Dados cadastrados com sucesso",[
                    {
                        text: "Sair",
                        onPress: () => console.log('Cancel Pressed'),
                        style:'cancel',
                    },
                    {
                        text: "Ok",
                        onPress: () => console.log('OK Pressed')
                    }
                ]);
            }
        } catch (error) {
            alert("Deu Bosta " + error)
        }
    };
    return(
        <SafeAreaView style={styles.body}>
            <View style={styles.form}>
                <View style={styles.formstyle}>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                        ref={nomeInputRef}
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder='Ex: Gabriel dos Santos'
                        placeholderTextColor={"#480885ff"}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Número:</Text>
                        <TextInput
                        style={styles.input}
                        value={numero}
                        onChangeText={setNumero}
                        placeholder="Ex: 10"
                        placeholderTextColor={"#480885ff"}
                        keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Turma:</Text>
                        <TextInput
                        style={styles.input}
                        value={turma}
                        onChangeText={setTurma}
                        placeholder="Ex: 3º INFO A"
                        placeholderTextColor={"#480885ff"}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                        color={"#480885ff"}
                        title="Cadastrar"
                        onPress={cadastrar}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
    body:{
        flex:1,
        backgroundColor:'#ffffffff',
        padding:15
    },

    form:{
        flex:3,
        bottom:30,
        marginVertical:'auto',
        padding:8,
        justifyContent:'center',
    },

    formstyle:{
        backgroundColor:'#ffffffff',
        paddingBottom:30,
        borderRadius:15,
        padding:12,
        elevation:4,
        
    },

    formItem:{
        margin:8,
    },

    label:{
        fontWeight:300,
        fontSize: 18,
        marginBottom: 2,
        color:"#000000ff",
        
    },

    input:{
        height: 40,
        marginTop: 6,
        borderWidth: 1,
        padding: 10,
        borderColor: '#480885ff',
        borderRadius: 5,
        fontWeight:100
    },

    button:{
        paddingHorizontal:8,
        marginTop:15
    }

});