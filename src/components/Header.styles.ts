import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoIconBox: {
    width: 36,
    height: 36,
    backgroundColor: "#285c49",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  logoTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1d2925",
    letterSpacing: -0.3,
  },
  logoSubtitle: {
    fontSize: 9,
    fontWeight: "600",
    color: "#82908a",
    letterSpacing: 1.2,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e1e8e4",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
