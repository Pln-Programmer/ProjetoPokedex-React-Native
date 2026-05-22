import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import Card from "../../assets/components/CardSelecao";
import Header from "../../assets/components/Header";

import Lupa from '../../assets/img/Lupa.png'
import Pokebola from '../../assets/img/pokeball.png'
import Estrela from '../../assets/img/star.png'

export default function Home() {

    const navigator = useNavigation();

  return (
    <>
    <ScrollView>
      <View style={styles.header}>
          <Header titulo="PokeVision"/>
      </View>
      <View style={styles.container}>
        <View style={styles.containerCards}>
        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("Pesquisa" as never)}> 
          <Card imagem={Lupa} titulo="Pesquisa" cor="#1261A0" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("ListarTodos" as never)}> 
          <Card imagem={Pokebola} titulo="Lista" cor="#A61B1B" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("Favorito" as never)}> 
          <Card imagem={Estrela} titulo="Favoritos" cor="#D4A900" />
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </>
  );
}
