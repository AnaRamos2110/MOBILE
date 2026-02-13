import { View, StyleSheet, Image, Text } from "react-native";
import { Input } from "@/components/Input"

export default function Index() {
    return(
        <View style={styles.container}>
            <Image 
            source={require("@/assets/imgs1.png")}
            style={styles.ilustration}
            /> 
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha" secureTextEntry/>
            <Text>Não tem uma conta? Cadastre-se aqui</Text>
        </View>
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
    }
})