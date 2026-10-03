import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CrisisSection.styles";

export default function CrisisSection() {
  const router = useRouter();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.eyebrow}>POTRZEBUJESZ POMOCY?</Text>
      <Text style={styles.sectionTitle}>Uruchom tryb kryzysowy</Text>

      <TouchableOpacity
        style={styles.manualCard}
        activeOpacity={0.8}
        onPress={() => router.push("/choice")}
      >
        <View style={styles.alertIconBox}>
          <Feather name="alert-triangle" size={24} color="#bd3b33" />
        </View>
        <View style={styles.manualCardTextContainer}>
          <Text style={styles.manualCardTitle}>Wybierz zagrożenie ręcznie</Text>
          <Text style={styles.manualCardSubtitle}>
            Natychmiastowe instrukcje krok po kroku
          </Text>
        </View>
        <Feather name="chevron-right" size={20} color="#99a39f" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sirenButton} activeOpacity={0.8}>
        <MaterialCommunityIcons name="radio-tower" size={18} color="#395b4e" />
        <Text style={styles.sirenButtonText}>Rozpoznaj syrenę w otoczeniu</Text>
      </TouchableOpacity>
    </View>
  );
}
