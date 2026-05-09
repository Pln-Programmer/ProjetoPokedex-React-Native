import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./style";

import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";

const typeColors: any = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  flying: "#A890F0",
};

export default function CardListar({
  imagem,
  numero,
  nome,
  tipo1,
  tipo2,
}: any) {

  const [favorito, setFavorito] =
    useState(false);

  // PEGA SOMENTE O NÚMERO
  const idPokemon = Number(
    numero.replace("#", "")
  );

  useEffect(() => {
    verificarFavorito();
  }, []);

  async function verificarFavorito() {

    try {

      const dados =
        await AsyncStorage.getItem(
          "@favoritos"
        );

      const favoritos = dados
        ? JSON.parse(dados)
        : [];

      if (
        favoritos.includes(idPokemon)
      ) {
        setFavorito(true);
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function alternarFavorito() {

    try {

      const dados =
        await AsyncStorage.getItem(
          "@favoritos"
        );

      let favoritos = dados
        ? JSON.parse(dados)
        : [];

      // REMOVE
      if (
        favoritos.includes(idPokemon)
      ) {

        favoritos = favoritos.filter(
          (item: number) =>
            item !== idPokemon
        );

        setFavorito(false);

      } else {

        // ADICIONA
        favoritos.push(idPokemon);

        setFavorito(true);
      }

      await AsyncStorage.setItem(
        "@favoritos",
        JSON.stringify(favoritos)
      );

      console.log(favoritos);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.card}>

      <TouchableOpacity
        style={styles.favorito}
        onPress={alternarFavorito}
      >

        <Ionicons
          name={
            favorito
              ? "star"
              : "star-outline"
          }
          size={30}
          color={
            favorito
              ? "#FFD700"
              : "#999"
          }
        />

      </TouchableOpacity>

      <TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={imagem}
            style={styles.image}
          />
        </View>

        <View style={styles.info}>

          <Text style={styles.number}>
            {numero}
          </Text>

          <Text style={styles.name}>
            {nome}
          </Text>

          <View style={styles.types}>

            {tipo1 && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      typeColors[tipo1],
                  },
                ]}
              >
                <Text
                  style={styles.badgeText}
                >
                  {tipo1}
                </Text>
              </View>
            )}

            {tipo2 && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      typeColors[tipo2],
                  },
                ]}
              >
                <Text
                  style={styles.badgeText}
                >
                  {tipo2}
                </Text>
              </View>
            )}

          </View>

        </View>

      </TouchableOpacity>

    </View>
  );
}