import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../pages/cadastro";
import Favorito from "../pages/favoritos";
import Home from "../pages/home";
import ListarTodos from "../pages/listarTodos";
import Login from "../pages/login";
import Pesquisa from "../pages/pesquisar";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cadastro" component={Cadastro} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Favorito" component={Favorito} />

      <Stack.Screen name="ListarTodos" component={ListarTodos} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Pesquisa" component={Pesquisa} />
    </Stack.Navigator>
  );
}
