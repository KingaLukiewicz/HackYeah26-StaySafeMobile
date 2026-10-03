import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SafeCard.styles";

interface SafeCardProps {
  status: string;
  location?: string;
}

const threatTranslations: Record<string, string> = {
  fire: "POŻAR",
  flood: "POWÓDŹ",
  war: "ZAGROŻENIE WOJENNE",
};

export default function SafeCard({
  status = "OK",
  location = "Tworóg, Kraków",
}: SafeCardProps) {
  const router = useRouter();
  const normalizedStatus = status.trim().toLowerCase();
  const isSafe = status.toLowerCase() === "ok";

  const translatedStatus =
    threatTranslations[normalizedStatus] || status.toUpperCase();

  const cardStyle = isSafe ? styles.cardSafe : styles.cardAlert;
  const titleText = isSafe
    ? "Wszystko w porządku."
    : `WYKRYTO ZAGROŻENIE: ${translatedStatus}!`;
  const subtitleText = isSafe
    ? "Wszystko w porządku. System monitoruje otoczenie."
    : `Wykryto zagrożenie: ${translatedStatus}. Kliknij, aby zobaczyć instrukcje.`;

  const handlePress = () => {
    if (!isSafe) {
      router.push({
        pathname: "/guide",
        params: { threatId: normalizedStatus },
      });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, cardStyle]}
      activeOpacity={isSafe ? 1 : 0.9}
      onPress={handlePress}
    >
      <View style={styles.topRow}>
        <Text style={styles.eyebrow}>AKTUALNY STATUS</Text>
        <View
          style={[
            styles.iconBadge,
            isSafe ? styles.badgeSafe : styles.badgeAlert,
          ]}
        >
          {isSafe ? (
            <Feather name="check" size={18} color="#fff" />
          ) : (
            <Feather name="alert-triangle" size={18} color="#fff" />
          )}
        </View>
      </View>

      <Text style={styles.mainTitle}>{titleText}</Text>

      <View style={styles.locationRow}>
        <Feather
          name="map-pin"
          size={14}
          color={isSafe ? "rgba(255,255,255,0.8)" : "#fff"}
        />
        <Text style={styles.locationText}>{location}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>
          {isSafe
            ? "Sprawdzano przed chwilą"
            : "Dotknij, aby otworzyć instrukcję"}
        </Text>
        <View style={styles.systemStatus}>
          <MaterialCommunityIcons
            name="waveform"
            size={16}
            color={isSafe ? "rgba(255,255,255,0.9)" : "#fff"}
          />
          <Text style={styles.systemText}>System aktywny</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
