import { Input } from "@/components/Input";
import { Button } from "@/components/Button"
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");
    function handleSignin() {
        console.log(email, senha)
        Alert.alert("Entrar", "Preencha e-mail e senha para entrar!")     
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
            source={require("@/assets/imgs1.png")}
            style={styles.ilustration}
            /> 
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha</Text>
            <View style={styles.form}>
                <Input placeholder="E-mail" keyboardType="email-address" 
                //onChangeText={(text) => console.log(text)}
                onChangeText={setEmail} 
                
                />
                <Input placeholder="Senha" 
                secureTextEntry 
                onChangeText={setSenha}
                />
                <Button label="Entrar"  onPress={handleSignin}  style={{backgroundColor:"green"}}/>
            </View>
            <Text style={styles.footerText}>Não tem uma conta? 
                <Link href="/signup" style={styles.footerLink}>
                {" "} Cadastre-se aqui
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
        fontWeight:"900",
        fontSize: 32
    },
    subtitle: {
        fontSize:16,
    },
})