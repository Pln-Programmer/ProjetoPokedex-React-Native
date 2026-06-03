import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";

import { createStyles } from "./style";
import { useState, useCallback } from "react";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Card from "../../assets/components/CardListar";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";

export default function Favoritos() {
  const { colors, isDark, toggleTheme } = useTheme();

  const styles = createStyles(colors);

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();
    }, [])
  );

  async function carregarFavoritos() {
    try {
      setLoading(true);

      const favoritosSalvos = await AsyncStorage.getItem("@favoritos");

      const favoritos = favoritosSalvos
        ? JSON.parse(favoritosSalvos)
        : [];

      if (favoritos.length === 0) {
        setPokemons([]);
        return;
      }

      const detailedPokemons = await Promise.all(
        favoritos.map(async (id: number) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );

          const details = await res.json();

          return {
            id: details.id,
            name: details.name,
            image: details.sprites.other.home.front_default,
            types: details.types.map((t: any) => t.type.name),
          };
        })
      );

      setPokemons(detailedPokemons);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.header}>
        <Header
          titulo="Favoritos"
          voltar={
            <Feather
              name="arrow-left"
              size={30}
              color={colors.text}
            />
          }
        />
      </View>

      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.container}>
          {loading && (
            <ActivityIndicator
              size="large"
              color={colors.text}
            />
          )}

          {!loading && pokemons.length === 0 && (
            <Text
              style={{
                color: colors.text,
                fontSize: 18,
              }}
            >
              Nenhum Pokémon favoritado
            </Text>
          )}

          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nome={
                pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1)
              }
              numero={`#${pokemon.id
                .toString()
                .padStart(4, "0")}`}
              imagem={{ uri: pokemon.image }}
              tipo1={
                pokemon.types[0].charAt(0).toUpperCase() +
                pokemon.types[0].slice(1)
              }
              tipo2={
                pokemon.types[1]
                  ? pokemon.types[1]
                      .charAt(0)
                      .toUpperCase() +
                    pokemon.types[1].slice(1)
                  : null
              }
            />
          ))}
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