import { Input } from "@/components/Input";
import { Button } from "@/components/Button"
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
        const [nome, setNome]= useState("");
        const [email, setEmail]= useState("");
        const [senha, setSenha]= useState("");
        const[confSenha, setConfSenha]= useState("")

        function Verificar(){
            if (senha !== confSenha) {
            Alert.alert("Atenção", "Senha não confere!")
            } else if (senha === confSenha) {
            Alert.alert("Sucesso", "Senha Confirmada!")
            }
        }
        


    return(
        <KeyboardAvoidingView style={{flex:1}}
                behavior={Platform.select({ios:"padding", android:"height"})}
                >
        <ScrollView contentContainerStyle={{ flexGrow:1 }}
        showsVerticalScrollIndicator={false} //para não mostrar a barra de rolagem
        keyboardShouldPersistTaps="handled"
        >
        <View style={styles.container}>
            <Image 
            source={require("@/assets/formulario.png")}
            style={styles.ilustration}
            /> 
            <Text style={styles.title}>Cadastrar</Text>
            <Text style={styles.subtitle}>Crie sua conta para acessar</Text>
            <View style={styles.form}>
                <Input placeholder="Nome" keyboardType="default" 
                onChangeText={setNome}
                />
                <Input placeholder="Email" keyboardType="email-address"
                onChangeText={setEmail}
                />
                <Input placeholder="Senha" secureTextEntry 
                onChangeText={setSenha}
                />
                <Input placeholder="Confirmar senha" secureTextEntry 
                onChangeText={setConfSenha}
                />
                <Button label="Cadastrar" 
                onPress={Verificar} 
                style={{backgroundColor: "blue"}}
                />
            </View>
            <Text style={styles.footerText}>Já tem uma conta?? 
                <Link href="/" style={styles.footerLink}>
                {" "} Entre aqui
                </Link>
            </Text>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FDFDFD",
        padding:32
    },
    ilustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop:62
    },
    footerText:{
        textAlign:"center",
        marginTop:24,
        color:"#585860",
    },
    footerLink:{
        color:"#0929b8",
        fontWeight:700
    },
    form:{
        marginTop: 24,
        gap:12
    },
    title: {
        flex:1,
        alignItems:"flex-start",
        fontWeight:"900",
        fontSize: 32
    },
    subtitle: {
        fontSize:16,
        flex:1,
    },
})

