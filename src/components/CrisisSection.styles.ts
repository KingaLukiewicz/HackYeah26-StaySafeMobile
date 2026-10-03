import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 28,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: "700",
    color: "#7b8883",
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#202c28",
    letterSpacing: -0.4,
    marginBottom: 12,
  },
  manualCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e7e3",
    padding: 16,
    gap: 14,
    shadowColor: "#2a3f36",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  alertIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#ffe5e0",
    justifyContent: "center",
    alignItems: "center",
  },
  manualCardTextContainer: {
    flex: 1,
  },
  manualCardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#24302c",
  },
  manualCardSubtitle: {
    fontSize: 12,
    color: "#77817d",
    marginTop: 2,
  },
  sirenButton: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#f5f8f6",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#dce6e1",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },
  sirenButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#395b4e",
  },
});
