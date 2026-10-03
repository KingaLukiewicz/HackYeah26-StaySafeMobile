import ThreatCard from "@/components/ThreatCard";
import { Feather } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ChoiceScreen.styles";

export default function ChoiceScreen() {
  const router = useRouter();

  const threatsData = [
    {
      id: "fire",
      title: "Pożar",
      description:
        "Niepewne i niekontrolowane rozprzestrzenianie się ognia stwarzające zagrożenie dla życia i mienia.",
      iconName: "fire" as const,
      tone: "orange" as const,
    },
    {
      id: "flood",
      title: "Powódź",
      description:
        "Zalanie terenu w wyniku gwałtownego podniesienia się poziomu wód śródlądowych lub opadów.",
      iconName: "waves" as const,
      tone: "blue" as const,
    },
    {
      id: "war",
      title: "Zagrożenie wojenne",
      description:
        "Wystąpienie incydentów zbrojnych lub zagrożenia atakiem powietrznym.",
      iconName: "shield-alert" as const,
      tone: "purple" as const,
    },
  ];
  const [selectedId, setSelectedId] = useState("fire");
  Speech.speak(
    "Wybierz rodzaj zagrożenia. Dopasujemy instrukcje do Twojej sytuacji.",
    {
      language: "pl-PL",
      rate: 0.92,
    }
  );

  const handleStartGuide = () => {
    router.push({
      pathname: "/guide",
      params: { threatId: selectedId },
    });
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.push("/")}
          >
            <Feather name="x" size={20} color="#394a43" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Uruchom instrukcje</Text>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.eyebrow}>TRYB RĘCZNY</Text>
          <Text style={styles.pageTitle}>Co się dzieje?</Text>
          <Text style={styles.subtitle}>
            Wybierz rodzaj zagrożenia. Dopasujemy instrukcje do Twojej sytuacji.
          </Text>

          {threatsData.map((item) => (
            <ThreatCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
              tone={item.tone}
              isSelected={selectedId === item.id}
              onPress={() => setSelectedId(item.id)}
            />
          ))}
          <View style={styles.locationBox}>
            <Text style={styles.locationBoxText}>
              <Text style={styles.locationBoxBold}>Twoja lokalizacja:</Text>{" "}
              Tworóg, Kraków. Instrukcje uwzględnią najbliższe punkty
              bezpieczeństwa.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleStartGuide}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Rozpocznij prowadzenie</Text>
            <Feather name="chevron-right" size={20} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
