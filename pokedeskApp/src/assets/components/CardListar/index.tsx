import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import { useTheme } from "../../../context/ThemeContext";

const typeColors: any = {
  Grass: "#78C850",
  Fire: "#F08030",
  Water: "#6890F0",
  Bug: "#A8B820",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Electric: "#F8D030",
  Ground: "#E0C068",
  Fairy: "#EE99AC",
  Fighting: "#C03028",
  Psychic: "#F85888",
  Rock: "#B8A038",
  Ghost: "#705898",
  Ice: "#98D8D8",
  Dragon: "#7038F8",
  Dark: "#705848",
  Steel: "#B8B8D0",
  Flying: "#A890F0",
};

export default function CardListar({
  imagem,
  id,
  numero,
  nome,
  tipo1,
  tipo2,
}: any) {
  const navigator = useNavigation();
  const { colors } = useTheme();

  const [favorito, setFavorito] = useState(false);
  const idPokemon = id;

  useEffect(() => {
    verificarFavorito();
  }, []);

  async function verificarFavorito() {
    try {
      const dados = await AsyncStorage.getItem("@favoritos");
      const favoritos = dados ? JSON.parse(dados) : [];

      if (favoritos.includes(idPokemon)) {
        setFavorito(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function alternarFavorito() {
    try {
      const dados = await AsyncStorage.getItem("@favoritos");
      let favoritos = dados ? JSON.parse(dados) : [];

      if (favoritos.includes(idPokemon)) {
        favoritos = favoritos.filter((item: number) => item !== idPokemon);
        setFavorito(false);
      } else {
        favoritos.push(idPokemon);
        setFavorito(true);
      }

      await AsyncStorage.setItem("@favoritos", JSON.stringify(favoritos));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <TouchableOpacity style={styles.favorito} onPress={alternarFavorito}>
        <Ionicons
          name={favorito ? "star" : "star-outline"}
          size={30}
          color={favorito ? "#FFD700" : colors.secondaryText}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigator.navigate(
            "Informacoes" as never,
            { pokemonId: id } as never
          )
        }
      >
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Image source={imagem} style={styles.image} />
        </View>

        <View style={styles.info}>
          <Text style={[styles.number, { color: colors.secondaryText }]}>
            {numero}
          </Text>

          <Text style={[styles.name, { color: colors.text }]}>
            {nome}
          </Text>

          <View style={styles.types}>
            {tipo1 && (
              <View
                style={[
                  styles.badge,
                  { backgroundColor: typeColors[tipo1] || "#999" },
                ]}
              >
                <Text style={styles.badgeText}>{tipo1}</Text>
              </View>
            )}

            {tipo2 && (
              <View
                style={[
                  styles.badge,
                  { backgroundColor: typeColors[tipo2] || "#999" },
                ]}
              >
                <Text style={styles.badgeText}>{tipo2}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}