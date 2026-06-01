import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Audio } from "expo-av";

import OndasSonoras from "../../assets/img/ondas.png";

import styles from "./style";

const TYPE_COLORS: any = {
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

export default function PokemonDetail() {
  const route = useRoute();

  const navigation = useNavigation();

  const { pokemonId } = route.params as {
    pokemonId: number;
  };

  const [showHeaderBar, setShowHeaderBar] = useState(false);
  const [data, setData] = useState<any>(null);
  const [evolucoes, setEvolucoes] = useState<any[]>([]);
const [metodosEvolucoes, setMetodosEvolucoes] = useState<any[]>([]);
  const [isShiny, setIsShiny] = useState(false);

useEffect(() => {
  async function fetchPokemon() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      const json = await response.json();

      setData(json);

      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      );

      const speciesData = await speciesResponse.json();

      const evolutionResponse = await fetch(
        speciesData.evolution_chain.url
      );

      const evolutionData = await evolutionResponse.json();

      const evolutionNames = nomeEvolucoes(
        evolutionData.chain
      );

      const metodos = obterMetodosEvolucao(
  evolutionData.chain
);

setMetodosEvolucoes(metodos);

      const evolutionPokemons = await Promise.all(
        evolutionNames.map(async (name: string) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );

          return response.json();
        })
      );

      setEvolucoes(evolutionPokemons);
    } catch (error) {
      console.log(error);
    }
  }

  fetchPokemon();
}, [pokemonId]);

  function nomeEvolucoes(chain: any) {
  const evolucoes = [];

  let current = chain;

  while (current) {
    evolucoes.push(current.species.name);
    current = current.evolves_to[0];
  }

  return evolucoes;
}

function obterMetodosEvolucao(chain: any) {
  const metodos = [];

  let atual = chain;

  while (atual?.evolves_to?.length > 0) {
    const detalhes =
      atual.evolves_to[0].evolution_details?.[0] || null;

    metodos.push(detalhes);

    atual = atual.evolves_to[0];
  }

  return metodos;
}

function textoEvolucao(details: any) {
  if (!details) {
    return "Unknown";
  }

  if (details.min_level) {
    return `Lv. ${details.min_level}`;
  }

  if (details.item?.name) {
    return details.item.name
      .replace("-", " ")
      .toUpperCase();
  }

  if (details.min_happiness) {
    return "HIGH FRIENDSHIP";
  }

  if (details.time_of_day) {
    return details.time_of_day.toUpperCase();
  }

  if (details.held_item?.name) {
    return `HOLDING ${details.held_item.name
      .replace("-", " ")
      .toUpperCase()}`;
  }

  return "SPECIAL";
}

  function mostrarShiny() {
    setIsShiny((prev) => !prev);
  }

  async function reproduzirSom(url: string) {
    try {
      if (!url) {
        return;
      }

      const { sound } = await Audio.Sound.createAsync({
        uri: url,
      });

      await sound.playAsync();
    } catch (error) {
      console.log("Erro ao reproduzir som:", error);
    }
  }

  if (!data) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const mainType =
    data.types[0].type.name.charAt(0).toUpperCase() +
    data.types[0].type.name.slice(1);

  const mainColor = TYPE_COLORS[mainType] || "#777";

  const somClassico = data.cries?.legacy;

  const somAtual = data.cries?.latest;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: mainColor,
        },
      ]}
    >
      <StatusBar barStyle="light-content" />

      {showHeaderBar && (
        <View
          style={[
            styles.headerFixa,
            {
              backgroundColor: mainColor,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={28} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.nomeHeaderFixa}>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </Text>
        </View>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          const scrollY = event.nativeEvent.contentOffset.y;

          if (scrollY > 80) {
            setShowHeaderBar(true);
          } else {
            setShowHeaderBar(false);
          }
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.cabecalho}>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={28} color="#FFF" />
          </TouchableOpacity>

          <View>
            <Text style={styles.nomePokemon}>
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </Text>

            <Text style={styles.numeroPokemon}>
              #{data.id.toString().padStart(3, "0")}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.containerImagem} onPress={mostrarShiny}>
          <Image
            source={{
              uri: isShiny
                ? data.sprites.other["official-artwork"].front_shiny
                : data.sprites.other["official-artwork"].front_default,
            }}
            style={styles.imagemPokemon}
          />
        </TouchableOpacity>

        <View style={styles.folhaBranca}>
          <Text style={styles.avisoShiny}>
            Clique no pokemon para ver seu Shiny
          </Text>
          <View style={styles.containerTipos}>
            {data.types.map((item: any) => {
              const typeName =
                item.type.name.charAt(0).toUpperCase() +
                item.type.name.slice(1);

              return (
                <View
                  key={item.type.name}
                  style={[
                    styles.tipoBadge,
                    {
                      backgroundColor: TYPE_COLORS[typeName] || "#777",
                    },
                  ]}
                >
                  <Text style={styles.tipoTexto}>{typeName}</Text>
                </View>
              );
            })}
          </View>

          <Text
            style={[
              styles.tituloSecao,
              {
                color: mainColor,
              },
            ]}
          >
            About
          </Text>

          <View style={styles.containerSobre}>
            <View style={styles.itemSobre}>
              <Text style={styles.valorSobre}>⚖️ {data.weight / 10} kg</Text>

              <Text style={styles.labelSobre}>Peso</Text>
            </View>

            <View style={styles.divisor} />

            <View style={styles.itemSobre}>
              <Text style={styles.valorSobre}>📏 {data.height / 10} m</Text>

              <Text style={styles.labelSobre}>Altura</Text>
            </View>

            <View style={styles.divisor} />

            <View style={styles.itemSobre}>
              <Text style={styles.valorSobre}>
                {data.moves[0]?.move.name.replace("-", " ").toUpperCase()}
              </Text>

              <Text style={styles.labelSobre}>Move</Text>
            </View>
          </View>
          <View style={styles.habilidade}>
            <View style={styles.divisorTop} />
            {data.abilities.map((item: any) => (
              <Text key={item.ability.name} style={styles.valorSobre}>
                {item.ability.name.replace("-", " ").toUpperCase()}
              </Text>
            ))}
            <Text style={styles.labelSobre}>Habilidades</Text>
          </View>

          <Text
            style={[
              styles.tituloSecao,
              {
                color: mainColor,
              },
            ]}
          >
            Base Stats
          </Text>

          <View style={styles.containerStats}>
            <View style={styles.labelsStats}>
              {data.stats.map((s: any) => (
                <Text
                  key={s.stat.name}
                  style={[
                    styles.textoLabelStat,
                    {
                      color: mainColor,
                    },
                  ]}
                >
                  {s.stat.name
                    .replace("special-attack", "Sp. Atk")
                    .replace("special-defense", "Sp. Def")
                    .replace("-", " ")}
                </Text>
              ))}
            </View>

            <View style={styles.divisorVertical} />

            <View style={styles.valoresStats}>
              {data.stats.map((s: any) => (
                <Text key={s.stat.name} style={styles.textoValorStat}>
                  {s.base_stat.toString().padStart(3, "0")}
                </Text>
              ))}
            </View>

            <View style={styles.containerProgresso}>
              {data.stats.map((s: any) => (
                <View key={s.stat.name} style={styles.fundoProgresso}>
                  <View
                    style={[
                      styles.barraProgresso,
                      {
                        width: `${(s.base_stat / 200) * 100}%`,
                        backgroundColor: mainColor,
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
          </View>

          <View style={styles.audios}>
            <TouchableOpacity
              style={[
                styles.botaoAudio,
                {
                  borderColor: mainColor,
                },
              ]}
              onPress={() => reproduzirSom(somClassico)}
            >
              <View
                style={[
                  styles.containerIconeAudio,
                  {
                    backgroundColor: mainColor,
                    shadowColor: mainColor,
                  },
                ]}
              >
                <Feather name="volume-2" size={34} color="#fff" />
              </View>

              <View style={styles.infoAudio}>
                <Text style={styles.audioTitulo}>Rugido clássico</Text>

                <Text
                  style={[
                    styles.audioSubtitulo,
                    {
                      color: mainColor,
                    },
                  ]}
                >
                  Toque para ouvir
                </Text>
              </View>

              <Image source={OndasSonoras} style={styles.audioOndas} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.botaoAudio,
                {
                  borderColor: mainColor,
                },
              ]}
              onPress={() => reproduzirSom(somAtual)}
            >
              <View
                style={[
                  styles.containerIconeAudio,
                  {
                    backgroundColor: mainColor,
                    shadowColor: mainColor,
                  },
                ]}
              >
                <Feather name="volume-2" size={34} color="#fff" />
              </View>

              <View style={styles.infoAudio}>
                <Text style={styles.audioTitulo}>Rugido atual</Text>

                <Text
                  style={[
                    styles.audioSubtitulo,
                    {
                      color: mainColor,
                    },
                  ]}
                >
                  Toque para ouvir
                </Text>
              </View>

              <Image source={OndasSonoras} style={styles.audioOndas} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerEvolucoes}>
  <Text
    style={[
      styles.tituloSecao,
      {
        color: mainColor,
      },
    ]}
  >
    Evoluções
  </Text>

{evolucoes.map((pokemon, index) => (
  <React.Fragment key={pokemon.id}>
    <TouchableOpacity
      style={styles.cardEvolucao}
      onPress={() =>
        navigation.navigate(
          "PokemonDetail" as never,
          {
            pokemonId: pokemon.id,
          } as never
        )
      }
    >
      <Image
        source={{
          uri:
            pokemon.sprites.other[
              "official-artwork"
            ].front_default,
        }}
        style={styles.imagemEvolucao}
      />

      <Text style={styles.nomeEvolucao}>
        {pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1)}
      </Text>

      <Text style={styles.idEvolucao}>
        #{pokemon.id.toString().padStart(3, "0")}
      </Text>
    </TouchableOpacity>

    {index < evolucoes.length - 1 && (
      <View style={styles.containerMetodo}>

<Feather
  name="chevron-down"
  size={28}
  color={mainColor}
/>

        <Text
          style={[
            styles.metodoEvolucao,
            {
              color: mainColor,
            },
          ]}
        >
          {textoEvolucao(
            metodosEvolucoes[index]
          )}
        </Text>
      </View>
    )}
  </React.Fragment>
))}
</View>
        </View>
      </ScrollView>
    </View>
  );
}
