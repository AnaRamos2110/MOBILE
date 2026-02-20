import { Text, View, StyleSheet } from "react-native"

export default function Index() {
    return(
        <View style={styles.container}>
        <Text style={styles.text}>Olá, user!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#FDFDFD",
        padding:32
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#3217ceff"
    }
})