import { Input } from "@/components/Input";
import { Button } from "@/components/Button"
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text>Cadastrar</Text>
            <Text>Crie sua conta para acessar</Text>
            <Image 
            source={require("@/assets/formulario.png")}
            style={styles.ilustration}
            /> 
            <View style={styles.form}>
                <Input placeholder="Nome" keyboardType="default" />
                <Input placeholder="Email" keyboardType="email-address"/>
                <Input placeholder="Senha" secureTextEntry />
                <Input placeholder="Confirmar senha" secureTextEntry />
                <Button label="Entrar" style={{backgroundColor:"light-blue"}}/>
            </View>
            <Text style={styles.title}>Já tem uma conta?? 
                <Link href="/" style={styles.subtitle}>
                {" "} Entre aqui
                </Link>
            </Text>
        </View>
        </ScrollView>
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