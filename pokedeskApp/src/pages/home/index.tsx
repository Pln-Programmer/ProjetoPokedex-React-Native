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
      {/* <Header titulo="Pokedex" voltar={<Feather
            name="arrow-left"
            size={30}
            color="#FFF"
            style={styles.icon}
          />}/> */}
          <Header titulo="Pokedex"/>
      </View>
      <View style={styles.container}>
        <View style={styles.containerCards}>
        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("Pesquisa" as never)}> 
          <Card imagem={Lupa} titulo="Pesquisa" cor="#000B5B" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("ListarTodos" as never)}> 
          <Card imagem={Pokebola} titulo="Lista" cor="#720000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigator.navigate("Favorito" as never)}> 
          <Card imagem={Estrela} titulo="Favoritos" cor="#887300" />
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </>
  );
}
