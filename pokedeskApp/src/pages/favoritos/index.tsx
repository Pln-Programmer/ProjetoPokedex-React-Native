import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";

import styles from "./style";
import { useEffect, useState } from "react";

import Header from "../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Card from "../../assets/components/CardListar";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarFavoritos();
  }, []);

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
    <>
      <View style={styles.header}>
        <Header
          titulo="Favoritos"
          voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
        />
      </View>

      <ScrollView>
        <View style={styles.container}>
          {loading && (
            <ActivityIndicator size="large" color="#FFF" />
          )}

          {!loading && pokemons.length === 0 && (
            <Text style={{ color: "#000", fontSize: 18 }}>
              Nenhum Pokémon favoritado
            </Text>
          )}

          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              nome={pokemon.name}
              numero={`#${pokemon.id
                .toString()
                .padStart(4, "0")}`}
              imagem={{ uri: pokemon.image }}
              tipo1={pokemon.types[0]}
              tipo2={pokemon.types[1]}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}