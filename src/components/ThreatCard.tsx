import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ThreatCard.styles";

type ToneType = "red" | "orange" | "blue" | "purple";

interface ThreatCardProps {
  id: string;
  title: string;
  description: string;
  iconName: any;
  tone?: ToneType;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function ThreatCard({
  id,
  title,
  description,
  iconName,
  tone = "red",
  isSelected = false,
  onPress,
}: ThreatCardProps) {
  const router = useRouter();

  const getToneStyle = (toneType: ToneType) => {
    switch (toneType) {
      case "orange":
        return styles.toneOrange;
      case "blue":
        return styles.toneBlue;
      case "purple":
        return styles.tonePurple;
      default:
        return styles.toneRed;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.threatCard, isSelected && styles.threatCardSelected]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={[styles.threatIcon, getToneStyle(tone)]}>
        <MaterialCommunityIcons name={iconName} size={22} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View
        style={[styles.selectionDot, isSelected && styles.selectionDotActive]}
      >
        {isSelected && <Feather name="check" size={13} color="white" />}
      </View>
    </TouchableOpacity>
  );
}
