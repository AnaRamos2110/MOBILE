# 📱 Anotações de Aula: StyleSheet no React Native

O React Native não usa arquivos CSS externos. Ele usa uma função chamada `StyleSheet.create` que transforma objetos JavaScript em estilos otimizados para o celular.

---

## 🏗️ Estrutura do Código Comentada

```javascript
const styles = StyleSheet.create({
    container: {
        // Ocupa 100% do espaço disponível (estica a "caixa")
        flex: 1,               
        // Cor de fundo (Usa camelCase em vez de hífen)
        backgroundColor: "#FDFDFD", 
        // Distância interna entre a borda e o conteúdo
        padding: 32            
    },
    ilustration: {
        // Ocupa toda a largura da tela
        width: "100%",         
        // Altura fixa (sem usar 'px')
        height: 330,           
        // Faz a imagem caber inteira no espaço sem distorcer
        resizeMode: "contain", 
    }
})

Recurso,No CSS Web,No React Native,O que muda?
Sintaxe,font-size,fontSize,camelCase: O hífen vira letra maiúscula.
Medidas,padding: 20px,padding: 20,"Números: Não escreva ""px"" após o valor."
Eixo Principal,Horizontal (row),Vertical (column),"Por padrão, tudo fica um embaixo do outro."
Display,block / inline,flex,Tudo é Flex: Não precisa declarar display: flex.
Hierarquia,.classe { ... },styles.nome,O estilo é um objeto JS injetado no componente.