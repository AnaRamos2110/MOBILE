import { Text, View, StyleSheet} from "react-native";

export default function Index() {
    return(
        <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
            <Text style={styles.title}>Olá mundo!</Text>
            <Text>Olá aluno</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 900,
    }
})