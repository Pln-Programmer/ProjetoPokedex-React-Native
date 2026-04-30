import { View, Text } from "react-native";
import styles from "./style";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";

export default function Favorito() {
  return (
    <>
      <Header
        titulo="Pokedex"
        voltar={
          <Feather
            name="arrow-left"
            size={30}
            color="#FFF"
          />
        }
      />
      <View style={styles.container}>

      </View>
    </>
  );
}
