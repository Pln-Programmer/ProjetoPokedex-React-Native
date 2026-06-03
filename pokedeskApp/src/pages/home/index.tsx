import {
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { createStyles } from "./style";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { Feather } from "@expo/vector-icons";

import Card from "../../assets/components/CardSelecao";
import Header from "../../assets/components/Header";

import Lupa from "../../assets/img/Lupa.png";
import Pokebola from "../../assets/img/pokeball.png";
import Estrela from "../../assets/img/star.png";

export default function Home() {
  const { colors, toggleTheme, isDark } = useTheme();

  const styles = createStyles(colors);

  const navigator = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        <View style={styles.header}>
          <Header titulo="PokeVision" />
        </View>

        <View style={styles.container}>
          <View style={styles.containerCards}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigator.navigate("Pesquisa" as never)
              }
            >
              <Card
                imagem={Lupa}
                titulo="Pesquisa"
                cor="#1261A0"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigator.navigate("ListarTodos" as never)
              }
            >
              <Card
                imagem={Pokebola}
                titulo="Lista"
                cor="#A61B1B"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigator.navigate("Favorito" as never)
              }
            >
              <Card
                imagem={Estrela}
                titulo="Favoritos"
                cor="#D4A900"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.trocaTemaButton,
          {
            backgroundColor: isDark
              ? "#FFFFFF"
              : "#000000",
          },
        ]}
        onPress={toggleTheme}
      >
        <Feather
          name={isDark ? "sun" : "moon"}
          size={24}
          color={isDark ? "#000000" : "#FFFFFF"}
        />
      </TouchableOpacity>
    </View>
  );
}