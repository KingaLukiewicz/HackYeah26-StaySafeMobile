import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ListenScreen.styles";

export default function ListenScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeader}>
          <Text style={styles.eyebrow}>NASŁUCH AKTYWNY</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.pageTitle}>Słucham otoczenia</Text>
          <Text style={styles.subtitle}>
            StaySafe analizuje charakter sygnału.{"\n"}Nagranie nie opuszcza
            Twojego telefonu.
          </Text>

          <View style={styles.radarContainer}>
            <View style={styles.radarRingOuter}>
              <View style={styles.radarRingInner}>
                <View style={styles.radarCenterCircle}>
                  <MaterialCommunityIcons
                    name="waveform"
                    size={36}
                    color="#fff"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.waveformContainer}>
            <View style={[styles.bar, { height: 16 }]} />
            <View style={[styles.bar, { height: 26 }]} />
            <View style={[styles.bar, { height: 18 }]} />
            <View style={[styles.bar, { height: 34 }]} />
            <View style={[styles.bar, { height: 22 }]} />
            <View style={[styles.bar, { height: 42 }]} />
            <View style={[styles.bar, { height: 32 }]} />
            <View style={[styles.bar, { height: 18 }]} />
            <View style={[styles.bar, { height: 40 }]} />
            <View style={[styles.bar, { height: 26 }]} />
            <View style={[styles.bar, { height: 20 }]} />
          </View>
          <Text style={styles.analyzingText}>Analizuję sygnał...</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoIconBox}>
              <Feather name="shield" size={20} color="#2b5243" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>
                Nie czekaj, jeśli widzisz zagrożenie
              </Text>
              <Text style={styles.infoDescription}>
                Wróć i uruchom odpowiedni proces ręcznie.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelButtonText}>Zakończ nasłuch</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
