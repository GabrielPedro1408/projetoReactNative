import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, Image, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../firebaseConfig"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

const ScreenLogin = () => {

        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [loading , setloading] = useState(false);
        const auth = FIREBASE_AUTH;

        const signIn = async () =>{
            setloading(true);
            try {
                const response = await signInWithEmailAndPassword(auth, email, senha);
                console.log(response);
            } catch (error) {
                console.log(error);
                alert('dados não cadastrados no b.d' + error)
            }
            finally{
                setloading(false);
            }
        }
        const signUp= async () =>{
            setloading(true);
            try {
                const response = await createUserWithEmailAndPassword(auth, email, senha);
                console.log(response);
                alert('Confira seu Email!')
            } catch (error:any) {
                console.log(error);
                alert('Criação não deu certo'+ error.message)
            }
            finally{
                setloading(false);
            }
        }
    return(
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                    <Text style={styles.textTitle}>Bem-vindo</Text>
                    </View>
                    <View style={styles.barra}/>
                    <Text style={styles.textLogin}>Sistema de cadastro de alunos</Text>
                </View>
                <View style={styles.imagem}>
                    <Image
                    style={styles.img}
                    source={require('../images/img.png')}
                    />
                </View>
                <View style={styles.form}>
                    <View style={styles.formItem}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={(text) =>setEmail(text)}
                        value={email}
                        placeholder="Ex: seu@email.com"
                        />
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.text}>Senha</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={(text)=>setSenha(text)}
                        value={senha}
                        secureTextEntry={true}
                        placeholder="EX: 123***"
                        />
                    </View>
                        {loading ?(
                            <ActivityIndicator size="large" color="#ffdd20ff"/>
                        ):(
                            <View style={styles.button}>
                                <Button
                                onPress={signIn}
                                title="Entrar"
                                accessibilityLabel="Entrar no sistema"
                                color={"#480885ff"}
                                />
                                <Button
                                onPress={signUp}
                                title="Criar uma conta"
                                accessibilityLabel="Entrar no sistema"
                                color={"#480885ff"}
                                />
                            </View>
                        )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#ddddddff',
        flex: 1,
    },
    container:{
        flex: 1,
        margin:10,
    },
    header:{
        marginTop:25
    },
    textTitle:{
        fontSize: 30,
        color:'#000000ff'
    },
    barra:{
        backgroundColor: '#480885ff',
        height:3,
        width: '100%',
    },
    textLogin:{
        fontSize:14,
        fontWeight:'500',
        color:'#000000ff'
    },
    imagem:{
        alignItems:'center',
        top: 50,
        height:0
    },
    img:{
        height:180,
        width:180,
        alignContent:'center',
        justifyContent:'center'
    },
    form:{
        marginVertical: 'auto',
        gap:8,
        paddingTop:'20%'
    },
    
    formItem:{

    },

    text:{

    },

    input:{
        height: 40,
        marginTop: 6,
        borderWidth: 1,
        padding: 10,
        borderColor: '#480885ff', // Cor da borda
        borderRadius: 5,   // Cantos arredondados
    },
    
     button:{
        marginTop:25,
        gap:18
    }
})
export default ScreenLogin;