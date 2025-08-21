import React from "react";
import { View, StyleSheet, Text, TextInput, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScreenLogin(){

    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textTitle}>Bem-vindo</Text>
            <View style={styles.barra}></View>
            <Text style={styles.textLogin}>Login</Text>

            <View style={styles.form}>
                <View style={styles.formItem}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="seu@email.com"
                    />
                </View>
                <View style={styles.formItem}>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    value={senha}
                    placeholder="sua senha"
                    />
                </View>
                <Button
                onPress={() => {}}
                title="Entrar"
                color="#480885ff"
                accessibilityLabel="Entrar no sistema"
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{

    },

    textTitle:{

    },
    barra:{

    },
    textLogin:{

    },
    form:{

    },
    
    formItem:{

    },

    text:{

    },

    input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

    button:{

    }

})