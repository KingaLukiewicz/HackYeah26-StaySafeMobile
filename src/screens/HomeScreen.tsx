import CrisisSection from "@/components/CrisisSection";
import SafeCard from "@/components/SafeCard";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { styles } from "./HomeScreen.styles";

export default function HomeScreen() {
  const [apiStatus, setApiStatus] = useState<string>("OK");

  const fetchStatus = async () => {
    try {
      const response = await fetch("http://localhost:8000/Emergency");

      if (response.ok) {
        const textContent = await response.text();
        setApiStatus(textContent.trim());
      }
    } catch (error) {
      console.log("Błąd połączenia z API:", error);
    }
  };

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <SafeCard status={apiStatus} location="Tworóg, Kraków" />
          <CrisisSection />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
