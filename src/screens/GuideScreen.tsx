import { crisisData } from "@/data/CrisisSteps";
import { Feather } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./GuideScreen.styles";

export default function GuideScreen() {
  const router = useRouter();
  const { threatId } = useLocalSearchParams();

  const currentCrisis =
    crisisData[Array.isArray(threatId) ? threatId[0] : threatId] ||
    crisisData.fire;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const totalSteps = currentCrisis.steps.length;
  const activeStep = currentCrisis.steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      router.back();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        style={[styles.container, { backgroundColor: currentCrisis.toneColor }]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.topIconButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Feather name="x" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerSubtitle}>
            AKTYWNY ALARM • {currentCrisis.title.toUpperCase()}
          </Text>

          <TouchableOpacity
            style={styles.topIconButton}
            onPress={() => setIsMuted(!isMuted)}
            activeOpacity={0.8}
          >
            <Feather
              name={isMuted ? "volume-x" : "volume-2"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <Text style={styles.mainTitle}>
              Działaj spokojnie.{"\n"}Jesteśmy z Tobą.
            </Text>
            <Text style={styles.stepCounter}>
              {currentStepIndex + 1}/{totalSteps}
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            {currentCrisis.steps.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressBarSegment,
                  index <= currentStepIndex
                    ? styles.progressActive
                    : styles.progressInactive,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomCardContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollBody}
            showsVerticalScrollIndicator={false}
          >
            {currentStepIndex > 0 && (
              <TouchableOpacity
                style={styles.backStepButton}
                onPress={handlePrev}
                activeOpacity={0.7}
              >
                <Feather name="arrow-left" size={16} color="#43504b" />
                <Text style={styles.backStepText}>
                  Wróć do poprzedniego kroku
                </Text>
              </TouchableOpacity>
            )}

            <View style={styles.stepHeaderRow}>
              <View style={styles.stepNumberCircle}>
                <Text style={styles.stepNumberText}>
                  {currentStepIndex + 1}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stepTerazLabel}>TERAZ</Text>
                <Text style={styles.stepTitle}>{activeStep.title}</Text>
              </View>
            </View>

            <View style={styles.instructionCard}>
              <Text style={styles.instructionText}>{activeStep.text}</Text>
              <TouchableOpacity
                style={styles.repeatSpeechButton}
                activeOpacity={0.7}
              >
                <Feather name="volume-2" size={16} color="#43504b" />
                <Text style={styles.repeatSpeechText}>Odtwórz ponownie</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>
                {currentStepIndex < totalSteps - 1
                  ? "Wykonane — następny krok"
                  : "Jestem w bezpiecznym miejscu"}
              </Text>
              <Feather
                name={
                  currentStepIndex < totalSteps - 1 ? "chevron-right" : "check"
                }
                size={18}
                color="#fff"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.emergencyCallRow}
              activeOpacity={0.7}
            >
              <Feather name="phone-call" size={16} color="#a33731" />
              <Text style={styles.emergencyCallText}>Zadzwoń pod 112</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
