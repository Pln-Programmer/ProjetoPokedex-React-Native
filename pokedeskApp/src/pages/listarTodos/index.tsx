import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Card from "../../assets/components/CardSelecaoPokemon";

import kanto from "../../assets/img/kanto.png";
import johto from "../../assets/img/johto.png";
import hoenn from "../../assets/img/hoenn.png";
import sinnoh from "../../assets/img/sinnoh.png";
import unova from "../../assets/img/unova.png";
import kalos from "../../assets/img/kalos.png";
import alola from "../../assets/img/alola.png";
import galar from "../../assets/img/galar.png";
import paldea from "../../assets/img/paldea.png";

export default function ListarTodos() {
    const navigator = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <Header
          titulo="Pokedex"
          voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigator.navigate("Kanto" as never)}><Card imagem={kanto} titulo="Kanto" cor="rgba(46, 125, 50, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Johto" as never)}><Card imagem={johto} titulo="Johto" cor="rgba(166, 124, 0, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Hoenn" as never)}><Card imagem={hoenn} titulo="Hoenn" cor="rgba(21, 101, 192, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Sinnoh" as never)}><Card imagem={sinnoh} titulo="Sinnoh" cor="rgba(40, 53, 147, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Unova" as never)}><Card imagem={unova} titulo="Unova" cor="rgba(66, 66, 66, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Kalos" as never)}><Card imagem={kalos} titulo="Kalos" cor="rgba(173, 20, 87, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Alola" as never)}><Card imagem={alola} titulo="Alola" cor="rgba(239, 108, 0, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Galar" as never)}><Card imagem={galar} titulo="Galar" cor="rgba(183, 28, 28, 0.7)" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigator.navigate("Paldea" as never)}><Card imagem={paldea} titulo="Paldea" cor="rgba(106, 27, 154, 0.7)" /></TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
