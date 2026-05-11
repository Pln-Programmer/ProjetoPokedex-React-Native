import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";

import Header from "../../../assets/components/Header";
import { Feather } from "@expo/vector-icons";
import Card from "../../../assets/components/CardListar";
import Lista from "../../../assets/components/ListaReagioes";

export default function ListarTodos() {
  const navigator = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  const LIMIT = 30;
  const MIN_OFFSET = 721;
  const MAX_POKEMONS = 809;
  const MAX_OFFSET = MAX_POKEMONS - LIMIT;

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [adicionar, setAdicionar] = useState(MIN_OFFSET);

  async function Diminuir() {
    setAdicionar((prev) => {
      const novoValor = prev - LIMIT;
      return novoValor < MIN_OFFSET ? MIN_OFFSET : novoValor;
    });

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  async function Somar() {
    setAdicionar((prev) => {
      const novoValor = prev + LIMIT;
      return novoValor > MAX_OFFSET ? MAX_OFFSET : novoValor;
    });

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${adicionar}&limit=${LIMIT}`
        );

        const data = await res.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
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

    fetchPokemons();
  }, [adicionar]);

  return (
    <>
      <View style={styles.header}>
        <Header
          titulo="Alola"
          voltar={<Feather name="arrow-left" size={30} color="#FFF" />}
        />
      </View>

      <ScrollView ref={scrollRef}>
        <View style={styles.Lista}>
          <TouchableOpacity
            onPress={() => navigator.navigate("Kanto" as never)}
          >
            <Lista regiao="Kanto" cor="rgba(46, 125, 50, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Johto" as never)}
          >
            <Lista regiao="Johto" cor="rgba(166, 124, 0, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Hoenn" as never)}
          >
            <Lista regiao="Hoenn" cor="rgba(21, 101, 192, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Sinnoh" as never)}
          >
            <Lista regiao="Sinnoh" cor="rgba(40, 53, 147, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Unova" as never)}
          >
            <Lista regiao="Unova" cor="rgba(66, 66, 66, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Kalos" as never)}
          >
            <Lista regiao="Kalos" cor="rgba(173, 20, 87, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Alola" as never)}
          >
            <Lista regiao="Alola" cor="rgba(239, 108, 0, 1)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Galar" as never)}
          >
            <Lista regiao="Galar" cor="rgba(183, 28, 28, 0.50)" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Paldea" as never)}
          >
            <Lista regiao="Paldea" cor="rgba(106, 27, 154, 0.50)" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {loading && <ActivityIndicator size="large" color="#000" />}

          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nome={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              numero={`#${pokemon.id.toString().padStart(4, "0")}`}
              imagem={{ uri: pokemon.image }}
              tipo1={
                pokemon.types[0].charAt(0).toUpperCase() +
                pokemon.types[0].slice(1)
              }
              tipo2={
                pokemon.types[1]
                  ? pokemon.types[1].charAt(0).toUpperCase() +
                    pokemon.types[1].slice(1)
                  : null
              }
            />
          ))}
        </View>

        <View style={styles.Botoes}>
          {adicionar > MIN_OFFSET && (
            <TouchableOpacity onPress={Diminuir} style={styles.botaoDiminuir}>
              <Text style={styles.textoBotao}>⬅ Mostrar anterior</Text>
            </TouchableOpacity>
          )}

          {adicionar < MAX_OFFSET && (
            <TouchableOpacity onPress={Somar} style={styles.botaoSomar}>
              <Text style={styles.textoBotao}>Mostrar mais ➜</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </>
  );
}
