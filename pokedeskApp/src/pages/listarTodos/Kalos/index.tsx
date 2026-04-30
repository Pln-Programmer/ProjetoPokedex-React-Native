import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Lista from "../../../assets/components/ListaReagioes";

export default function ListarTodos() {

  const navigator = useNavigation()
  
  return (
    <>
      <View style={styles.header}>
        <Header
          titulo="Kalos"
          voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Lista}>
            <TouchableOpacity onPress={() => navigator.navigate("Kanto" as never)}><Lista regiao="Kanto" cor="rgba(46, 125, 50, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Johto" as never)}><Lista regiao="Johto" cor="rgba(166, 124, 0, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Hoenn" as never)}><Lista regiao="Hoenn" cor="rgba(21, 101, 192, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Sinnoh" as never)}><Lista regiao="Sinnoh" cor="rgba(40, 53, 147, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Unova" as never)}><Lista regiao="Unova" cor="rgba(66, 66, 66, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Kalos" as never)}><Lista regiao="Kalos" cor="rgba(173, 20, 87, 1)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Alola" as never)}><Lista regiao="Alola" cor="rgba(239, 108, 0, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Galar" as never)}><Lista regiao="Galar" cor="rgba(183, 28, 28, 0.50)" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate("Paldea" as never)}><Lista regiao="Paldea" cor="rgba(106, 27, 154, 0.50)" /></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
