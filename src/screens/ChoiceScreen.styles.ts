import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e7e3",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: { fontSize: 13, fontWeight: "600", color: "#4d5a55" },
  content: { padding: 20 },
  eyebrow: {
    fontSize: 10,
    fontWeight: "700",
    color: "#7b8883",
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1f2c27",
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#66716d",
    lineHeight: 20,
    marginBottom: 24,
  },
});
