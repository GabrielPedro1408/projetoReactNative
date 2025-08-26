import { collection, onSnapshot, orderBy, query, updateDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView, Button } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { separator } from "../components/separator";

export const ScreenFaltasAlunos = ()=> {
    
    const [dados, setDados] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [button, setButton] = useState<{ [key:string]: boolean }>({});

    useEffect(() => {
        const queryFaltas = query(
            collection(FIRESTORE_DB, "Alunos"),
                orderBy("Nome", "asc")
        )
        const carregarDados = onSnapshot(
            queryFaltas,
            (snapShot) => {
                const lista = snapShot.docs.map((d) => ({id: d.id, ...d.data()}));
                setDados(lista);
                setLoading(false);
            },(error) =>{
                console.log("Essa bosta ta com problema denovo pra abrir o bd", error)
                setLoading(false)
            }
        );
        return () => carregarDados();
    },
    [])
    return(
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <FlatList
                ItemSeparatorComponent={separator}
                ListHeaderComponent={
                <View style={styles.tituloArea}>
                    <Text style={styles.itemTitulo}>Aluno: </Text>
                    <Text style={styles.itemTitulo}>Presença: </Text>
                </View>}
                data={dados}
                keyExtractor ={(item) => item.id}
                renderItem = {({item}) => 
                <View style={styles.listaArea}>
                    <Text style={styles.itemLista}>{item.Nome}</Text>
                    <View style={styles.itemLista}>
                        <Button
                        onPress={async () => {
                            try {
                                const pres = doc(FIRESTORE_DB, "Alunos", item.id);
                                await updateDoc(pres, {
                                    Presenca: !item.Presenca
                                });
                            } catch (error) {
                                alert(error)
                            }
                        }}
                        title={item.Presenca ? 'Presente' : 'Faltou'}
                        color={item.Presenca ? 'green' : 'red'}
                        
                        />
                    </View>
                </View>
                }

                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor:"#ffffffff",
        padding:15
    },
    container:{
        marginHorizontal: 10,
        backgroundColor:'white',
        borderRadius:5,
        elevation:2,
        shadowColor:'#1a1a1aff',
        paddingVertical: 15,
        paddingHorizontal:4,
        justifyContent:'center',
        marginVertical:'auto',
        
    },
    tituloArea:{
        flexDirection:'row',
        
    },
    itemTitulo:{
        flex: 3,
        paddingVertical:5,
        marginHorizontal:'auto',
        textAlign:'center',
        fontWeight:500,
        color:'#620bb3ff'
    },
    listaArea:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
    },
    itemLista:{
        flex: 3,
        marginHorizontal:'auto',
        paddingVertical:10,
        textAlign:'center',
        fontWeight:400,
        fontSize:12,
        padding:35,
        minWidth:150,
        maxHeight:57        
    },
    button:{

    },
});
