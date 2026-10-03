import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <View style={styles.logoIconBox}>
          <Feather name="shield" size={20} color="#fff" />
        </View>
        <View>
          <Text style={styles.logoTitle}>StaySafe</Text>
          <Text style={styles.logoSubtitle}>MOBILE</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settingsButton} activeOpacity={0.7}>
        <Feather name="settings" size={20} color="#3f514a" />
      </TouchableOpacity>
    </View>
  );
}
