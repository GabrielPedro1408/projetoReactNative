import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, onSnapshot } from "firebase/firestore";


export function ScreenRelacaoAlunos() {
    const [dados, setDados] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    /* sor, quando eu jogo toda a execução dentro do useEffect, já faz com que a pagina receba um sinal do bd 
    assim que ele tiver alguma mudança, aí faz atualizar mais rapido a pagina, o único b.o é que quando abre o app 
    demora um pouquinho pra ele ler, sei lá o pq */
    useEffect(() => {
        const  carregarDados = onSnapshot(
            collection(FIRESTORE_DB, "Alunos"),
            (snapShot) =>{
                const lista = snapShot.docs.map((d) => ({ id: d.id, ...d.data() }));
                setDados(lista);
                setLoading(false);
            }, (error)=>{
                console.log("Erro ao abrir o bd",error);
                setLoading(false);
            }
        );
    return () => carregarDados();
    }, []);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.tituloAreaLista}>
                <Text style={styles.tituloLista}>Nome: </Text> 
                <Text style={styles.tituloLista}>Número:</Text> 
                <Text style={styles.tituloLista}>Turma:</Text> 
            </View>
                <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                <View style={styles.lista}>
                    <View style={styles.itemAreaLista}>
                        <Text style={styles.itemLista}>{item.Nome}</Text>
                        <Text style={styles.itemLista}>{item.Numero}</Text>
                        <Text style={styles.itemLista}>{item.Turma}</Text>
                    </View>
                    <View style={styles.linha}></View> 
                </View> 
                }
                ListEmptyComponent={<Text>Nenhum aluno encontrado.</Text>}
                />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 10,
    },

    lista:{
        flex:2,
        justifyContent:'flex-end'
    },

    tituloAreaLista:{
        flexDirection:'row',
    },

    tituloLista:{
        flex: 3,
        paddingVertical:5,
        marginHorizontal:'auto',
        textAlign:'center'
    },

    itemAreaLista:{
        flexDirection:'row',
        textAlign:'center'
    },

    itemLista:{
        flex: 3,
        marginHorizontal:'auto',
        paddingVertical:5,
        textAlign:'center'
    },
    
    linha:{
        backgroundColor: '#480885ff',
        height:3,
        width: '100%',
        marginVertical:6
    }
});
