import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import styles from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export default function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.googleButton} disabled= {isLoading} activeOpacity={0.8} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={"black"}/>
      ) : (
        <>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
