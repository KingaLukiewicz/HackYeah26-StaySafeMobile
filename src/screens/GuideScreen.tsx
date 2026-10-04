import { crisisData } from "@/data/CrisisSteps";
import { Feather } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./GuideScreen.styles";

export default function GuideScreen() {
  const router = useRouter();
  const { threatId, location } = useLocalSearchParams();

  const normalizedThreatId = Array.isArray(threatId) ? threatId[0] : threatId;
  const normalizedLocation = Array.isArray(location) ? location[0] : location;

  const currentCrisis =
    crisisData[normalizedThreatId || "fire"] || crisisData.fire;

  const locationOptions = currentCrisis.locationOptions || [];
  const stepsByLocation = currentCrisis.stepsByLocation || {};

  const selectedLocationSteps =
    normalizedLocation && stepsByLocation[normalizedLocation]
      ? stepsByLocation[normalizedLocation]
      : currentCrisis.steps;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<{
    id: string;
    label: string;
    responseTitle: string;
    responseText: string;
  } | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setCurrentStepIndex(0);
    setSelectedDecision(null);
  }, [normalizedThreatId, normalizedLocation]);

  const totalSteps = selectedLocationSteps.length;
  const currentStep = selectedLocationSteps[currentStepIndex];
  const decisionOptions = currentStep?.options || [];
  const isDecisionStep = Boolean(decisionOptions.length);

  const activeStep = selectedDecision
    ? {
        title: selectedDecision.responseTitle || "",
        text: selectedDecision.responseText,
      }
    : currentStep;

  const shouldAskLocation =
    Boolean(currentCrisis.locationOptions?.length) && !normalizedLocation;

  const decisionPrompt = useMemo(
    () =>
      currentCrisis.title === "Zagrożenie wojenne"
        ? "Gdzie jesteś?"
        : "Wskaż swoją sytuację.",
    [currentCrisis.title]
  );

  useEffect(() => {
    Speech.stop();

    if (isMuted) {
      return;
    }

    let textToSpeak = "";

    if (shouldAskLocation) {
      textToSpeak = decisionPrompt;
    } else if (selectedDecision && selectedDecision.id === "no_bag") {
      textToSpeak = selectedDecision.responseText;
    } else if (selectedDecision) {
      textToSpeak = activeStep.title || activeStep.text;
    } else if (isDecisionStep) {
      textToSpeak = currentStep.text || currentStep.title;
    } else {
      textToSpeak = activeStep.title || activeStep.text;
    }

    if (textToSpeak) {
      Speech.speak(textToSpeak, {
        language: "pl-PL",
        rate: 0.95,
      });
    }

    return () => {
      Speech.stop();
    };
  }, [
    currentStepIndex,
    selectedDecision,
    shouldAskLocation,
    isMuted,
    normalizedLocation,
  ]);

  const handleNext = () => {
    if (isDecisionStep) {
      return;
    }

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      router.back();
    }
  };

  const goToChoice = () => {
    setSelectedDecision(null);
    setCurrentStepIndex(0);

    try {
      const dismissAll = (router as any).dismissAll;
      if (typeof dismissAll === "function") {
        dismissAll();
        setTimeout(() => {
          try {
            router.push("/choice");
          } catch {
            router.replace("/choice");
          }
        }, 0);
        return;
      }
    } catch {
      // fallback below
    }

    try {
      router.replace("/choice");
    } catch {
      router.push("/choice");
    }
  };

  const handlePrev = () => {
    if (selectedDecision) {
      setSelectedDecision(null);
      return;
    }

    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      return;
    }

    goToChoice();
  };

  const handleSafePlace = () => {
    goToChoice();
  };

  const handleDecision = (option: (typeof decisionOptions)[number]) => {
    if (
      normalizedLocation === "inside" &&
      currentStepIndex === 0 &&
      option.id === "has_bag"
    ) {
      setSelectedDecision(null);
      setCurrentStepIndex(1);
      return;
    }

    if (
      normalizedLocation === "inside" &&
      currentStepIndex === 0 &&
      option.id === "no_bag"
    ) {
      setSelectedDecision({
        id: option.id,
        label: option.label,
        responseTitle: option.responseTitle,
        responseText: option.responseText,
      });
      return;
    }

    setSelectedDecision({
      id: option.id,
      label: option.label,
      responseTitle: option.responseTitle,
      responseText: option.responseText,
    });
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
            onPress={handleSafePlace}
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
              {shouldAskLocation
                ? "1/1"
                : `${currentStepIndex + 1}/${totalSteps}`}
            </Text>
          </View>

          {!shouldAskLocation && (
            <View style={styles.progressBarContainer}>
              {selectedLocationSteps.map((_, index) => (
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
          )}
        </View>

        <View style={styles.bottomCardContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollBody}
            showsVerticalScrollIndicator={false}
          >
            {shouldAskLocation ? (
              <>
                <Text style={styles.locationPrompt}>{decisionPrompt}</Text>
                {locationOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={styles.locationOption}
                    activeOpacity={0.8}
                    onPress={() => {
                      router.setParams({ location: option.id });
                    }}
                  >
                    <Text style={styles.locationOptionTitle}>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <>
                {currentStepIndex > 0 ? (
                  <TouchableOpacity
                    style={styles.backStepButton}
                    onPress={handlePrev}
                    activeOpacity={0.7}
                  >
                    <Feather name="arrow-left" size={16} color="#43504b" />
                    <Text style={styles.backStepText}>
                      {selectedDecision && currentStepIndex === 2
                        ? "Wróć do poprzedniego pytania"
                        : "Wróć do poprzedniego kroku"}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.backStepButton}
                    onPress={handlePrev}
                    activeOpacity={0.7}
                  >
                    <Feather name="arrow-left" size={16} color="#43504b" />
                    <Text style={styles.backStepText}>
                      Wróć do poprzedniego pytania
                    </Text>
                  </TouchableOpacity>
                )}

                {selectedDecision && selectedDecision.id === "no_bag" ? (
                  <>
                    <View style={styles.speechCard}>
                      <Text style={styles.speechText}>
                        {selectedDecision.responseText}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.primaryButton}
                      onPress={() => {
                        setSelectedDecision(null);
                        setCurrentStepIndex(1);
                      }}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.primaryButtonText}>
                        Mam już wszystko
                      </Text>
                      <Feather name="chevron-right" size={18} color="#fff" />
                    </TouchableOpacity>
                  </>
                ) : selectedDecision ? (
                  <>
                    <View style={styles.speechCard}>
                      <Text style={styles.speechText}>
                        {activeStep.title || activeStep.text}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.primaryButton}
                      onPress={handleSafePlace}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.primaryButtonText}>
                        Jestem w bezpiecznym miejscu
                      </Text>
                      <Feather name="check" size={18} color="#fff" />
                    </TouchableOpacity>
                  </>
                ) : isDecisionStep ? (
                  <>
                    <View style={styles.speechCard}>
                      <Text style={styles.speechText}>
                        {currentStep.text || currentStep.title}
                      </Text>
                    </View>

                    <View style={styles.decisionGrid}>
                      {decisionOptions.map((option) => (
                        <TouchableOpacity
                          key={option.id}
                          style={styles.decisionButton}
                          activeOpacity={0.9}
                          onPress={() => handleDecision(option)}
                        >
                          <Text style={styles.decisionButtonText}>
                            {option.label}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.speechCard}>
                      <Text style={styles.speechText}>
                        {activeStep.title || activeStep.text}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.primaryButton}
                      onPress={handleNext}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.primaryButtonText}>
                        {currentStepIndex < totalSteps - 1
                          ? "Dalej"
                          : "Jestem w bezpiecznym miejscu"}
                      </Text>
                      <Feather
                        name={
                          currentStepIndex < totalSteps - 1
                            ? "chevron-right"
                            : "check"
                        }
                        size={18}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  </>
                )}

                <TouchableOpacity
                  style={styles.emergencyCallRow}
                  activeOpacity={0.7}
                >
                  <Feather name="phone-call" size={16} color="#a33731" />
                  <Text style={styles.emergencyCallText}>Zadzwoń pod 112</Text>
                </TouchableOpacity>
              </>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
