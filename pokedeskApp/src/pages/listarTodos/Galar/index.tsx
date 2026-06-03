import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import { Feather } from "@expo/vector-icons";

import Header from "../../../assets/components/Header";
import Card from "../../../assets/components/CardListar";
import Lista from "../../../assets/components/ListaReagioes";

import styles from "./style";
import { useTheme } from "../../../context/ThemeContext";

export default function ListarTodos() {
  const navigator = useNavigation();
  const scrollRef = useRef<ScrollView>(null);

  const { colors } = useTheme();

  const LIMIT = 30;
  const MIN_OFFSET = 809;
  const MAX_POKEMONS = 905;
  const MAX_OFFSET = MAX_POKEMONS - LIMIT;

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [adicionar, setAdicionar] = useState(MIN_OFFSET);

  async function Diminuir() {
    setAdicionar((prev) => {
      const novoValor = prev - LIMIT;
      return novoValor < MIN_OFFSET ? MIN_OFFSET : novoValor;
    });

    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }

  async function Somar() {
    setAdicionar((prev) => {
      const novoValor = prev + LIMIT;
      return novoValor > MAX_OFFSET ? MAX_OFFSET : novoValor;
    });

    scrollRef.current?.scrollTo({ y: 0, animated: true });
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
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* HEADER */}
      <View style={{ backgroundColor: colors.background }}>
        <Header
          titulo="Galar"
          voltar={<Feather name="arrow-left" size={30} color={colors.text} />}
        />
      </View>

      <ScrollView
        ref={scrollRef}
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* REGIÕES */}
        <View
          style={[
            styles.Lista,
            {
              backgroundColor: colors.card,
              borderBottomColor: colors.border,
            },
          ]}
        >
          {[
            ["Kanto", "rgba(46, 125, 50, 0.50)"],
            ["Johto", "rgba(166, 124, 0, 0.50)"],
            ["Hoenn", "rgba(21, 101, 192, 0.50)"],
            ["Sinnoh", "rgba(40, 53, 147, 0.50)"],
            ["Unova", "rgba(66, 66, 66, 0.50)"],
            ["Kalos", "rgba(173, 20, 87, 0.50)"],
            ["Alola", "rgba(239, 108, 0, 0.50)"],
            ["Galar", "rgba(183, 28, 28, 1)"],
            ["Paldea", "rgba(106, 27, 154, 0.50)"],
          ].map(([regiao, cor]) => (
            <TouchableOpacity
              key={regiao}
              onPress={() => navigator.navigate(regiao as never)}
            >
              <Lista regiao={regiao} cor={cor} />
            </TouchableOpacity>
          ))}
        </View>

        {/* LISTA POKÉMON */}
        <View style={styles.container}>
          {loading && (
            <ActivityIndicator size="large" color={colors.text} />
          )}

          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              nome={
                pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1)
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

        {/* BOTÕES */}
        <View style={styles.Botoes}>
          {adicionar > MIN_OFFSET && (
            <TouchableOpacity
              onPress={Diminuir}
              style={[
                styles.botaoDiminuir,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={{ color: colors.text, fontWeight: "bold" }}>
                ⬅ Mostrar anterior
              </Text>
            </TouchableOpacity>
          )}

          {adicionar < MAX_OFFSET && (
            <TouchableOpacity
              onPress={Somar}
              style={[
                styles.botaoSomar,
                { backgroundColor: colors.accent },
              ]}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                Mostrar mais ➜
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}