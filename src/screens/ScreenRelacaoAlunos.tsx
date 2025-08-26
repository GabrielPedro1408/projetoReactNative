import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView} from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { separator } from "../components/separator";


export function ScreenRelacaoAlunos() {
    const [dados, setDados] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    /* sor, quando eu jogo toda a execução dentro do useEffect, já faz com que a pagina receba um sinal do bd 
    assim que ele tiver alguma mudança, aí faz atualizar mais rapido a pagina, o único b.o é que quando abre o app 
    demora um pouquinho pra ele ler, sei lá o pq */
    useEffect(() => {
        const queryOrdenada = query(
            collection(FIRESTORE_DB, "Alunos"),
                orderBy("Nome", "asc")
        );
        const  carregarDados = onSnapshot(
            queryOrdenada,
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
    }, 
    []);
    return(
            <SafeAreaView style={styles.body}>
                <View style={styles.container}>
                    <FlatList
                    ItemSeparatorComponent={separator}
                    ListHeaderComponent={
                    <View style={styles.tituloAreaLista}>
                        <Text style={styles.tituloLista}>Nome: </Text> 
                        <Text style={styles.tituloLista}>Número:</Text> 
                        <Text style={styles.tituloLista}>Turma:</Text> 
                    </View>}
                    data={dados}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <View style={styles.itemAreaLista}>
                                <Text style={styles.itemLista}>{item.Nome}</Text>
                                <Text style={styles.itemLista}>{item.Numero}</Text>
                                <Text style={styles.itemLista}>{item.Turma}</Text>
                        </View>
                    }
                    ListEmptyComponent={<Text>Nenhum aluno encontrado.</Text>}
                    />
                </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    body:{
       flex:1,
       backgroundColor:'white',
       padding:15
    },
    container: {
        marginHorizontal: 10,
        backgroundColor:'white',
        borderRadius:5,
        elevation:2,
        shadowColor:'#1a1a1aff',
        paddingVertical: 15,
        paddingHorizontal:4,
        justifyContent:'center',
        marginVertical:'auto',
        bottom:10
    },

    tituloAreaLista:{
        flexDirection:'row',
    },

    tituloLista:{
        flex: 3,
        paddingVertical:5,
        marginHorizontal:'auto',
        textAlign:'center',
        fontWeight:500,
        color:'#620bb3ff'
    },

    itemAreaLista:{
        flexDirection:'row',
        textAlign:'center',
        backgroundColor:'white',

    },

    itemLista:{
        flex: 3,
        marginHorizontal:'auto',
        paddingVertical:5,
        textAlign:'center',
        fontWeight:400,
        fontSize:12
    },
});
